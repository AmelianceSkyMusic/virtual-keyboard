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
  const keys$ = document.querySelectorAll('.key');
  keys$.forEach((code) => {
    // Msg(code);
  });
};

//
//

// ^------------------------ Send Keys To Text Area ------------------------

const sendKeyToTextArea = (key, code) => {
  const textarea$ = document.querySelector('.textarea');

  // *-----  -----
  const addCharToTextarea = (e) => {
    const charFromKeyboard = (APP.control || APP.win || APP.alt) ? '' : getCharFromKeyboard(e);
    textarea$.innerHTML += charFromKeyboard;
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
  // *----- caps lock -----
  const capsLock$ = document.querySelector('.caps-lock');
  capsLock$.addEventListener('click', () => {
    APP.capsLock = !APP.capsLock;
    if (APP.capsLock) {
      capsLock$.classList.add('enable');
    } else {
      capsLock$.classList.remove('enable');
    }
    updateKeyboardKeysView();
  });

  // *----- shift -----
  const shiftLeft$ = document.querySelector('.shift-left');
  const shiftRight$ = document.querySelector('.shift-right');
  const changeShiftState = () => {
    APP.shift = !APP.shift;
    if (APP.shift) {
      shiftLeft$.classList.add('enable');
      shiftRight$.classList.add('enable');
    } else {
      shiftLeft$.classList.remove('enable');
      shiftRight$.classList.remove('enable');
    }
    updateKeyboardKeysView();
  };
  shiftLeft$.addEventListener('click', changeShiftState);
  shiftRight$.addEventListener('click', changeShiftState);

  // *----- ctrl -----
  const controlLeft$ = document.querySelector('.control-left');
  const controlRight$ = document.querySelector('.control-right');
  const changeControlState = () => {
    APP.control = !APP.control;
    if (APP.control) {
      controlLeft$.classList.add('enable');
      controlRight$.classList.add('enable');
    } else {
      controlLeft$.classList.remove('enable');
      controlRight$.classList.remove('enable');
    }
    updateKeyboardKeysView();
  };
  controlLeft$.addEventListener('click', changeControlState);
  controlRight$.addEventListener('click', changeControlState);

  // *----- win -----
  const winLeft$ = document.querySelector('.meta-left');
  const changeWinState = () => {
    APP.win = !APP.win;
    if (APP.win) {
      winLeft$.classList.add('enable');
    } else {
      winLeft$.classList.remove('enable');
    }
    updateKeyboardKeysView();
  };
  winLeft$.addEventListener('click', changeWinState);

  // *----- alt -----
  const altLeft$ = document.querySelector('.alt-left');
  const altRight$ = document.querySelector('.alt-right');
  const changeAltState = () => {
    APP.alt = !APP.alt;
    if (APP.alt) {
      altLeft$.classList.add('enable');
      altRight$.classList.add('enable');
    } else {
      altLeft$.classList.remove('enable');
      altRight$.classList.remove('enable');
    }
    updateKeyboardKeysView();
  };
  altLeft$.addEventListener('click', changeAltState);
  altRight$.addEventListener('click', changeAltState);

  // *----- tab -----
  const tab$ = document.querySelector('.tab');
  tab$.addEventListener('click', () => {
    const textarea = document.querySelector('.textarea');
    textarea.innerHTML += '\t';
  });

  // *----- space -----
  const space$ = document.querySelector('.space');
  space$.addEventListener('click', () => {
    const textarea = document.querySelector('.textarea');
    textarea.innerHTML += ' ';
  });

  // *----- language -----
  const language$ = document.querySelector('.language');
  language$.addEventListener('click', () => {
    Msg('Язык изменен');
    changeLanguage();
    updateKeyboardKeysView();
    document.querySelector('.language .key__text').innerHTML = APP.language;
  });
};

//
//
//
//

// >----------------------------------------------------------------<
// >                       EXPORTED FUNCTIONS                       <
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

    // *----- add listener to button -----
    key$.addEventListener('click', () => showAnimationOnKeyPress(key$));
    key$.addEventListener('click', () => sendKeyToTextArea(key$, code));

    addCharKeysListener(isChar, key$);

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
  event.preventDefault();
  const classFromCodeName = toKebabCase(event.code);
  const key = document.querySelector(`.${classFromCodeName}`);
  showAnimationOnKeyPress(key);
  sendKeyToTextArea(key, event.code);
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
