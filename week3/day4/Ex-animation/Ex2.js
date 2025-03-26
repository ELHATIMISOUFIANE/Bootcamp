function myMove() {
  const animate = document.getElementById("animate");
  const container = document.getElementById("container");
  let position = 0;
  const containerWidth = container.offsetWidth - animate.offsetWidth;

  const intervalId = setInterval(function () {
    if (position >= containerWidth) {
      clearInterval(intervalId); // Arrêter l'animation
    } else {    
      position++;
      animate.style.left = position + "px";
    }
  }, 1);
}
