//Ex1


// Set initial display to none
document.getElementById('totalTip').style.display = 'none';

function calculateTip() {
  // Get input values
  const billAmount = parseFloat(document.getElementById('billAmt').value);
  const serviceQuality = parseFloat(document.getElementById('serviceQual').value);
  let numberOfPeople = parseInt(document.getElementById('numOfPeople').value);

  // Validate inputs
  if (isNaN(billAmount){
    alert('Please enter the bill amount');
    return;
  }
  
  if (serviceQuality === 0) {
    alert('Please select service quality');
    return;
  }

  // Set default for number of people
  if (isNaN(numberOfPeople) || numberOfPeople < 1) {
    numberOfPeople = 1;
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'inline';
  }

  // Calculate tip
  const total = (billAmount * serviceQuality) / numberOfPeople;
  const roundedTotal = total.toFixed(2);

  // Display the tip
  document.getElementById('tip').textContent = roundedTotal;
  document.getElementById('totalTip').style.display = 'block';
}

// Add click event to calculate button
document.getElementById('calculate').onclick = calculateTip;

//Ex2

  document.getElementById('emailForm').onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    
    if (validateEmailWithoutRegex(email)) {
      alert('Email is valid!');
      // Form would submit here in a real application
    } else {
      document.getElementById('emailError').style.display = 'block';
    }
  };

  function validateEmailWithoutRegex(email) {
    // Check basic email structure
    if (!email || email.indexOf('@') === -1) return false;
    
    const parts = email.split('@');
    if (parts.length !== 2) return false;
    
    const domainParts = parts[1].split('.');
    if (domainParts.length < 2) return false;
    
    // Check if there's text before @, between @ and ., and after .
    return parts[0].length > 0 && 
           domainParts[0].length > 0 && 
           domainParts[domainParts.length - 1].length > 0;
  }



  //Ex3

  document.getElementById('getLocation').onclick = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        showPosition, 
        showError,
        { enableHighAccuracy: true }
      );
    } else {
      document.getElementById('locationOutput').textContent = 
        "Geolocation is not supported by this browser.";
    }
  };

  function showPosition(position) {
    const output = document.getElementById('locationOutput');
    output.innerHTML = `
      Latitude: ${position.coords.latitude}<br>
      Longitude: ${position.coords.longitude}
    `;
  }

  function showError(error) {
    let message;
    switch(error.code) {
      case error.PERMISSION_DENIED:
        message = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        message = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        message = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        message = "An unknown error occurred.";
        break;
    }
    document.getElementById('locationOutput').textContent = message;
  }