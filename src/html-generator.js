import audioS from './assets/sounds/pen-click-and-release.mp3';
import toKebabCase from './scripts/others/toKebabCase';
import APP from './app';
import { KEYS_MAP, KEYBOARD_KEYS } from './keysMap';
import {
  changeLanguage,
  getCharFromKeyboard,
  getCharFromCode,
} from './hendlers';

import {
  msg as Msg,
  createHTMLElem,
} from './scripts/modules/asm';

// >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

// ^------------------------ Update Keyboard Keys View ------------------------
const updateKeyboardKeysView = () => {
  const keys$ = document.querySelectorAll('.key[data-code]');
  keys$.forEach((elem) => {
    const el = elem;
    el.querySelector('.key__text').innerHTML = getCharFromCode(elem.dataset.code);
  });
};

//
//
// ^------------------------  ------------------------
// *----- tab -----
const sendTab = () => {
  // document.querySelector('click-audio').play();
  const textarea = document.querySelector('.textarea');
  textarea.value += '\t';
};

// *----- caps lock -----
const changeCapsLockState = (el) => {
  APP.capsLock = !APP.capsLock;
  if (APP.capsLock) {
    el.classList.add('enable');
  } else {
    el.classList.remove('enable');
  }
  updateKeyboardKeysView();
};

// *----- shift -----
const changeShiftState = (...elements) => {
  APP.shift = !APP.shift;
  if (APP.shift) {
    elements.forEach((el) => {
      el.classList.add('enable');
    });
  } else {
    elements.forEach((el) => {
      el.classList.remove('enable');
    });
  }
  updateKeyboardKeysView();
};

// *----- ctrl -----
const changeControlState = (...elements) => {
  APP.control = !APP.control;
  if (APP.control) {
    elements.forEach((el) => {
      el.classList.add('enable');
    });
  } else {
    elements.forEach((el) => {
      el.classList.remove('enable');
    });
  }
  updateKeyboardKeysView();
};

// *----- win -----
const changeMetaState = (elem) => {
  APP.win = !APP.win;
  if (APP.win) {
    elem.classList.add('enable');
  } else {
    elem.classList.remove('enable');
  }
  updateKeyboardKeysView();
};

// *----- alt -----
const changeAltState = (...elements) => {
  APP.alt = !APP.alt;
  if (APP.alt) {
    elements.forEach((el) => {
      el.classList.add('enable');
    });
  } else {
    elements.forEach((el) => {
      el.classList.remove('enable');
    });
  }
  updateKeyboardKeysView();
};

// *----- space -----
const addSpace = () => {
  const textarea = document.querySelector('.textarea');
  textarea.value += ' ';
};

// *----- enter -----
const addEnter = () => {
  const textarea = document.querySelector('.textarea');
  textarea.value += '\n';
};

// *----- backspace -----
const addBackspace = () => {
  const textarea$ = document.querySelector('.textarea');
  const start = textarea$.selectionStart;
  const end = textarea$.selectionEnd;
  Msg(`start: ${start}`);
  Msg(`end: ${end}`);
  textarea$.focus();
  if (start !== end) {
    const substring = textarea$.value.substring(start, end);
    textarea$.value = textarea$.value.replace(substring, '');
    textarea$.selectionEnd = start;
  } else {
    textarea$.value = textarea$.value.slice(0, -1);
  }
  // textarea$.selectionStart = end + charFromKeyboard.length;
  // textarea$.selectionEnd = end + charFromKeyboard.length;
};

// *----- delete -----
const addDelete = () => {
  const textarea = document.querySelector('.textarea');
  textarea.value += '*';
};

// *----- arrow up -----
const addArrowUp = () => {
  const textarea = document.querySelector('.textarea');
  textarea.value += '*';
};
// *----- arrow right -----
const addArrowRight = () => {
  const textarea = document.querySelector('.textarea');
  textarea.value += '*';
};
// *----- arrow down -----
const addArrowDown = () => {
  const textarea = document.querySelector('.textarea');
  textarea.value += '*';
};
// *----- arrow left -----
const addArrowLeft = () => {
  const textarea = document.querySelector('.textarea');
  textarea.value += '*';
};

// *----- language -----
const changeLanguageKey = () => {
  changeLanguage();
  updateKeyboardKeysView();
  document.querySelector('.language .key__text').innerHTML = APP.language;
};

//
//

// ^------------------------ Send Keys To Text Area ------------------------

