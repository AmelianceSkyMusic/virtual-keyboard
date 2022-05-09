import clickSoftAudio from './assets/sounds/typewriter-soft-click.mp3';
import clickDoubleAudio from './assets/sounds/pen-click-and-release.mp3';
import clickHardAudio from './assets/sounds/typewriter-hard-click.mp3';

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
function playSoftClick() {
  const audio = new Audio(clickSoftAudio);
  audio.play();
}
function playHardClick() {
  const audio = new Audio(clickHardAudio);
  audio.play();
}
function playDoubleClick() {
  const audio = new Audio(clickDoubleAudio);
  audio.play();
}
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

// ^------------------------ Change Text Value ------------------------

const changeTextValue = (inputText, startShift = 0, endShift = 0) => {
  const textarea$ = document.querySelector('.textarea');
  const start = textarea$.selectionStart;
  const end = textarea$.selectionEnd;
  if (start !== end) {
    const substring = textarea$.value.substring(start, end);
    textarea$.value = textarea$.value.replace(substring, '');
  }
  const text = textarea$.value;
  textarea$.value = text.slice(0, start - startShift) + inputText + text.slice(start - endShift);

  textarea$.selectionStart = start + inputText.length - startShift - endShift;
  textarea$.selectionEnd = start + inputText.length - startShift - endShift;
};

//
//

