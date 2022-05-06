/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./scripts/modules/createHTMLElem.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// >----------------------------------------------------------------<
// >                            FUNCTION                            <
// >----------------------------------------------------------------<
function createHTMLElem(parent, elementType) {
  var _elName$classList;

  var classNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  // create element
  var elName = document.createElement(elementType);

  (_elName$classList = elName.classList).add.apply(_elName$classList, _toConsumableArray(classNames));

  elName.innerHTML = text;
  parent.append(elName);
  return elName;
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const modules_createHTMLElem = (createHTMLElem);
;// CONCATENATED MODULE: ./scripts/modules/popup.js
 // >----------------------------------------------------------------<
// >                              INIT                              <
// >----------------------------------------------------------------<

var popup = {}; // >----------------------------------------------------------------<
// >                          FUNCTIONS                             <
// >----------------------------------------------------------------<

function create(title, text) {
  var button = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

  function closePopup(element, popupclosePopup, actionClosePopup) {
    element.addEventListener('click', function () {
      popupclosePopup.classList.remove('show'); // hide popup with animation
      // hideBlackout(); // hide blackout with aniamtion

      actionClosePopup();
      setTimeout(function () {
        popupclosePopup.remove(); // remove popup
      }, 300);
    });
  }

  var zeroBlock = document.querySelector('.zero-block');
  var popUp = modules_createHTMLElem(zeroBlock, 'div', ['popup']);
  modules_createHTMLElem(popUp, 'h3', ['h3', 'popup__title'], title);
  modules_createHTMLElem(popUp, 'p1', ['p1', 'popup__text'], text);

  if (button !== '') {
    var popupButton = modules_createHTMLElem(popUp, 'button', ['button', 'popup__button'], button);
    closePopup(popupButton, popUp, action);
  } // showBlackout();


  setTimeout(function () {
    popUp.classList.add('show');
  }, 0);
} // >----------------------------------------------------------------<
// >                             COLECT                             <
// >----------------------------------------------------------------<


popup.create = create; // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

/* harmony default export */ const modules_popup = ((/* unused pure expression or super */ null && (popup)));
;// CONCATENATED MODULE: ./scripts/modules/msg.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
// Msg(...args)
function msg() {
  var _console;

  (_console = console).log.apply(_console, arguments);
} // MsgG(header, ...args)


function msgG() {
  var lastMsgPosition = arguments.length - 1;
  console.group(arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i <= lastMsgPosition; i += 1) {
    console.log(i < 0 || arguments.length <= i ? undefined : arguments[i]);
  }

  console.groupEnd();
} // MsgGV(header, ...args)


function msgGV() {
  if ((arguments.length - 1) % 2 === 1) {
    var lastMsgPosition = arguments.length - 1;
    console.group(arguments.length <= 0 ? undefined : arguments[0]);

    for (var i = 1; i < lastMsgPosition; i += 2) {
      console.log("".concat(i < 0 || arguments.length <= i ? undefined : arguments[i], ": ").concat(i + 1 < 0 || arguments.length <= i + 1 ? undefined : arguments[i + 1]));
    }

    console.groupEnd();
  }
} // MsgV(...args)


function msgV() {
  var lastMsgPosition = arguments.length - 1;

  if (arguments.length % 2 === 0) {
    for (var i = 0; i < lastMsgPosition; i += 2) {
      console.log("".concat(i < 0 || arguments.length <= i ? undefined : arguments[i], ": ").concat(i + 1 < 0 || arguments.length <= i + 1 ? undefined : arguments[i + 1]));
    }
  }
} // Msg(...args)


function msgO() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log(_objectSpread({}, args));
} // Msg(...args)


function msgA() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  console.assert(_objectSpread({}, args));
} // Msg(...args)


function msgT() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  console.table(_objectSpread({}, args));
} // Msg(...args)


function msgE() {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  console.error(_objectSpread({}, args));
} // Msg(...args)


function msgW() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  console.warn(_objectSpread({}, args));
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<



