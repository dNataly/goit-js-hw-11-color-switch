const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let colorSwitcherId = null;
const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const randomIntegerFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", function () {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    colorSwitcherId = setInterval(function () {
        let newBg = colors[randomIntegerFromInterval(0, colors.length - 1)];
        document.body.style.backgroundColor = newBg;
    }, 1000);
});

stopBtn.addEventListener("click", function () {
    clearInterval(colorSwitcherId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
 });


