import {
  playSoftClick,
  playMediumClick,
  playDoubleClick,
  playDoubleDownClick,
  playDoubleUpClick,
} from './sound';
import toKebabCase from './scripts/others/toKebabCase';
import { APP } from './app';
import { KEYS_MAP, KEYBOARD_KEYS } from './keysMap';
import {
  changeLanguage,
  getCharFromKeyboard,
  getCharFromCode,
} from './hendlers';

import {
  createHTMLElem,
} from './scripts/modules/asm';

// >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

function doNothing() {

}

// ^------------------------ Update Keyboard Keys View ------------------------
const updateKeyboardKeysView = () => {
  const keys$ = document.querySelectorAll('.key[data-code]');
  keys$.forEach((elem) => {
    const el = elem;
    el.querySelector('.key__text').innerHTML = getCharFromCode(elem.dataset.code);
  });
};

window.addEventListener('load', () => {
  setTimeout(() => {
    const language$ = document.querySelector('.language .key__text');
    language$.innerHTML = APP.language;
    const textarea$ = document.querySelector('.textarea');
    textarea$.value = 'Клавиатура создана в операционной системе Windows\nДля переключения языка используйте: ctrl + alt';
    updateKeyboardKeysView();
    // setTimeout(() => {
    //   const fragment$ = new DocumentFragment(); // createvirtual fragment for compose no parent node
    //   const zeroBlock$ = createHTMLElem(fragment$, 'div', ['.zero-block']);
    //   const blackout$ = createHTMLElem(zeroBlock$, 'div', ['.blackout']);
    //   blackout$.classList.add('.show');

    //   const body$ = document.querySelector('body');
    //   body$.prepend(fragment$);
    // }, 0);
  }, 0);
});

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

  const cursorLine = textBeforeCursor.split('\n').length - 1; // cursor line

  if (start !== end) {
    doNothing();
  } else if (linesPos[cursorLine - 1]) {
    const startNextPostion = linesPos[cursorLine - 1].start;
    const endNextPostion = linesPos[cursorLine - 1].end;
    const endNext = linesPos[cursorLine - 1].length;
    const currentCursorPosition = start - linesPos[cursorLine].start;
    let nextPostion = startNextPostion + currentCursorPosition;
    if (currentCursorPosition > 0 && currentCursorPosition < endNext) {
      nextPostion = startNextPostion + currentCursorPosition;
    } else if (currentCursorPosition >= endNext) {
      nextPostion = endNextPostion;
    } else if (currentCursorPosition <= 0) {
      nextPostion = startNextPostion;
    }

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

  const cursorLine = textBeforeCursor.split('\n').length - 1; // cursor line

  if (start !== end) {
    doNothing();
  } else if (linesPos[cursorLine + 1]) {
    const startNextPostion = linesPos[cursorLine + 1].start;
    const endNextPostion = linesPos[cursorLine + 1].end;
    const endNext = linesPos[cursorLine + 1].length;
    const currentCursorPosition = start - linesPos[cursorLine].start;

    let nextPostion = startNextPostion + currentCursorPosition;
    if (currentCursorPosition > 0 && currentCursorPosition < endNext) {
      nextPostion = startNextPostion + currentCursorPosition;
    } else if (currentCursorPosition >= endNext) {
      nextPostion = endNextPostion;
    } else if (currentCursorPosition <= 0) {
      nextPostion = startNextPostion;
    }

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
    doNothing();
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
    doNothing();
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

  // *-----  -----
  const addCharToTextarea = (e) => {
    const { code: eCode } = e;
    const el = e.target;

    // ^------------------------ Keypress FX ------------------------
    if (APP.win) {
      const viewportOffset = el.getBoundingClientRect();
      const { left } = viewportOffset;
      const { top } = viewportOffset;
      const elWidth = el.clientWidth;
      const elHeight = el.clientHeight;

      const keyboard = document.querySelector('.keyboard');
      const keyboardOffset = keyboard.getBoundingClientRect();

      const { left: leftKeyboard } = keyboardOffset;
      const { top: topKeyboard } = keyboardOffset;

      const fragment = new DocumentFragment();
      const keyPressFx = createHTMLElem(fragment, 'div', ['key-press-fx']);
      keyboard.appendChild(fragment);
      const fxWidth = keyPressFx.offsetWidth;
      const fxHeight = keyPressFx.offsetHeight;
      keyPressFx.style.top = `${top - topKeyboard + (elHeight / 2) - (fxHeight / 2)}px`;
      keyPressFx.style.left = `${left - leftKeyboard + (elWidth / 2) - (fxWidth / 2)}px`;

      keyPressFx.classList.add('key-press-fx-run');
      keyPressFx.addEventListener('animationend', () => {
        keyPressFx.remove();
      });
    }

    // ^------------------------  ------------------------

    let charFromKeyboard = '';
    if (eCode === 'Tab') {
      playMediumClick();
      sendTab();
    } else if (eCode === 'CapsLock') {
      playDoubleClick();
      changeCapsLockState(el);
    } else if (eCode === 'ShiftLeft' || eCode === 'ShiftRight') {
      if (isKeyboard) {
        playDoubleDownClick();
      } else {
        playDoubleClick();
      }
      const shiftRight = document.querySelector('.shift-right');
      const shiftLeft = document.querySelector('.shift-left');
      changeShiftState(true, shiftRight, shiftLeft);
    } else if (eCode === 'ControlLeft' || eCode === 'ControlRight') {
      if (isKeyboard) {
        playDoubleDownClick();
      } else {
        playDoubleClick();
      }
      const controlRight = document.querySelector('.control-right');
      const controlLeft = document.querySelector('.control-left');
      changeControlState(controlLeft, controlRight);
    } else if (eCode === 'MetaLeft') {
      playDoubleClick();
      changeMetaState(el);
    } else if (eCode === 'AltLeft' || eCode === 'AltRight') {
      if (isKeyboard) {
        playDoubleDownClick();
      } else {
        playDoubleClick();
      }
      const altRight = document.querySelector('.alt-right');
      const altLeft = document.querySelector('.alt-left');
      changeAltState(altLeft, altRight);
    } else if (eCode === 'Space') {
      playSoftClick();
      addSpace();
    } else if (eCode === 'Enter') {
      playMediumClick();
      addEnter(el);
    } else if (eCode === 'Backspace') {
      playMediumClick();
      addBackspace();
    } else if (eCode === 'Delete') {
      playMediumClick();
      addDelete();
    } else if (eCode === 'ArrowUp') {
      playMediumClick();
      addArrowUp();
    } else if (eCode === 'ArrowRight') {
      playMediumClick();
      addArrowRight();
    } else if (eCode === 'ArrowDown') {
      playMediumClick();
      addArrowDown();
    } else if (eCode === 'ArrowLeft') {
      playMediumClick();
      addArrowLeft();
    } else if (eCode === 'Language') {
      playMediumClick();
      changeLanguageKey();
    } else {
      playSoftClick();
      charFromKeyboard = (APP.control || APP.win || APP.alt) ? '' : getCharFromKeyboard(e);
      changeTextValue(charFromKeyboard);
    }
    if (APP.control && APP.alt) {
      const language$ = document.querySelector('.language .key__text');
      if (language$.innerHTML === 'RU') {
        APP.language = 'EN';
      } else {
        APP.language = 'RU';
      }
      language$.innerHTML = APP.language;
      updateKeyboardKeysView();
    }
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

  const textarea$ = createHTMLElem(mainContainer$, 'textarea', ['textarea', 'p2', 'scroll']);

  const keyboard$ = createHTMLElem(mainContainer$, 'div', ['keyboard']);

  // *----- add keys -----
  KEYBOARD_KEYS.forEach((code) => {
    let char = getCharFromCode(code);
    const isChar = KEYS_MAP[code][0] === true;

    // *----- create button -----
    const classFromCodeName = toKebabCase(code);
    const key$ = createHTMLElem(keyboard$, 'div', ['keyboard__key', 'key', classFromCodeName]);

    // *----- add code to key -----
    if (isChar) key$.dataset.code = code;

    // *----- add listener to button -----
    key$.addEventListener('click', () => showAnimationOnKeyPress(key$));
    key$.addEventListener('click', () => sendKeyToTextArea(key$, code));

    addCharKeysListener(isChar, key$);

    if (code === 'Language') {
      char = APP.language;
    }

    createHTMLElem(key$, 'p', ['p1', 'key__text'], char);
  });

  // *----- add virtual node to body -----
  const body$ = document.querySelector('body');
  body$.appendChild(fragment$);

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
  let code = '';
  if (!KEYBOARD_KEYS.find((item) => item === event.code)) return;
  if (!event.code) {
    if (KEYS_MAP.ShiftRight[5]) return;
  } else if (!KEYS_MAP[event.code][0] && KEYS_MAP[event.code][5]
          && event.code !== 'Backspace' && event.code !== 'Delete'
          && event.code !== 'Enter' && event.code !== 'Tab'
          && event.code !== 'ArrowUp' && event.code !== 'ArrowDown'
          && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight'
          && event.code !== 'Space') return;
  code = event.code;
  if (event.code !== 'ShiftLeft' && event.key === 'Shift') {
    code = 'ShiftRight';
  }
  KEYS_MAP[code][5] = true;

  event.preventDefault();

  const classFromCodeName = toKebabCase(code);
  const key = document.querySelector(`.${classFromCodeName}`);

  showAnimationOnKeyPress(key);
  sendKeyToTextArea(key, code, true);
};

//
//

const removeSpecialKeyState = (event) => {
  if (!KEYBOARD_KEYS.find((item) => item === event.code)) return;
  let eCode = '';
  if (!event.code) {
    if (!KEYS_MAP.ShiftRight[5]) return;
  }
  eCode = event.code;
  if (event.code !== 'ShiftLeft' && event.key === 'Shift') {
    eCode = 'ShiftRight';
  }

  KEYS_MAP[eCode][5] = false;

  if (eCode === 'ShiftLeft' || eCode === 'ShiftRight') {
    APP.shift = false;
    document.querySelector('.shift-left').classList.remove('enable');
    document.querySelector('.shift-right').classList.remove('enable');
    playDoubleUpClick();
    updateKeyboardKeysView();
  } else if (eCode === 'ControlLeft' || eCode === 'ControlRight') {
    APP.control = false;
    document.querySelector('.control-left').classList.remove('enable');
    document.querySelector('.control-right').classList.remove('enable');
    playDoubleUpClick();
    updateKeyboardKeysView();
  } else if (eCode === 'AltLeft' || eCode === 'AltRight') {
    APP.alt = false;
    document.querySelector('.alt-right').classList.remove('enable');
    document.querySelector('.alt-left').classList.remove('enable');
    playDoubleUpClick();
    updateKeyboardKeysView();
  }
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
