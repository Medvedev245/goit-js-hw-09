const refs = {
  bodyColor: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
// ===========================================
let timerId = null;

refs.btnStart.addEventListener('click', () => {
  refs.btnStart.disabled = true;
  timerId = setInterval(() => {
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.btnStop.addEventListener('click', () => {
  refs.btnStart.disabled = false;
  clearInterval(timerId);
});
// ===========================================
// console.dir(refs.btnStart);
// console.log(refs.btnStop);
// console.dir(refs.bodyColor.style.backgroundColor);
// ===========================================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());
