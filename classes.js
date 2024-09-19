// BASE CONTAINER GENERATOR CLASS
export class BaseComponent {
  constructor() {
    this.container = document.createElement("div");
    this.container.className = "container animation-faze-in";
    this.display = document.createElement("div");
    this.display.className = "container-display";
    this.ctrl = document.createElement("div");
    this.ctrl.className = "container-ctrl";
    this.firstBtn = document.createElement("button");
    this.firstBtn.className = "btn first-btn";
    this.secondBtn = document.createElement("button");
    this.secondBtn.className = "btn second-btn";
    this.resetBtn = document.createElement("button");
    this.resetBtn.className = "btn reset-btn";
  }

  build(parrentContainer) {
    this.ctrl.append(this.firstBtn, this.secondBtn, this.resetBtn);
    this.container.append(this.display, this.ctrl);
    parrentContainer.append(this.container);
  }
}

// COUNTER AND STOPWATCH GENERATOR CLASS
export class EpochPlus extends BaseComponent {
  #epochStatus;
  constructor() {
    super();
    this.displayedInfo = 0;
    this.timer = null;
    this.startTime = 0;
    this.elapsedTime = 0;
  }

  //COUNTER
  buildCounter(parrentElement) {
    super.build(parrentElement);
    this.firstBtn.innerText = "+";
    this.secondBtn.innerText = "-";
    this.resetBtn.innerText = "Reset";
    this.display.innerText = 0;
    this.#epochStatus = true;

    this.firstBtn.onclick = () => {
      this.displayedInfo++;
      this.#epochStatus = false;
      this.firstBtn.disabled = this.#epochStatus;
      this.display.innerText = this.displayedInfo;
    };

    this.secondBtn.onclick = () => {
      if (this.displayedInfo > 0) {
        this.displayedInfo--;
        this.display.innerText = this.displayedInfo;
        if (this.displayedInfo === 0) {
          this.#epochStatus = false;
          this.secondBtn.disabled = this.#epochStatus;
        }
      }
    };

    this.resetBtn.onclick = () => {
      this.displayedInfo = 0;
      this.display.innerText = this.displayedInfo;
    };
  }

  // STOPWATCH
  buildStopwatch(parrentElement) {
    super.build(parrentElement);
    this.display.innerText = "00:00:00:00";
    this.firstBtn.innerText = "Start";
    this.secondBtn.innerText = "Stop";
    this.resetBtn.innerText = "Reset";
    this.#epochStatus = false;

    this.firstBtn.onclick = () => {
      if (!this.#epochStatus) {
        this.startTime = Date.now() - this.elapsedTime;
        this.timer = setInterval(() => this.update(), 10);
        this.#epochStatus = true;
      }
    };

    this.secondBtn.onclick = () => {
      if (this.#epochStatus) {
        clearInterval(this.timer);
        this.elapsedTime = Date.now() - this.startTime;
        this.#epochStatus = false;
      }
    };

    this.resetBtn.onclick = () => {
      clearInterval(this.timer);
      this.startTime = 0;
      this.elapsedTime = 0;
      this.#epochStatus = false;
      this.display.innerText = "00:00:00:00";
    };
  }

  // STOPWATCH UPDATER
  update() {
    const currentTime = Date.now();
    this.elapsedTime = currentTime - this.startTime;

    let hours = Math.floor(this.elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((this.elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((this.elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((this.elapsedTime % 1000) / 10);
    this.displayedInfo = `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}:${
      miliseconds < 10 ? "0" + miliseconds : miliseconds
    }`;
    this.display.innerText = this.displayedInfo;
  }
}

// CLOCK GENERATOR CLASS
export class DigitalClock extends BaseComponent {
  constructor() {
    super();
  }

  // OVERRIDDEN BUILDER
  build(parrentContainer) {
    this.container.append(this.display);
    parrentContainer.append(this.container);
  }

  // CLOCK UPDATER
  updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    this.displayedInfo = `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
    this.display.innerText = this.displayedInfo;
  }

  // CLOCK
  buildClock(parrentContainer) {
    this.build(parrentContainer);
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }
}
