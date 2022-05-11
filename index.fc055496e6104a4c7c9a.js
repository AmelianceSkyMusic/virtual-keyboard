/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
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
;// CONCATENATED MODULE: ./scripts/modules/asm.js











 // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


;// CONCATENATED MODULE: ./initHtml.js
 // >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

var initHtml = function initHtml(pageTitle, favicon) {
  var head$ = document.querySelector('head');
  head$.innerHTML += "\n        <title>".concat(pageTitle, "</title>\n        <link rel=\"icon\" href=\"").concat(favicon, "\">\n    ");
  var fragment$ = new DocumentFragment(); // createvirtual fragment for compose no parent node

  var zeroBlock$ = modules_createHTMLElem(fragment$, 'div', ['zero-block']);
  var blackout$ = modules_createHTMLElem(zeroBlock$, 'div', ['blackout', 'h1'], 'CLICK TO START');
  blackout$.classList.add('show');
  blackout$.addEventListener('click', function () {
    blackout$.classList.remove('show');
    blackout$.addEventListener('animationend', function () {
      zeroBlock$.remove();
    });
  });
  var body$ = document.querySelector('body');
  body$.prepend(fragment$);
}; // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const initHtml_0 = (initHtml);
;// CONCATENATED MODULE: ./app.js
var APP = {
  language: 'EN',
  shift: false,
  capsLock: false,
  carretPosition: 0,
  control: false,
  win: false,
  alt: false,
  isLight: false
};

var loadSettings = function loadSettings() {
  if (localStorage.getItem('settings')) {
    // load settings if exists
    var receivedSettings = JSON.parse(localStorage.getItem('settings')); // read

    APP.language = receivedSettings.language;
  }
};

var saveSettings = function saveSettings() {
  var savingSettings = {
    language: APP.language
  };
  localStorage.setItem('settings', JSON.stringify(savingSettings)); // write
}; // >----------------------------------------------------------------<
// >                          EXPORT                                <
// >----------------------------------------------------------------<



;// CONCATENATED MODULE: ./assets/sounds/click-soft.mp3
const click_soft_namespaceObject = __webpack_require__.p + "1de2062be033df93f8d6.mp3";
;// CONCATENATED MODULE: ./assets/sounds/click-double.mp3
const click_double_namespaceObject = __webpack_require__.p + "c73f52deecb9cfa816c4.mp3";
;// CONCATENATED MODULE: ./assets/sounds/click-double-down.mp3
const click_double_down_namespaceObject = __webpack_require__.p + "204641909b1a1fa35182.mp3";
;// CONCATENATED MODULE: ./assets/sounds/click-double-up.mp3
const click_double_up_namespaceObject = __webpack_require__.p + "2108bfe4a7f7076e2002.mp3";
;// CONCATENATED MODULE: ./sound.js






function playSoftClick() {
  if (!APP.win) {
    var audio = new Audio(click_soft_namespaceObject);
    audio.play();
  }
}

function playMediumClick() {
  if (!APP.win) {
    var audio = new Audio(click_double_down_namespaceObject);
    audio.play();
  }
}

function playDoubleClick() {
  if (!APP.win) {
    var audio = new Audio(click_double_namespaceObject);
    audio.play();
  }
}

function playDoubleDownClick() {
  if (!APP.win) {
    var audio = new Audio(click_double_down_namespaceObject);
    audio.play();
  }
}

function playDoubleUpClick() {
  if (!APP.win) {
    var audio = new Audio(click_double_up_namespaceObject);
    audio.play();
  }
}


;// CONCATENATED MODULE: ./scripts/others/toKebabCase.js
var toKebabCase = function toKebabCase(str) {
  if (str) {
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
      return x.toLowerCase();
    }).join('-');
  }

  return str;
};