const sendKeyToTextArea = (key, code) => {
  if (!key) return;

  const textarea$ = document.querySelector('.textarea');
  // Msg(key, ': ', code);
  // *-----  -----
  const addCharToTextarea = (e) => {
    const { code: eCode } = e;
    const el = e.target;

    // ^------------------------  ------------------------
    const viewportOffset = el.getBoundingClientRect();
    const { left } = viewportOffset;
    const { top } = viewportOffset;
    const elWidth = el.clientWidth;
    const elHeight = el.clientHeight;

    const keyboard = document.querySelector('.keyboard');
    const keyboardOffset = keyboard.getBoundingClientRect();

    const { left: leftKeyboard } = keyboardOffset;
    const { top: topKeyboard } = keyboardOffset;
    Msg(top, ': ', left);
    Msg(topKeyboard, ': ', leftKeyboard);

    const fragment = new DocumentFragment();
    const keyPressFx = createHTMLElem(fragment, 'div', ['key-press-fx']);
    keyboard.appendChild(fragment);
    const fxWidth = keyPressFx.offsetWidth;
    const fxHeight = keyPressFx.offsetHeight;
    Msg(fxWidth, ': ', fxHeight);
    keyPressFx.style.top = `${top - topKeyboard + (elHeight / 2) - (fxHeight / 2)}px`;
    keyPressFx.style.left = `${left - leftKeyboard + (elWidth / 2) - (fxWidth / 2)}px`;
    // test.style.top = `${top + (elWidth / 2)}px`;
    // test.style.left = `${left + (elHeight / 2)}px`;

    keyPressFx.classList.add('key-press-fx-run');
    keyPressFx.addEventListener('animationend', () => {
      keyPressFx.remove();
    });

    // ^------------------------  ------------------------

    Msg(eCode);
    let charFromKeyboard = '';
    if (eCode === 'Tab') {
      sendTab();
    } else if (eCode === 'CapsLock') {
      changeCapsLockState(el);
    } else if (eCode === 'ShiftLeft') {
      const shiftRight = document.querySelector('.shift-right');
      changeShiftState(el, shiftRight);
    } else if (eCode === 'ControlLeft') {
      const controlRight = document.querySelector('.control-right');
      changeControlState(el, controlRight);
    } else if (eCode === 'MetaLeft') {
      changeMetaState(el);
    } else if (eCode === 'AltLeft') {
      const altRight = document.querySelector('.alt-right');
      changeAltState(el, altRight);
    } else if (eCode === 'Space') {
      addSpace();
    } else if (eCode === 'AltRight') {
      const altLeft = document.querySelector('.alt-left');
      changeAltState(el, altLeft);
    } else if (eCode === 'ControlRight') {
      const controlLeft = document.querySelector('.control-left');
      changeControlState(el, controlLeft);
    } else if (eCode === 'ShiftRight') {
      const shiftLeft = document.querySelector('.shift-left');
      changeShiftState(el, shiftLeft);
    } else if (eCode === 'Enter') {
      addEnter(el);
    } else if (eCode === 'Backspace') {
      addBackspace();
    } else if (eCode === 'Delete') {
      addDelete();
    } else if (eCode === 'ArrowUp') {
      addArrowUp();
    } else if (eCode === 'ArrowRight') {
      addArrowRight();
    } else if (eCode === 'ArrowDown') {
      addArrowDown();
    } else if (eCode === 'ArrowLeft') {
      addArrowLeft();
    } else if (eCode === 'Language') {
      changeLanguageKey();
    } else {
      charFromKeyboard = (APP.control || APP.win || APP.alt) ? '' : getCharFromKeyboard(e);
      textarea$.value += charFromKeyboard;
      textarea$.focus();
      const start = textarea$.selectionStart;
      const end = textarea$.selectionEnd;
      textarea$.selectionStart = end + charFromKeyboard.length;
      textarea$.selectionEnd = end + charFromKeyboard.length;
    }
    // textarea$.setSelectionRange(textarea$.selectionEnd, textarea$.selectionEnd);
  };

  // *----- emulate keyboard -----
  key.addEventListener('keydown', addCharToTextarea);
  key.dispatchEvent(new KeyboardEvent('keydown', {
    code,
  }));
  key.removeEventListener('keydown', addCharToTextarea);
};

//
//

// ^------------------------ Show Animatiion On Key Press ------------------------

