
const start = dokument.querySelector("button[data-start]");
const stop = document.querySelector("button[data-stop]");

start.disabled = true;
let colorInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


start.addIventListener('click', () => {
    start.disabled = true;
    stop.disabled = false;


    colorInterval = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
}
);

stop.addIventListener("click", () => {
    
    clearInterval(colorInterval);

    start.disabled = false; 
    stop.disabled = true;
    
});