;// CONCATENATED MODULE: ./scripts/modules/asm.js
// import Button from './Button';
 // import { menu } from './menu';












 // export const asm = {
//     popup,
// };
// asm.nov = 'let';
// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


;// CONCATENATED MODULE: ./app.js
var APP = {
  language: 'EN',
  shift: false,
  capsLock: false
};
/* harmony default export */ const app = (APP);
;// CONCATENATED MODULE: ./keysMap.js
var KEYS_MAP = {
  Backquote: ['`', '~', 'ё', 'Ё'],
  Digit1: ['1', '!', '1', '!'],
  Digit2: ['2', '@', '2', '"'],
  Digit3: ['3', '#', '3', '№'],
  Digit4: ['4', '$', '4', ';'],
  Digit5: ['5', '%', '5', '%'],
  Digit6: ['6', '^', '6', ':'],
  Digit7: ['7', '&', '7', '?'],
  Digit8: ['8', '*', '8', '*'],
  Digit9: ['9', '(', '9', '('],
  Digit0: ['0', ')', '0', ')'],
  Minus: ['-', '_', '-', '_'],
  Equal: ['=', '+', '=', '+'],
  Backspace: ['Backspace', 'Backspace', 'Backspace', 'Backspace'],
  Tab: ['Tab', 'Tab', 'Tab', 'Tab'],
  KeyQ: ['q', 'Q', 'й', 'Й'],
  KeyW: ['w', 'W', 'ц', 'Ц'],
  KeyE: ['e', 'E', 'у', 'У'],
  KeyR: ['r', 'R', 'к', 'К'],
  KeyT: ['t', 'T', 'е', 'Е'],
  KeyY: ['y', 'Y', 'н', 'Н'],
  KeyU: ['u', 'U', 'г', 'Г'],
  KeyI: ['i', 'I', 'ш', 'Ш'],
  KeyO: ['o', 'O', 'щ', 'Щ'],
  KeyP: ['p', 'P', 'з', 'З'],
  BracketLeft: ['[', '{', 'х', 'Х'],
  BracketRight: [']', '}', 'ъ', 'Ъ'],
  Backslash: ['\\', '|', '\\', '/'],
  Delete: ['Del', 'Del', 'Del', 'Del'],
  CapsLock: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  KeyA: ['a', 'A', 'ф', 'Ф'],
  KeyS: ['s', 'S', 'ы', 'Ы'],
  KeyD: ['d', 'D', 'в', 'В'],
  KeyF: ['f', 'F', 'а', 'А'],
  KeyG: ['g', 'G', 'п', 'П'],
  KeyH: ['h', 'H', 'р', 'Р'],
  KeyJ: ['j', 'J', 'о', 'О'],
  KeyK: ['k', 'K', 'л', 'Л'],
  KeyL: ['l', 'L', 'д', 'Д'],
  Semicolon: [';', ':', 'ж', 'Ж'],
  Quote: ['\'', '"', 'э', 'Э'],
  Enter: ['Enter', 'Enter', 'Enter', 'Enter'],
  ShiftLeft: ['Shift', 'Shift', 'Shift', 'Shift'],
  KeyZ: ['z', 'Z', 'я', 'Я'],
  KeyX: ['x', 'X', 'ч', 'Ч'],
  KeyC: ['c', 'C', 'с', 'С'],
  KeyV: ['v', 'V', 'м', 'М'],
  KeyB: ['b', 'B', 'и', 'И'],
  KeyN: ['n', 'N', 'т', 'Т'],
  KeyM: ['m', 'M', 'ь', 'Ь'],
  Comma: [',', '<', 'б', 'Б'],
  Period: ['.', '>', 'ю', 'Ю'],
  Slash: ['/', '?', '.', ','],
  ShiftRight: ['⇧', '⇧', '⇧', '⇧'],
  ArrowUp: ['↑', '↑', '↑', '↑'],
  Language: ['EN', 'EN', 'RU', 'RU'],
  ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  MetaLeft: ['Win', 'Win', 'Win', 'Win'],
  AltLeft: ['Alt', 'Alt', 'Alt', 'Alt'],
  Space: ['space', 'space', 'space', 'space'],
  AltRight: ['Alt', 'Alt', 'Alt', 'Alt'],
  ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ArrowLeft: ['←', '←', '←', '←'],
  ArrowDown: ['↓', '↓', '↓', '↓'],
  ArrowRight: ['→', '→', '→', '→']
}; // const KEYS_MAP = [
//   { Backquote: ['`', '~', 'ё', 'Ё'] },
//   { Digit1: ['1', '!', '1', '!'] },
//   { Digit2: ['2', '@', '2', '"'] },
//   { Digit3: ['3', '#', '3', '№'] },
//   { Digit4: ['4', '$', '4', ';'] },
//   { Digit5: ['5', '%', '5', '%'] },
//   { Digit6: ['6', '^', '6', ':'] },
//   { Digit7: ['7', '&', '7', '?'] },
//   { Digit8: ['8', '*', '8', '*'] },
//   { Digit9: ['9', '(', '9', '('] },
//   { Digit0: ['0', ')', '0', ')'] },
//   { Minus: ['-', '_', '-', '_'] },
//   { Equal: ['=', '+', '=', '+'] },
//   { Backspace: false },
//   { Tab: false },
//   { KeyQ: ['q', 'Q', 'й', 'Й'] },
//   { KeyW: ['w', 'W', 'ц', 'Ц'] },
//   { KeyE: ['e', 'E', 'у', 'У'] },
//   { KeyR: ['r', 'R', 'к', 'К'] },
//   { KeyT: ['t', 'T', 'е', 'Е'] },
//   { KeyY: ['y', 'Y', 'н', 'Н'] },
//   { KeyU: ['u', 'U', 'г', 'Г'] },
//   { KeyI: ['i', 'I', 'ш', 'Ш'] },
//   { KeyO: ['o', 'O', 'щ', 'Щ'] },
//   { KeyP: ['p', 'P', 'з', 'З'] },
//   { BracketLeft: ['[', '{', 'х', 'Х'] },
//   { BracketRight: [']', '}', 'ъ', 'Ъ'] },
//   { Backslash: ['\\', '|', '\\', '/'] },
//   { Delete: false },
//   { CapsLock: false },
//   { KeyA: ['a', 'A', 'ф', 'Ф'] },
//   { KeyS: ['s', 'S', 'ы', 'Ы'] },
//   { KeyD: ['d', 'D', 'в', 'В'] },
//   { KeyF: ['f', 'F', 'а', 'А'] },
//   { KeyG: ['g', 'G', 'п', 'П'] },
//   { KeyH: ['h', 'H', 'р', 'Р'] },
//   { KeyJ: ['j', 'J', 'о', 'О'] },
//   { KeyK: ['k', 'K', 'л', 'Л'] },
//   { KeyL: ['l', 'L', 'д', 'Д'] },
//   { Semicolon: [';', ':', 'ж', 'Ж'] },
//   { Quote: ['\'', '"', 'э', 'Э'] },
//   { Enter: false },
//   { ShiftLeft: false },
//   { KeyZ: ['z', 'Z', 'я', 'Я'] },
//   { KeyX: ['x', 'X', 'ч', 'Ч'] },
//   { KeyC: ['c', 'C', 'с', 'С'] },
//   { KeyV: ['v', 'V', 'м', 'М'] },
//   { KeyB: ['b', 'B', 'и', 'И'] },
//   { KeyN: ['n', 'N', 'т', 'Т'] },
//   { KeyM: ['m', 'M', 'ь', 'Ь'] },
//   { Comma: [',', '<', 'б', 'Б'] },
//   { Period: ['.', '>', 'ю', 'Ю'] },
//   { Slash: ['/', '?', '.', ','] },
//   { ArrowUp: false },
//   { Language: false },
//   { ControlLeft: false },
//   { MetaLeft: false },
//   { AltLeft: false },
//   { Space: false },
//   { AltRight: false },
//   { ControlRight: false },
//   { ArrowLeft: false },
//   { ArrowDown: false },
//   { ArrowRight: false },
// ];

