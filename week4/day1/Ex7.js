//<!-- HTML -->
//<nav id="navbar"></nav>

(function(userName) {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `<div>Welcome ${userName}! <img src="profile.jpg" alt="Profile Picture"></div>`;
})('John');

