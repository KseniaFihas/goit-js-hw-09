
const start = document.querySelector("button[data-start]");
const stop = document.querySelector("button[data-stop]");


let colorInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


start.addEventListener('click', () => {
    start.disabled = true;
    stop.disabled = false;


    colorInterval = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
}
);

stop.addEventListener("click", () => {
    
    clearInterval(colorInterval);

    start.disabled = false; 
    stop.disabled = true;
    
});