/* harmony default export */ const others_toKebabCase = (toKebabCase);
;// CONCATENATED MODULE: ./keysMap.js
var KEYS_MAP = {
  Backquote: [true, '`', '~', 'ё', 'Ё', false],
  Digit1: [true, '1', '!', '1', '!', false],
  Digit2: [true, '2', '@', '2', '"', false],
  Digit3: [true, '3', '#', '3', '№', false],
  Digit4: [true, '4', '$', '4', ';', false],
  Digit5: [true, '5', '%', '5', '%', false],
  Digit6: [true, '6', '^', '6', ':', false],
  Digit7: [true, '7', '&', '7', '?', false],
  Digit8: [true, '8', '*', '8', '*', false],
  Digit9: [true, '9', '(', '9', '(', false],
  Digit0: [true, '0', ')', '0', ')', false],
  Minus: [true, '-', '_', '-', '_', false],
  Equal: [true, '=', '+', '=', '+', false],
  Backspace: [false, 'Backspace', 'Backspace', 'Backspace', 'Backspace', false],
  Tab: [false, 'Tab', 'Tab', 'Tab', 'Tab', false],
  KeyQ: [true, 'q', 'Q', 'й', 'Й', false],
  KeyW: [true, 'w', 'W', 'ц', 'Ц', false],
  KeyE: [true, 'e', 'E', 'у', 'У', false],
  KeyR: [true, 'r', 'R', 'к', 'К', false],
  KeyT: [true, 't', 'T', 'е', 'Е', false],
  KeyY: [true, 'y', 'Y', 'н', 'Н', false],
  KeyU: [true, 'u', 'U', 'г', 'Г', false],
  KeyI: [true, 'i', 'I', 'ш', 'Ш', false],
  KeyO: [true, 'o', 'O', 'щ', 'Щ', false],
  KeyP: [true, 'p', 'P', 'з', 'З', false],
  BracketLeft: [true, '[', '{', 'х', 'Х', false],
  BracketRight: [true, ']', '}', 'ъ', 'Ъ', false],
  Backslash: [true, '\\', '|', '\\', '/', false],
  Delete: [false, 'Del', 'Del', 'Del', 'Del', false],
  CapsLock: [false, 'Caps    ', 'Caps    ', 'Caps    ', 'Caps    ', false],
  KeyA: [true, 'a', 'A', 'ф', 'Ф', false],
  KeyS: [true, 's', 'S', 'ы', 'Ы', false],
  KeyD: [true, 'd', 'D', 'в', 'В', false],
  KeyF: [true, 'f', 'F', 'а', 'А', false],
  KeyG: [true, 'g', 'G', 'п', 'П', false],
  KeyH: [true, 'h', 'H', 'р', 'Р', false],
  KeyJ: [true, 'j', 'J', 'о', 'О', false],
  KeyK: [true, 'k', 'K', 'л', 'Л', false],
  KeyL: [true, 'l', 'L', 'д', 'Д', false],
  Semicolon: [true, ';', ':', 'ж', 'Ж', false],
  Quote: [true, '\'', '"', 'э', 'Э', false],
  Enter: [false, 'Enter       ', 'Enter       ', 'Enter       ', 'Enter       ', false],
  ShiftLeft: [false, 'Shift           ', 'Shift          ', 'Shift           ', 'Shift           ', false],
  KeyZ: [true, 'z', 'Z', 'я', 'Я', false],
  KeyX: [true, 'x', 'X', 'ч', 'Ч', false],
  KeyC: [true, 'c', 'C', 'с', 'С', false],
  KeyV: [true, 'v', 'V', 'м', 'М', false],
  KeyB: [true, 'b', 'B', 'и', 'И', false],
  KeyN: [true, 'n', 'N', 'т', 'Т', false],
  KeyM: [true, 'm', 'M', 'ь', 'Ь', false],
  Comma: [true, ',', '<', 'б', 'Б', false],
  Period: [true, '.', '>', 'ю', 'Ю', false],
  Slash: [true, '/', '?', '.', ',', false],
  ShiftRight: [false, '⇧', '⇧', '⇧', '⇧', false],
  ArrowUp: [false, '↑', '↑', '↑', '↑', false],
  Language: [false, 'EN', 'EN', 'RU', 'RU', false],
  ControlLeft: [false, 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', false],
  MetaLeft: [false, 'Win', 'Win', 'Win', 'Win', false],
  AltLeft: [false, 'Alt', 'Alt', 'Alt', 'Alt', false],
  Space: [false, 'Space', 'Space', 'Space', 'Space', false],
  AltRight: [false, 'Alt', 'Alt', 'Alt', 'Alt', false],
  ControlRight: [false, 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', false],
  ArrowLeft: [false, '←', '←', '←', '←', false],
  ArrowDown: [false, '↓', '↓', '↓', '↓', false],
  ArrowRight: [false, '→', '→', '→', '→', false]
};
var KEYBOARD_KEYS = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Language', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

;// CONCATENATED MODULE: ./hendlers.js

 // >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<
// ^------------------------ getCharFromKeyboard ------------------------

var getCharFromKeyboard = function getCharFromKeyboard(event) {
  var isChar = KEYS_MAP[event.code][0] === true;

  if (isChar) {
    var charCase = false;

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
}; // ^------------------------ getCgarFromCode ------------------------


var getCharFromCode = function getCharFromCode(code) {
  var charCase = false;

  if (APP.capsLock && APP.shift) {
    charCase = APP.language === 'EN' ? 1 : 3; // lowercase
  } else if (APP.capsLock || APP.shift) {
    charCase = APP.language === 'EN' ? 2 : 4; // uppercase
  } else {
    charCase = APP.language === 'EN' ? 1 : 3; // lowercase
  }

  if (APP.capsLock && !APP.shift) {
    // *1
    if (KEYS_MAP[code] && (code === 'Backquote' || code === 'Digit1' || code === 'Digit2' || code === 'Digit3' || code === 'Digit4' || code === 'Digit5' || code === 'Digit6' || code === 'Digit7' || code === 'Digit8' || code === 'Digit9' || code === 'Digit0' || code === 'Minus' || code === 'Equal')) {
      return KEYS_MAP[code][APP.language === 'EN' ? 1 : 3];
    }

    return KEYS_MAP[code][charCase];
  }

  if (APP.capsLock && APP.shift) {
    if (KEYS_MAP[code] && (code === 'Backquote' || code === 'Digit1' || code === 'Digit2' || code === 'Digit3' || code === 'Digit4' || code === 'Digit5' || code === 'Digit6' || code === 'Digit7' || code === 'Digit8' || code === 'Digit9' || code === 'Digit0' || code === 'Minus' || code === 'Equal')) {
      return KEYS_MAP[code][APP.language === 'EN' ? 2 : 4];
    }

    return KEYS_MAP[code][charCase];
  }

  return KEYS_MAP[code][charCase];
}; // ^------------------------ changeLanguage ------------------------


var changeLanguage = function changeLanguage() {
  APP.language = APP.language === 'EN' ? 'RU' : 'EN';
}; // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<



;// CONCATENATED MODULE: ./html-generator.js





 // >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

function doNothing() {} // ^------------------------ Update Keyboard Keys View ------------------------


var updateKeyboardKeysView = function updateKeyboardKeysView() {
  var keys$ = document.querySelectorAll('.key[data-code]');
  keys$.forEach(function (elem) {
    var el = elem;
    el.querySelector('.key__text').innerHTML = getCharFromCode(elem.dataset.code);
  });
};

window.addEventListener('load', function () {
  setTimeout(function () {
    var language$ = document.querySelector('.language .key__text');
    language$.innerHTML = APP.language;
    var textarea$ = document.querySelector('.textarea');
    textarea$.value = 'Клавиатура создана в операционной системе Windows\nДля переключения языка используйте: ctrl + alt';
    updateKeyboardKeysView();
  }, 0);
}); //
//
// ^------------------------ Change Text Value ------------------------

var changeTextValue = function changeTextValue(inputText) {
  var startShift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var endShift = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;

  if (start !== end) {
    var substring = textarea$.value.substring(start, end);
    textarea$.value = textarea$.value.replace(substring, '');
  }

  var text = textarea$.value;
  textarea$.value = text.slice(0, start - startShift) + inputText + text.slice(start - endShift);
  textarea$.selectionStart = start + inputText.length - startShift - endShift;
  textarea$.selectionEnd = start + inputText.length - startShift - endShift;
}; //
//
// ^------------------------ Special Keys Function ------------------------
// *----- tab -----


var sendTab = function sendTab() {
  changeTextValue('\t');
}; // *----- caps lock -----


var changeCapsLockState = function changeCapsLockState(el) {
  APP.capsLock = !APP.capsLock;

  if (APP.capsLock) {
    el.classList.add('enable');
  } else {
    el.classList.remove('enable');
  }

  updateKeyboardKeysView();
}; // *----- shift -----


var changeShiftState = function changeShiftState(isKeyboard) {
  APP.shift = !APP.shift;

  for (var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elements[_key - 1] = arguments[_key];
  }

  if (APP.shift) {
    elements.forEach(function (el) {
      el.classList.add('enable');
    });
  } else {
    elements.forEach(function (el) {
      el.classList.remove('enable');
    });
  }

  updateKeyboardKeysView();
}; // *----- ctrl -----


var changeControlState = function changeControlState() {
  APP.control = !APP.control;

  for (var _len2 = arguments.length, elements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    elements[_key2] = arguments[_key2];
  }

  if (APP.control) {
    elements.forEach(function (el) {
      el.classList.add('enable');
    });
  } else {
    elements.forEach(function (el) {
      el.classList.remove('enable');
    });
  }

  updateKeyboardKeysView();
}; // *----- win -----


var changeMetaState = function changeMetaState(elem) {
  APP.win = !APP.win;

  if (APP.win) {
    // APP.isLight = true;
    document.querySelector('link[href*="theme-light"]').media = 'all';
    document.querySelector('link[href*="theme-dark"]').media = 'not all';
    elem.classList.add('enable');
  } else {
    document.querySelector('link[href*="theme-light"]').media = 'not all';
    document.querySelector('link[href*="theme-dark"]').media = 'all'; // APP.isLight = false;

    elem.classList.remove('enable');
  }

  updateKeyboardKeysView();
}; // *----- alt -----


var changeAltState = function changeAltState() {
  APP.alt = !APP.alt;

  for (var _len3 = arguments.length, elements = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    elements[_key3] = arguments[_key3];
  }

  if (APP.alt) {
    elements.forEach(function (el) {
      el.classList.add('enable');
    });
  } else {
    elements.forEach(function (el) {
      el.classList.remove('enable');
    });
  }

  updateKeyboardKeysView();
}; // *----- space -----


var addSpace = function addSpace() {
  changeTextValue(' ');
}; // *----- enter -----


var addEnter = function addEnter() {
  changeTextValue('\n');
}; // *----- backspace -----


var addBackspace = function addBackspace() {
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;

  if (start !== end) {
    changeTextValue('');
  } else {
    changeTextValue('', 1);
  }
}; // *----- delete -----


var addDelete = function addDelete() {
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;

  if (start !== end) {
    changeTextValue('');
  } else {
    var text = textarea$.value;
    textarea$.value = "".concat(text.slice(0, start)).concat(text.slice(start + 1));
    textarea$.selectionStart = start;
    textarea$.selectionEnd = start;
  }
}; // *----- arrow up -----


var addArrowUp = function addArrowUp() {
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;
  var lines = textarea$.value.split('\n');
  var lineStart = 0;
  var linesPos = lines.map(function (line) {
    var startLine = lineStart;
    var lineObj = {
      start: startLine,
      end: startLine + line.length,
      length: line.length
    };
    lineStart += line.length + 1;
    return lineObj;
  });
  var textBeforeCursor = textarea$.value.substring(0, start);
  var cursorLine = textBeforeCursor.split('\n').length - 1; // cursor line

  if (start !== end) {
    doNothing();
  } else if (linesPos[cursorLine - 1]) {
    var startNextPostion = linesPos[cursorLine - 1].start;
    var endNextPostion = linesPos[cursorLine - 1].end;
    var endNext = linesPos[cursorLine - 1].length;
    var currentCursorPosition = start - linesPos[cursorLine].start;
    var nextPostion = startNextPostion + currentCursorPosition;

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
}; // *----- arrow down -----


var addArrowDown = function addArrowDown() {
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;
  var lines = textarea$.value.split('\n');
  var lineStart = 0;
  var linesPos = lines.map(function (line) {
    var startLine = lineStart;
    var lineObj = {
      start: startLine,
      end: startLine + line.length,
      length: line.length
    };
    lineStart += line.length + 1;
    return lineObj;
  });
  var textBeforeCursor = textarea$.value.substring(0, start);
  var cursorLine = textBeforeCursor.split('\n').length - 1; // cursor line

  if (start !== end) {
    doNothing();
  } else if (linesPos[cursorLine + 1]) {
    var startNextPostion = linesPos[cursorLine + 1].start;
    var endNextPostion = linesPos[cursorLine + 1].end;
    var endNext = linesPos[cursorLine + 1].length;
    var currentCursorPosition = start - linesPos[cursorLine].start;
    var nextPostion = startNextPostion + currentCursorPosition;

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
}; // *----- arrow right -----


var addArrowRight = function addArrowRight() {
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;

  if (start !== end) {
    doNothing();
  } else {
    textarea$.selectionStart = end + 1;
    textarea$.selectionEnd = end + 1;
  }
}; // *----- arrow left -----


var addArrowLeft = function addArrowLeft() {
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;

  if (start !== end) {
    doNothing();
  } else {
    textarea$.selectionStart = start - 1;
    textarea$.selectionEnd = start + -1;
  }
}; // *----- language -----


var changeLanguageKey = function changeLanguageKey() {
  changeLanguage();
  updateKeyboardKeysView();
  document.querySelector('.language .key__text').innerHTML = APP.language;
}; //
//
// ^------------------------ Send Keys To Text Area ------------------------


var sendKeyToTextArea = function sendKeyToTextArea(key, code) {
  var isKeyboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!key) return; // *-----  -----

  var addCharToTextarea = function addCharToTextarea(e) {
    var eCode = e.code;
    var el = e.target; // ^------------------------ Keypress FX ------------------------

    if (APP.win) {
      var viewportOffset = el.getBoundingClientRect();
      var left = viewportOffset.left;
      var top = viewportOffset.top;
      var elWidth = el.clientWidth;
      var elHeight = el.clientHeight;
      var keyboard = document.querySelector('.keyboard');
      var keyboardOffset = keyboard.getBoundingClientRect();
      var leftKeyboard = keyboardOffset.left;
      var topKeyboard = keyboardOffset.top;
      var fragment = new DocumentFragment();
      var keyPressFx = modules_createHTMLElem(fragment, 'div', ['key-press-fx']);
      keyboard.appendChild(fragment);
      var fxWidth = keyPressFx.offsetWidth;
      var fxHeight = keyPressFx.offsetHeight;
      keyPressFx.style.top = "".concat(top - topKeyboard + elHeight / 2 - fxHeight / 2, "px");
      keyPressFx.style.left = "".concat(left - leftKeyboard + elWidth / 2 - fxWidth / 2, "px");
      keyPressFx.classList.add('key-press-fx-run');
      keyPressFx.addEventListener('animationend', function () {
        keyPressFx.remove();
      });
    } // ^------------------------  ------------------------


    var charFromKeyboard = '';

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

      var shiftRight = document.querySelector('.shift-right');
      var shiftLeft = document.querySelector('.shift-left');
      changeShiftState(true, shiftRight, shiftLeft);
    } else if (eCode === 'ControlLeft' || eCode === 'ControlRight') {
      if (isKeyboard) {
        playDoubleDownClick();
      } else {
        playDoubleClick();
      }

      var controlRight = document.querySelector('.control-right');
      var controlLeft = document.querySelector('.control-left');
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

      var altRight = document.querySelector('.alt-right');
      var altLeft = document.querySelector('.alt-left');
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
      charFromKeyboard = APP.control || APP.alt ? '' : getCharFromKeyboard(e);
      changeTextValue(charFromKeyboard);
    }

    if (APP.control && APP.alt) {
      var language$ = document.querySelector('.language .key__text');

      if (language$.innerHTML === 'RU') {
        APP.language = 'EN';
      } else {
        APP.language = 'RU';
      }

      language$.innerHTML = APP.language;
      updateKeyboardKeysView();
    }
  }; // *----- emulate keyboard -----


  key.addEventListener('keydown', addCharToTextarea);
  key.dispatchEvent(new KeyboardEvent('keydown', {
    code: code
  }));
  key.removeEventListener('keydown', addCharToTextarea);
}; //
//
// ^------------------------ Show Animatiion On Key Press ------------------------


var showAnimationOnKeyPress = function showAnimationOnKeyPress(key) {
  if (!key) return;
  key.classList.add('tap');
  key.addEventListener('animationend', function () {
    key.classList.remove('tap');
  });
}; //
//
// ^------------------------ Char Keys Listener ------------------------


var addCharKeysListener = function addCharKeysListener(isChar, key) {
  if (isChar) {
    var resetShift = function resetShift() {
      if (APP.shift) {
        APP.shift = !APP.shift;
        var shiftLeft$ = document.querySelector('.shift-left');
        var shiftRight$ = document.querySelector('.shift-right');
        shiftLeft$.classList.remove('enable');
        shiftRight$.classList.remove('enable');
      }

      updateKeyboardKeysView();
    };

    key.addEventListener('click', resetShift);

    var resetControl = function resetControl() {
      if (APP.control) {
        APP.control = !APP.control;
        var controlLeft$ = document.querySelector('.control-left');
        var controlRight$ = document.querySelector('.control-right');
        controlLeft$.classList.remove('enable');
        controlRight$.classList.remove('enable');
      }

      updateKeyboardKeysView();
    };

    key.addEventListener('click', resetControl);

    var resetAlt = function resetAlt() {
      if (APP.alt) {
        APP.alt = !APP.alt;
        var altLeft$ = document.querySelector('.alt-left');
        var altRight$ = document.querySelector('.alt-right');
        altLeft$.classList.remove('enable');
        altRight$.classList.remove('enable');
      }

      updateKeyboardKeysView();
    };

    key.addEventListener('click', resetAlt);
  }
}; //
//
// ^------------------------ Special Keys Listener ------------------------


var addSepicalKeysListener = function addSepicalKeysListener() {}; //
//
//
//
// >----------------------------------------------------------------<
// >                      FUNCTIONS TO EXPORT                       <
// >----------------------------------------------------------------<
// ^------------------------ Html Generator ------------------------


var generateHtml = function generateHtml() {
  var fragment$ = new DocumentFragment(); // createvirtual fragment for compose no parent node
  // *----- create elements -----

  var bodyContainer$ = modules_createHTMLElem(fragment$, 'div', ['body__container']);
  var main$ = modules_createHTMLElem(bodyContainer$, 'div', ['main']);
  var mainContainer$ = modules_createHTMLElem(main$, 'div', ['container']);
  var textarea$ = modules_createHTMLElem(mainContainer$, 'textarea', ['textarea', 'p2', 'scroll']);
  var keyboard$ = modules_createHTMLElem(mainContainer$, 'div', ['keyboard']); // *----- add keys -----

  KEYBOARD_KEYS.forEach(function (code) {
    var _char = getCharFromCode(code);

    var isChar = KEYS_MAP[code][0] === true; // *----- create button -----

    var classFromCodeName = others_toKebabCase(code);
    var key$ = modules_createHTMLElem(keyboard$, 'div', ['keyboard__key', 'key', classFromCodeName]); // *----- add code to key -----

    if (isChar) key$.dataset.code = code; // *----- add listener to button -----

    key$.addEventListener('click', function () {
      return showAnimationOnKeyPress(key$);
    });
    key$.addEventListener('click', function () {
      return sendKeyToTextArea(key$, code);
    });
    addCharKeysListener(isChar, key$);

    if (code === 'Language') {
      _char = APP.language;
    }

    modules_createHTMLElem(key$, 'p', ['p1', 'key__text'], _char);
  }); // *----- add virtual node to body -----

  var body$ = document.querySelector('body');
  body$.appendChild(fragment$); // *----- add listeners foe special keys -----

  addSepicalKeysListener(); // *----- add focus to textarea -----

  textarea$.addEventListener('blur', function () {
    textarea$.focus();
  });
  textarea$.focus();
}; //
//
// ^------------------------ Send Type Key To Virtual Keyboard ------------------------


var sendTypeKeyToVirtualKeyboard = function sendTypeKeyToVirtualKeyboard(event) {
  var code = '';
  if (!KEYBOARD_KEYS.find(function (item) {
    return item === event.code;
  })) return;

  if (!event.code) {
    if (KEYS_MAP.ShiftRight[5]) return;
  } else if (!KEYS_MAP[event.code][0] && KEYS_MAP[event.code][5] && event.code !== 'Backspace' && event.code !== 'Delete' && event.code !== 'Enter' && event.code !== 'Tab' && event.code !== 'ArrowUp' && event.code !== 'ArrowDown' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'Space') return;

  code = event.code;

  if (event.code !== 'ShiftLeft' && event.key === 'Shift') {
    code = 'ShiftRight';
  }

  KEYS_MAP[code][5] = true;
  event.preventDefault();
  var classFromCodeName = others_toKebabCase(code);
  var key = document.querySelector(".".concat(classFromCodeName));
  showAnimationOnKeyPress(key);
  sendKeyToTextArea(key, code, true);
}; //
//


var removeSpecialKeyState = function removeSpecialKeyState(event) {
  if (!KEYBOARD_KEYS.find(function (item) {
    return item === event.code;
  })) return;
  var eCode = '';

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
}; //
//
//
//
// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<



;// CONCATENATED MODULE: ./index.js




initHtml_0('Virtual Keyboard', './assets/favicon.ico');
window.addEventListener('load', loadSettings);
window.addEventListener('beforeunload', saveSettings);
generateHtml();
document.addEventListener('keydown', sendTypeKeyToVirtualKeyboard);
document.addEventListener('keyup', removeSpecialKeyState);
/******/ })()
;