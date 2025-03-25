function hotelCost(nights) {
    while (isNaN(nights) || nights === '') {
      nights = prompt('How many nights at the hotel?');
    }
    return 140 * Number(nights);
  }
  
  function planeRideCost(destination) {
    while (typeof destination !== 'string' || destination === '') {
      destination = prompt('What is your destination?');
    }
    
    switch (destination.toLowerCase()) {
      case 'london': return 183;
      case 'paris': return 220;
      default: return 300;
    }
  }
  
  function rentalCarCost(days) {
    while (isNaN(days) || days === '') {
      days = prompt('How many days for car rental?');
    }
    
    days = Number(days);
    let cost = 40 * days;
    if (days > 10) cost *= 0.95;
    return cost;
  }
  
  function totalVacationCost() {
    const nights = prompt('How many nights at the hotel?');
    const destination = prompt('What is your destination?');
    const days = prompt('How many days for car rental?');
    
    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);
    
    console.log(`Hotel: $${hotel}, Plane: $${plane}, Car: $${car}`);
    return hotel + plane + car;
  }
  
  totalVacationCost();