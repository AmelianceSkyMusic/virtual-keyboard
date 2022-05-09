import clickSoftAudio from './assets/sounds/click-soft.mp3';
import clickDoubleAudio from './assets/sounds/click-double.mp3';
import clickDoubleDownAudio from './assets/sounds/click-double-down.mp3';
import clickDoubleUpAudio from './assets/sounds/click-double-up.mp3';
import clickMediumAudio from './assets/sounds/click-medium.mp3';

function playSoftClick() {
  const audio = new Audio(clickSoftAudio);
  audio.play();
}
function playMediumClick() {
  const audio = new Audio(clickDoubleDownAudio);
  audio.play();
}
function playDoubleClick() {
  const audio = new Audio(clickDoubleAudio);
  audio.play();
}
function playDoubleDownClick() {
  const audio = new Audio(clickDoubleDownAudio);
  audio.play();
}
function playDoubleUpClick() {
  const audio = new Audio(clickDoubleUpAudio);
  audio.play();
}

export {
  playSoftClick,
  playMediumClick,
  playDoubleClick,
  playDoubleDownClick,
  playDoubleUpClick,
};
