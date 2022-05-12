import { APP } from './app';
import { KEYS_MAP } from './keysMap';

// >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

// ^------------------------ getCharFromKeyboard ------------------------
const getCharFromKeyboard = (event) => {
  const isChar = KEYS_MAP[event.code][0] === true;
  if (isChar) {
    let charCase = false;
    if (APP.capsLock && APP.shift) {
      charCase = APP.language === 'EN' ? 1 : 3; // lowercase
    } else if (APP.capsLock || APP.shift) {
      charCase = APP.language === 'EN' ? 2 : 4; // uppercase
    } else {
      charCase = APP.language === 'EN' ? 1 : 3; // lowercase
    }

    if (KEYS_MAP[event.code]) return KEYS_MAP[event.code][charCase];
  }

  return '';
};

// ^------------------------ getCgarFromCode ------------------------
const getCharFromCode = (code) => {
  let charCase = false;
  if (APP.capsLock && APP.shift) {
    charCase = APP.language === 'EN' ? 1 : 3; // lowercase
  } else if (APP.capsLock || APP.shift) {
    charCase = APP.language === 'EN' ? 2 : 4; // uppercase
  } else {
    charCase = APP.language === 'EN' ? 1 : 3; // lowercase
  }

  if (APP.capsLock && !APP.shift) { // *1
    if (KEYS_MAP[code]
         && (code === 'Backquote'
          || code === 'Digit1'
          || code === 'Digit2'
          || code === 'Digit3'
          || code === 'Digit4'
          || code === 'Digit5'
          || code === 'Digit6'
          || code === 'Digit7'
          || code === 'Digit8'
          || code === 'Digit9'
          || code === 'Digit0'
          || code === 'Minus'
          || code === 'Equal'
          || code === 'BracketLeft'
          || code === 'BracketRight'
          || code === 'Backslash'
          || code === 'Semicolon'
          || code === 'Quote'
          || code === 'Comma'
          || code === 'Period'
          || code === 'Slash'
         )
    ) {
      if ((code === 'Backquote'
      || code === 'BracketLeft'
      || code === 'BracketRight'
      || code === 'Semicolon'
      || code === 'Quote'
      || code === 'Comma'
      || code === 'Period'
      ) && APP.language === 'RU') {
        return KEYS_MAP[code][charCase];
      }

      return KEYS_MAP[code][APP.language === 'EN' ? 1 : 3];
    }
    return KEYS_MAP[code][charCase];
  } if (APP.capsLock && APP.shift) {
    if (KEYS_MAP[code]
   && (code === 'Backquote'
    || code === 'Digit1'
    || code === 'Digit2'
    || code === 'Digit3'
    || code === 'Digit4'
    || code === 'Digit5'
    || code === 'Digit6'
    || code === 'Digit7'
    || code === 'Digit8'
    || code === 'Digit9'
    || code === 'Digit0'
    || code === 'Minus'
    || code === 'Equal'
    || code === 'BracketLeft'
    || code === 'BracketRight'
    || code === 'Backslash'
    || code === 'Semicolon'
    || code === 'Quote'
    || code === 'Comma'
    || code === 'Period'
    || code === 'Slash'
   )) {
      if ((code === 'Backquote'
      || code === 'BracketLeft'
      || code === 'BracketRight'
      || code === 'Semicolon'
      || code === 'Quote'
      || code === 'Comma'
      || code === 'Period'
      ) && APP.language === 'RU') {
        return KEYS_MAP[code][charCase];
      }
      return KEYS_MAP[code][APP.language === 'EN' ? 2 : 4];
    }
    return KEYS_MAP[code][charCase];
  }

  return KEYS_MAP[code][charCase];
};

// ^------------------------ changeLanguage ------------------------
const changeLanguage = () => {
  APP.language = APP.language === 'EN' ? 'RU' : 'EN';
};

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

export {
  getCharFromKeyboard,
  getCharFromCode,
  changeLanguage,
};