/* harmony default export */ const keysMap = (KEYS_MAP);
;// CONCATENATED MODULE: ./keyboardKeys.js
var KEYBOARD_KEYS = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Language', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
/* harmony default export */ const keyboardKeys = (KEYBOARD_KEYS);
;// CONCATENATED MODULE: ./html-generator.js



var htmlGenerator = function htmlGenerator(KEYBOARD_KEYS, KEYS_MAP) {
  var fragment$ = new DocumentFragment();
  var bodyContainer$ = modules_createHTMLElem(fragment$, 'div', ['body__container']); //   const header$ = createHTMLElem(bodyContainer$, 'div', ['header']);
  //   const headerContainer$ = createHTMLElem(header$, 'div', ['container']);

  var main$ = modules_createHTMLElem(bodyContainer$, 'div', ['main']);
  var mainContainer$ = modules_createHTMLElem(main$, 'div', ['container']);
  var textarea$ = modules_createHTMLElem(mainContainer$, 'textarea', ['textarea']);
  var keyboard$ = modules_createHTMLElem(mainContainer$, 'div', ['keyboard']);
  KEYBOARD_KEYS.forEach(function (key) {
    var shift = app.shift;
    var capsLock = app.capsLock;
    var language = app.language;
    var lowercase = language === 'EN' ? 0 : 2;
    var uppercase = language === 'EN' ? 1 : 3;
    var _char = '';

    if (shift && capsLock) {
      if (KEYS_MAP[key]) _char = KEYS_MAP[key][lowercase];
    } else if (shift || capsLock) {
      if (KEYS_MAP[key]) _char = KEYS_MAP[key][uppercase];
    } else if (KEYS_MAP[key]) _char = KEYS_MAP[key][lowercase];

    var toKebabCase = function toKebabCase(str) {
      return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
        return x.toLowerCase();
      }).join('-');
    };

    var classFromKey = toKebabCase(key);
    var key$ = modules_createHTMLElem(keyboard$, 'div', ['keyboard__key', 'key', classFromKey]);
    key$.addEventListener('keydown', function (e) {
      console.log(e);
    });
    key$.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'a'
    }));
    modules_createHTMLElem(key$, 'p', ['p1', 'key__text'], _char);
  }); //   const footer$ = createHTMLElem(bodyContainer$, 'div', ['footer']);
  //   const footerCntainer$ = createHTMLElem(footer$, 'div', ['container']);

  var body$ = document.querySelector('body');
  body$.appendChild(fragment$);
  textarea$.addEventListener('blur', function () {
    textarea$.focus();
  });
  textarea$.focus();
};

