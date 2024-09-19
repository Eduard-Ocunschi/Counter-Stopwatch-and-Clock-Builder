// IMPORTED CLASSES
import { BaseComponent } from "./classes.js";
import { EpochPlus } from "./classes.js";
import { DigitalClock } from "./classes.js";

// SELECTED HTML ELEMENTS
const counterBtn = document.querySelector(".request-btn button:first-child");
const stopwatchBtn = document.querySelector(".request-btn button:nth-child(2)");
const clockBtn = document.querySelector(".request-btn button:last-child");
const parrentContainer = document.querySelector(".requested-item");

// CALLING METHODS
const buildBase = new BaseComponent();
const buildEpoch = new EpochPlus();
const buildClock = new DigitalClock();

// INITIAL STATE
buildBase.build(parrentContainer);

// CALLING THE COUNTER
counterBtn.addEventListener("click", () => {
  buildEpoch.displayedInfo = 0;
  counterBtn.disabled = true;
  stopwatchBtn.disabled = false;
  clockBtn.disabled = false;
  parrentContainer.classList.remove("animation-faze-in");
  parrentContainer.classList.add("animation-faze-out");
  setTimeout(() => {
    parrentContainer.innerHTML = "";
    parrentContainer.classList.remove("animation-faze-out");
  }, 601);
  setTimeout(() => {
    parrentContainer.classList.add("animation-faze-in");
    buildEpoch.buildCounter(parrentContainer);
  }, 602);
  setTimeout(() => {
    parrentContainer.classList.remove("animation-faze-in");
  }, 1203);
});

// CALLING THE STOPWATCH
stopwatchBtn.addEventListener("click", () => {
  if (buildEpoch.timer) {
    clearInterval(buildEpoch.timer);
  }
  buildEpoch.timer = null;
  buildEpoch.startTime = 0;
  buildEpoch.elapsedTime = 0;
  counterBtn.disabled = false;
  stopwatchBtn.disabled = true;
  clockBtn.disabled = false;
  parrentContainer.classList.remove("animation-faze-in");
  parrentContainer.classList.add("animation-faze-out");

  setTimeout(() => {
    parrentContainer.innerHTML = "";
    parrentContainer.classList.remove("animation-faze-out");
  }, 601);

  setTimeout(() => {
    parrentContainer.classList.add("animation-faze-in");
    buildEpoch.buildStopwatch(parrentContainer);
  }, 602);

  setTimeout(() => {
    parrentContainer.classList.remove("animation-faze-in");
  }, 1203);
});

// CALLING THE CLOCK
clockBtn.addEventListener("click", () => {
  if (buildEpoch.timer) {
    clearInterval(buildEpoch.timer);
  }

  counterBtn.disabled = false;
  stopwatchBtn.disabled = false;
  clockBtn.disabled = true;
  parrentContainer.classList.remove("animation-faze-in");
  parrentContainer.classList.add("animation-faze-out");
  setTimeout(() => {
    parrentContainer.innerHTML = "";
    parrentContainer.classList.remove("animation-faze-out");
  }, 601);
  setTimeout(() => {
    parrentContainer.classList.add("animation-faze-in");
    buildClock.buildClock(parrentContainer);
  }, 602);
  setTimeout(() => {
    parrentContainer.classList.remove("animation-faze-in");
  }, 1203);
});