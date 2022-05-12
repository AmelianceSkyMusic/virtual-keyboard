import { APP } from './app';

import clickSoftAudio from './assets/sounds/click-soft.mp3';
import clickDoubleAudio from './assets/sounds/click-double.mp3';
import clickDoubleDownAudio from './assets/sounds/click-double-down.mp3';
import clickDoubleUpAudio from './assets/sounds/click-double-up.mp3';

function playSoftClick() {
  if (APP.win < 2) {
    const audio = new Audio(clickSoftAudio);
    audio.play();
  }
}
function playMediumClick() {
  if (APP.win < 2) {
    const audio = new Audio(clickDoubleDownAudio);
    audio.play();
  }
}
function playDoubleClick() {
  if (APP.win < 2) {
    const audio = new Audio(clickDoubleAudio);
    audio.play();
  }
}
function playDoubleDownClick() {
  if (APP.win < 2) {
    const audio = new Audio(clickDoubleDownAudio);
    audio.play();
  }
}
function playDoubleUpClick() {
  if (APP.win < 2) {
    const audio = new Audio(clickDoubleUpAudio);
    audio.play();
  }
}

export {
  playSoftClick,
  playMediumClick,
  playDoubleClick,
  playDoubleDownClick,
  playDoubleUpClick,
};
