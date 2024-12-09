
let hue = 0;
function updateColor() {
     document.querySelector('.text').style.color = `hsl(${hue}, 100%, 50%)`
     hue = (hue + 1) % 360;
     requestAnimationFrame(updateColor);
}

updateColor();
