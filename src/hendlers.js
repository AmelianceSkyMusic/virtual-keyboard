import APP from './app';
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
//   const lowercase = APP.language === 'EN' ? 1 : 3;
//   const uppercase = APP.language === 'EN' ? 2 : 4;

  let charCase = false;
  if (APP.capsLock && APP.shift) {
    charCase = APP.language === 'EN' ? 1 : 3; // lowercase
  } else if (APP.capsLock || APP.shift) {
    charCase = APP.language === 'EN' ? 2 : 4; // uppercase
  } else {
    charCase = APP.language === 'EN' ? 1 : 3; // lowercase
  }
  if (KEYS_MAP[code]) return KEYS_MAP[code][charCase];
  //   if (APP.shift && APP.capsLock) {
  //     if (KEYS_MAP[code]) return KEYS_MAP[code][lowercase];
  //   } else if (APP.shift || APP.capsLock) {
  //     if (KEYS_MAP[code]) return KEYS_MAP[code][uppercase];
  //   } else if (KEYS_MAP[code]) return KEYS_MAP[code][lowercase];
  return '';
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