// ^------------------------ Special Keys Function ------------------------
// *----- tab -----
const sendTab = () => {
  changeTextValue('\t');
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
const changeShiftState = (isKeyboard, ...elements) => {
  APP.shift = !APP.shift;
  if (APP.shift) {
    elements.forEach((el) => {
      el.classList.add('enable');
    });
  } else if (!isKeyboard) {
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
  changeTextValue(' ');
};

// *----- enter -----
const addEnter = () => {
  changeTextValue('\n');
};

// *----- backspace -----
const addBackspace = () => {
  const textarea$ = document.querySelector('.textarea');
  const start = textarea$.selectionStart;
  const end = textarea$.selectionEnd;
  if (start !== end) {
    changeTextValue('');
  } else {
    changeTextValue('', 1);
  }
};

// *----- delete -----
const addDelete = () => {
  const textarea$ = document.querySelector('.textarea');
  const start = textarea$.selectionStart;
  const end = textarea$.selectionEnd;
  if (start !== end) {
    changeTextValue('');
  } else {
    const text = textarea$.value;
    textarea$.value = `${text.slice(0, start)}${text.slice(start + 1)}`;

    textarea$.selectionStart = start;
    textarea$.selectionEnd = start;
  }
};

// *----- arrow up -----
const addArrowUp = () => {
  const textarea$ = document.querySelector('.textarea');
  const start = textarea$.selectionStart;
  const end = textarea$.selectionEnd;
  const lines = textarea$.value.split('\n');
  const count = lines.length; // count of lines
  let lineStart = 0;
  const linesPos = lines.map((line) => {
    const startLine = lineStart;
    const lineObj = {
      start: startLine,
      end: startLine + line.length,
      length: line.length,
    };
    lineStart += line.length + 1;
    return lineObj;
  });

  const textBeforeCursor = textarea$.value.substring(0, start);
  const textAfterCursor = textarea$.value.substring(start);
  const cursorLine = textBeforeCursor.split('\n').length - 1; // cursor line
  // Msg(linesPos);
  if (start !== end) {
    Msg('');
  } else if (linesPos[cursorLine - 1]) {
    const startNextPostion = linesPos[cursorLine - 1].start;
    const endNextPostion = linesPos[cursorLine - 1].end;
    const endNext = linesPos[cursorLine - 1].length;
    const currentCursorPosition = start - linesPos[cursorLine].start;
    Msg(currentCursorPosition, endNextPostion);
    let nextPostion = startNextPostion + currentCursorPosition;
    if (currentCursorPosition > 0 && currentCursorPosition < endNext) {
      Msg('custom');
      nextPostion = startNextPostion + currentCursorPosition;
    } else if (currentCursorPosition >= endNext) {
      Msg('end');
      nextPostion = endNextPostion;
    } else if (currentCursorPosition <= 0) {
      Msg('start');
      nextPostion = startNextPostion;
    }
    const halfLineLength = linesPos[cursorLine].length / 2;
    textarea$.selectionStart = nextPostion;
    textarea$.selectionEnd = nextPostion;
  }
};

// *----- arrow down -----
const addArrowDown = () => {
  const textarea$ = document.querySelector('.textarea');
  const start = textarea$.selectionStart;
  const end = textarea$.selectionEnd;
  const lines = textarea$.value.split('\n');
  const count = lines.length; // count of lines
  let lineStart = 0;
  const linesPos = lines.map((line) => {
    const startLine = lineStart;
    const lineObj = {
      start: startLine,
      end: startLine + line.length,
      length: line.length,
    };
    lineStart += line.length + 1;
    return lineObj;
  });

  const textBeforeCursor = textarea$.value.substring(0, start);
  const textAfterCursor = textarea$.value.substring(start);
  const cursorLine = textBeforeCursor.split('\n').length - 1; // cursor line
  // Msg(linesPos);
  // Msg(cursorLine);
  if (start !== end) {
    Msg('');
  } else if (linesPos[cursorLine + 1]) {
    const startNextPostion = linesPos[cursorLine + 1].start;
    const endNextPostion = linesPos[cursorLine + 1].end;
    const endNext = linesPos[cursorLine + 1].length;
    const currentCursorPosition = start - linesPos[cursorLine].start;
    Msg(currentCursorPosition, endNextPostion);
    let nextPostion = startNextPostion + currentCursorPosition;
    if (currentCursorPosition > 0 && currentCursorPosition < endNext) {
      Msg('custom');
      nextPostion = startNextPostion + currentCursorPosition;
    } else if (currentCursorPosition >= endNext) {
      Msg('end');
      nextPostion = endNextPostion;
    } else if (currentCursorPosition <= 0) {
      Msg('start');
      nextPostion = startNextPostion;
    }
    const halfLineLength = linesPos[cursorLine].length / 2;
    textarea$.selectionStart = nextPostion;
    textarea$.selectionEnd = nextPostion;
  }
};

// *----- arrow right -----
const addArrowRight = () => {
  const textarea$ = document.querySelector('.textarea');
  const start = textarea$.selectionStart;
  const end = textarea$.selectionEnd;
  if (start !== end) {
    Msg('');
  } else {
    textarea$.selectionStart = end + 1;
    textarea$.selectionEnd = end + 1;
  }
};

// *----- arrow left -----
const addArrowLeft = () => {
  const textarea$ = document.querySelector('.textarea');
  const start = textarea$.selectionStart;
  const end = textarea$.selectionEnd;
  if (start !== end) {
    Msg('');
  } else {
    textarea$.selectionStart = start - 1;
    textarea$.selectionEnd = start + -1;
  }
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

const sendKeyToTextArea = (key, code, isKeyboard = false) => {
  if (!key) return;

  const textarea$ = document.querySelector('.textarea');
  // Msg(key, ': ', code);
  // *-----  -----
  const addCharToTextarea = (e) => {
    const { code: eCode } = e;
    const el = e.target;

    // ^------------------------ Keypress FX ------------------------
    // const viewportOffset = el.getBoundingClientRect();
    // const { left } = viewportOffset;
    // const { top } = viewportOffset;
    // const elWidth = el.clientWidth;
    // const elHeight = el.clientHeight;

    // const keyboard = document.querySelector('.keyboard');
    // const keyboardOffset = keyboard.getBoundingClientRect();

    // const { left: leftKeyboard } = keyboardOffset;
    // const { top: topKeyboard } = keyboardOffset;

    // const fragment = new DocumentFragment();
    // const keyPressFx = createHTMLElem(fragment, 'div', ['key-press-fx']);
    // keyboard.appendChild(fragment);
    // const fxWidth = keyPressFx.offsetWidth;
    // const fxHeight = keyPressFx.offsetHeight;
    // keyPressFx.style.top = `${top - topKeyboard + (elHeight / 2) - (fxHeight / 2)}px`;
    // keyPressFx.style.left = `${left - leftKeyboard + (elWidth / 2) - (fxWidth / 2)}px`;
    // // test.style.top = `${top + (elWidth / 2)}px`;
    // // test.style.left = `${left + (elHeight / 2)}px`;

    // keyPressFx.classList.add('key-press-fx-run');
    // keyPressFx.addEventListener('animationend', () => {
    //   keyPressFx.remove();
    // });

    // ^------------------------  ------------------------

    let charFromKeyboard = '';
    if (eCode === 'Tab') {
      playHardClick();
      sendTab();
    } else if (eCode === 'CapsLock') {
      playDoubleClick();
      changeCapsLockState(el);
    } else if (eCode === 'ShiftLeft') {
      if (isKeyboard) {
        playHardClick();
      } else {
        playDoubleClick();
      }
      const shiftRight = document.querySelector('.shift-left');
      changeShiftState(true, el, shiftRight);
    } else if (eCode === 'ControlLeft') {
      playDoubleClick();
      const controlRight = document.querySelector('.control-right');
      changeControlState(el, controlRight);
    } else if (eCode === 'MetaLeft') {
      playDoubleClick();
      changeMetaState(el);
    } else if (eCode === 'AltLeft') {
      playDoubleClick();
      const altRight = document.querySelector('.alt-right');
      changeAltState(el, altRight);
    } else if (eCode === 'Space') {
      playSoftClick();
      addSpace();
    } else if (eCode === 'AltRight') {
      const altLeft = document.querySelector('.alt-left');
      changeAltState(el, altLeft);
    } else if (eCode === 'ControlRight') {
      playDoubleClick();
      const controlLeft = document.querySelector('.control-left');
      changeControlState(el, controlLeft);
    } else if (eCode === 'ShiftRight') {
      if (isKeyboard) {
        playHardClick();
      } else {
        playDoubleClick();
      }
      const shiftLeft = document.querySelector('.shift-right');
      changeShiftState(el, shiftLeft);
    } else if (eCode === 'Enter') {
      playHardClick();
      addEnter(el);
    } else if (eCode === 'Backspace') {
      playHardClick();
      addBackspace();
    } else if (eCode === 'Delete') {
      playHardClick();
      addDelete();
    } else if (eCode === 'ArrowUp') {
      playHardClick();
      addArrowUp();
    } else if (eCode === 'ArrowRight') {
      playHardClick();
      addArrowRight();
    } else if (eCode === 'ArrowDown') {
      playHardClick();
      addArrowDown();
    } else if (eCode === 'ArrowLeft') {
      playHardClick();
      addArrowLeft();
    } else if (eCode === 'Language') {
      playHardClick();
      changeLanguageKey();
    } else {
      playSoftClick();
      charFromKeyboard = (APP.control || APP.win || APP.alt) ? '' : getCharFromKeyboard(e);
      changeTextValue(charFromKeyboard);
      // textarea$.focus();
      // textarea$.selectionStart = start + charFromKeyboard.length;
      // textarea$.selectionEnd = start + charFromKeyboard.length;
    }
    // textarea$.setSelectionRange(textarea$.selectionEnd, textarea$.selectionEnd);
  };

  // if (!KEYS_MAP[code][5]) {
  // *----- emulate keyboard -----
  // key.addEventListener('keyup', () => { Msg('keyup'); });
  key.addEventListener('keydown', addCharToTextarea);
  key.dispatchEvent(new KeyboardEvent('keydown', {
    code,
  }));
  key.removeEventListener('keydown', addCharToTextarea);
  // key.dispatchEvent(new KeyboardEvent('keyup', {
  //   code,
  // }));
  // }
};

//
//

// ^------------------------ Show Animatiion On Key Press ------------------------

const showAnimationOnKeyPress = (key, isKeyboard = false) => {
  if (!key) return;

  key.classList.add('tap');
  key.addEventListener('animationend', () => {
    // if (!isKeyboard) {
    // Msg(isKeyboard);
    key.classList.remove('tap');
    // }
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

  const textarea$ = createHTMLElem(mainContainer$, 'textarea', ['textarea', 'p2', 'scroll']);

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
  // const clickAudio$ = createHTMLElem(body$, 'audio', ['audio-click']);

  // clickAudio$.src = 'assets/sounds/favicon.ico';
  // clickAudio$.src = iconN;
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
  if (!KEYS_MAP[event.code][0] && KEYS_MAP[event.code][5]) return;
  KEYS_MAP[event.code][5] = true;

  event.preventDefault();
  const { code } = event;

  const classFromCodeName = toKebabCase(code);
  const key = document.querySelector(`.${classFromCodeName}`);

  showAnimationOnKeyPress(key, true);
  sendKeyToTextArea(key, code, true);
};

//
//

const removeSpecialKeyState = (event) => {
  KEYS_MAP[event.code][5] = false;
  if (event.code === 'Tab') {
    playHardClick();
    sendTab();
  } else if (event.code === 'CapsLock') {
    playDoubleClick();
    changeCapsLockState(el);
  } else if (event.code === 'ShiftLeft') {
    const shiftLeft = document.querySelector('.shift-left');
    const shiftRight = document.querySelector('.shift-right');
    shiftLeft.classList.remove('enable');
    shiftRight.classList.remove('enable');
  } else if (event.code === 'ControlLeft') {
    playDoubleClick();
    const controlRight = document.querySelector('.control-right');
    changeControlState(el, controlRight);
  } else if (event.code === 'MetaLeft') {
    playDoubleClick();
    changeMetaState(el);
  } else if (event.code === 'AltLeft') {
    playDoubleClick();
    const altRight = document.querySelector('.alt-right');
    changeAltState(el, altRight);
  } else if (event.code === 'Space') {
    playSoftClick();
    addSpace();
  } else if (event.code === 'AltRight') {
    const altLeft = document.querySelector('.alt-left');
    changeAltState(el, altLeft);
  } else if (event.code === 'ControlRight') {
    playDoubleClick();
    const controlLeft = document.querySelector('.control-left');
    changeControlState(el, controlLeft);
  } else if (event.code === 'ShiftRight') {
    if (isKeyboard) {
      playHardClick();
    } else {
      playDoubleClick();
    }
    const shiftLeft = document.querySelector('.shift-right');
    changeShiftState(el, shiftLeft);
  } else if (event.code === 'Enter') {
    playHardClick();
    addEnter(el);
  } else if (event.code === 'Backspace') {
    playHardClick();
    addBackspace();
  } else if (event.code === 'Delete') {
    playHardClick();
    addDelete();
  } else if (event.code === 'ArrowUp') {
    playHardClick();
    addArrowUp();
  } else if (event.code === 'ArrowRight') {
    playHardClick();
    addArrowRight();
  } else if (event.code === 'ArrowDown') {
    playHardClick();
    addArrowDown();
  } else if (event.code === 'ArrowLeft') {
    playHardClick();
    addArrowLeft();
  } else if (event.code === 'Language') {
    playHardClick();
    changeLanguageKey();
  } else {
    playSoftClick();
    charFromKeyboard = (APP.control || APP.win || APP.alt) ? '' : getCharFromKeyboard(e);
    changeTextValue(charFromKeyboard);
    // textarea$.focus();
    // textarea$.selectionStart = start + charFromKeyboard.length;
    // textarea$.selectionEnd = start + charFromKeyboard.length;
  }
  // const { code } = event;
  // const classFromCodeName = toKebabCase(code);
  // const key = document.querySelector(`.${classFromCodeName}`);
  // key.classList.remove('tap');
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
  removeSpecialKeyState,
};
// function dsg(textarea$, charFromKeyboard) {
//   const start = textarea$.selectionStart;
//   const end = textarea$.selectionEnd;
//   if (start !== end) {
//     const substring = textarea$.value.substring(start, end);
//     textarea$.value = textarea$.value.replace(substring, '');
//   }
//   const text = textarea$.value;
//   textarea$.value = text.slice(0, start) + charFromKeyboard + text.slice(start);
// }