/* harmony default export */ const html_generator = (htmlGenerator);
;// CONCATENATED MODULE: ./index.js

 // import './css/style.css';

 // import html from './html';
// import htmlGenerator from './html-generator';
// import  from './gui';
// import Key from './Key';





html_generator(keyboardKeys, keysMap);

var getCharFromKeyboard = function getCharFromKeyboard(event, language) {
  var lowercase = language === 'EN' ? 0 : 2;
  var uppercase = language === 'EN' ? 1 : 3;

  if (event.shiftKey && event.getModifierState('CapsLock')) {
    if (keysMap[event.code]) msg(keysMap[event.code][lowercase]);
  } else if (event.shiftKey || event.getModifierState('CapsLock')) {
    if (keysMap[event.code]) msg(keysMap[event.code][uppercase]);
  } else if (keysMap[event.code]) msg(keysMap[event.code][lowercase]);
};

document.addEventListener('keydown', function (event) {
  return getCharFromKeyboard(event, 'RU');
}); // import imgFile from './assets/img/photo.jpg';
// const img = document.querySelector('.img');
// img.src = imgFile;
// import jsonFile from './assets/index.json'; // #asm импорт json напрямую в js
// import imgFile from './assets/img/photo.jpg'; // #asm импорт картинки
// import image from './assets/svg/image-24.svg'; // #asm импорт картинки
// import './pages/main/scripts/index.js';
/******/ })()
;