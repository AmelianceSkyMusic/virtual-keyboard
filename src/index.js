import './style/scss/dark.scss';
import './style/style.scss';
// import './css/style.css';
import { msg as Msg } from './scripts/modules/asm';
// import html from './html';
// import htmlGenerator from './html-generator';
// import  from './gui';
// import Key from './Key';
import APP from './app';
import KEYS_MAP from './keysMap';
import KEYBOARD_KEYS from './keyboardKeys';
import htmlGenerator from './html-generator';

htmlGenerator(KEYBOARD_KEYS, KEYS_MAP);

const getCharFromKeyboard = (event, language) => {
  const lowercase = language === 'EN' ? 0 : 2;
  const uppercase = language === 'EN' ? 1 : 3;

  if (event.shiftKey && event.getModifierState('CapsLock')) {
    if (KEYS_MAP[event.code]) Msg(KEYS_MAP[event.code][lowercase]);
  } else if (event.shiftKey || event.getModifierState('CapsLock')) {
    if (KEYS_MAP[event.code]) Msg(KEYS_MAP[event.code][uppercase]);
  } else if (KEYS_MAP[event.code]) Msg(KEYS_MAP[event.code][lowercase]);
};

document.addEventListener('keydown', (event) => getCharFromKeyboard(event, 'RU'));

// import imgFile from './assets/img/photo.jpg';

// const img = document.querySelector('.img');
// img.src = imgFile;

// import jsonFile from './assets/index.json'; // #asm импорт json напрямую в js
// import imgFile from './assets/img/photo.jpg'; // #asm импорт картинки
// import image from './assets/svg/image-24.svg'; // #asm импорт картинки
// import './pages/main/scripts/index.js';