const showAnimationOnKeyPress = (key) => {
  if (!key) return;

  key.classList.add('tap');
  key.addEventListener('animationend', () => {
    key.classList.remove('tap');
  });
};

//
//

// ^------------------------ Char Keys Listener ------------------------

const addCharKeysListener = (isChar, key) => {
  if (isChar) {
    const resetShift = () => {
      if (APP.shift) {
        APP.shift = !APP.shift;
        const shiftLeft$ = document.querySelector('.shift-left');
        const shiftRight$ = document.querySelector('.shift-right');
        shiftLeft$.classList.remove('enable');
        shiftRight$.classList.remove('enable');
      }
      updateKeyboardKeysView();
    };

    key.addEventListener('click', resetShift);

    const resetControl = () => {
      if (APP.control) {
        APP.control = !APP.control;
        const controlLeft$ = document.querySelector('.control-left');
        const controlRight$ = document.querySelector('.control-right');
        controlLeft$.classList.remove('enable');
        controlRight$.classList.remove('enable');
      }
      updateKeyboardKeysView();
    };
    key.addEventListener('click', resetControl);

    const resetWin = () => {
      if (APP.win) {
        APP.win = !APP.win;
        const winLeft$ = document.querySelector('.meta-left');
        winLeft$.classList.remove('enable');
      }
      updateKeyboardKeysView();
    };

    key.addEventListener('click', resetWin);

    const resetAlt = () => {
      if (APP.alt) {
        APP.alt = !APP.alt;
        const altLeft$ = document.querySelector('.alt-left');
        const altRight$ = document.querySelector('.alt-right');
        altLeft$.classList.remove('enable');
        altRight$.classList.remove('enable');
      }
      updateKeyboardKeysView();
    };
    key.addEventListener('click', resetAlt);
  }
};

//
//

// ^------------------------ Special Keys Listener ------------------------

const addSepicalKeysListener = () => {

};

//
//
//
//

// >----------------------------------------------------------------<
// >                      FUNCTIONS TO EXPORT                       <
// >----------------------------------------------------------------<

// ^------------------------ Html Generator ------------------------

const generateHtml = () => {
  const fragment$ = new DocumentFragment(); // createvirtual fragment for compose no parent node

  // *----- create elements -----
  const bodyContainer$ = createHTMLElem(fragment$, 'div', ['body__container']);

  const main$ = createHTMLElem(bodyContainer$, 'div', ['main']);
  const mainContainer$ = createHTMLElem(main$, 'div', ['container']);

  const textarea$ = createHTMLElem(mainContainer$, 'textarea', ['textarea']);

  const keyboard$ = createHTMLElem(mainContainer$, 'div', ['keyboard']);

  // *----- add keys -----
  KEYBOARD_KEYS.forEach((code) => {
    const char = getCharFromCode(code);
    const isChar = KEYS_MAP[code][0] === true;

    // *----- create button -----
    const classFromCodeName = toKebabCase(code);
    const key$ = createHTMLElem(keyboard$, 'div', ['keyboard__key', 'key', classFromCodeName]);

    // *----- add code to key -----
    if (isChar) key$.dataset.code = code;
    // key$.dataset.code = code;

    // *----- add listener to button -----
    key$.addEventListener('click', () => showAnimationOnKeyPress(key$));
    key$.addEventListener('click', () => sendKeyToTextArea(key$, code));

    addCharKeysListener(isChar, key$);

    createHTMLElem(key$, 'p', ['p1', 'key__text'], char);
  });

  // *----- add virtual node to body -----
  const body$ = document.querySelector('body');
  body$.appendChild(fragment$);

  // *----- add audio -----
  const clickAudio$ = createHTMLElem(body$, 'audio', ['audio-click']);

  clickAudio$.src = audioS;
  // body$.appendChild(clickAudio$);

  // *----- add listeners foe special keys -----
  addSepicalKeysListener();

  // *----- add focus to textarea -----
  textarea$.addEventListener('blur', () => { textarea$.focus(); });
  textarea$.focus();
};

//
//

// ^------------------------ Send Type Key To Virtual Keyboard ------------------------

const sendTypeKeyToVirtualKeyboard = (event) => {
  event.preventDefault();
  const { code } = event;

  const classFromCodeName = toKebabCase(code);
  const key = document.querySelector(`.${classFromCodeName}`);

  showAnimationOnKeyPress(key);
  sendKeyToTextArea(key, code);
};

//
//
//
//

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export {
  generateHtml,
  sendTypeKeyToVirtualKeyboard,
};
