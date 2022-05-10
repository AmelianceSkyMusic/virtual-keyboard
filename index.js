/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP": () => (/* binding */ APP),
/* harmony export */   "loadSettings": () => (/* binding */ loadSettings),
/* harmony export */   "saveSettings": () => (/* binding */ saveSettings)
/* harmony export */ });
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




/***/ }),

/***/ "./hendlers.js":
/*!*********************!*\
  !*** ./hendlers.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeLanguage": () => (/* binding */ changeLanguage),
/* harmony export */   "getCharFromCode": () => (/* binding */ getCharFromCode),
/* harmony export */   "getCharFromKeyboard": () => (/* binding */ getCharFromKeyboard)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.js");
/* harmony import */ var _keysMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysMap */ "./keysMap.js");

 // >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<
// ^------------------------ getCharFromKeyboard ------------------------

var getCharFromKeyboard = function getCharFromKeyboard(event) {
  var isChar = _keysMap__WEBPACK_IMPORTED_MODULE_1__.KEYS_MAP[event.code][0] === true;

  if (isChar) {
    var charCase = false;

    if (_app__WEBPACK_IMPORTED_MODULE_0__.APP.capsLock && _app__WEBPACK_IMPORTED_MODULE_0__.APP.shift) {
      charCase = _app__WEBPACK_IMPORTED_MODULE_0__.APP.language === 'EN' ? 1 : 3; // lowercase
    } else if (_app__WEBPACK_IMPORTED_MODULE_0__.APP.capsLock || _app__WEBPACK_IMPORTED_MODULE_0__.APP.shift) {
      charCase = _app__WEBPACK_IMPORTED_MODULE_0__.APP.language === 'EN' ? 2 : 4; // uppercase
    } else {
      charCase = _app__WEBPACK_IMPORTED_MODULE_0__.APP.language === 'EN' ? 1 : 3; // lowercase
    }

    if (_keysMap__WEBPACK_IMPORTED_MODULE_1__.KEYS_MAP[event.code]) return _keysMap__WEBPACK_IMPORTED_MODULE_1__.KEYS_MAP[event.code][charCase];
  }

  return '';
}; // ^------------------------ getCgarFromCode ------------------------


var getCharFromCode = function getCharFromCode(code) {
  var charCase = false;

  if (_app__WEBPACK_IMPORTED_MODULE_0__.APP.capsLock && _app__WEBPACK_IMPORTED_MODULE_0__.APP.shift) {
    charCase = _app__WEBPACK_IMPORTED_MODULE_0__.APP.language === 'EN' ? 1 : 3; // lowercase
  } else if (_app__WEBPACK_IMPORTED_MODULE_0__.APP.capsLock || _app__WEBPACK_IMPORTED_MODULE_0__.APP.shift) {
    charCase = _app__WEBPACK_IMPORTED_MODULE_0__.APP.language === 'EN' ? 2 : 4; // uppercase
  } else {
    charCase = _app__WEBPACK_IMPORTED_MODULE_0__.APP.language === 'EN' ? 1 : 3; // lowercase
  }

  if (_keysMap__WEBPACK_IMPORTED_MODULE_1__.KEYS_MAP[code]) return _keysMap__WEBPACK_IMPORTED_MODULE_1__.KEYS_MAP[code][charCase];
  return '';
}; // ^------------------------ changeLanguage ------------------------


var changeLanguage = function changeLanguage() {
  _app__WEBPACK_IMPORTED_MODULE_0__.APP.language = _app__WEBPACK_IMPORTED_MODULE_0__.APP.language === 'EN' ? 'RU' : 'EN';
}; // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<




/***/ }),

/***/ "./html-generator.js":
/*!***************************!*\
  !*** ./html-generator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateHtml": () => (/* binding */ generateHtml),
/* harmony export */   "removeSpecialKeyState": () => (/* binding */ removeSpecialKeyState),
/* harmony export */   "sendTypeKeyToVirtualKeyboard": () => (/* binding */ sendTypeKeyToVirtualKeyboard)
/* harmony export */ });
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound */ "./sound.js");
/* harmony import */ var _scripts_others_toKebabCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/others/toKebabCase */ "./scripts/others/toKebabCase.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./app.js");
/* harmony import */ var _keysMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keysMap */ "./keysMap.js");
/* harmony import */ var _hendlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hendlers */ "./hendlers.js");
/* harmony import */ var _scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/modules/asm */ "./scripts/modules/asm.js");





 // >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

function doNothing() {} // ^------------------------ Update Keyboard Keys View ------------------------


var updateKeyboardKeysView = function updateKeyboardKeysView() {
  var keys$ = document.querySelectorAll('.key[data-code]');
  keys$.forEach(function (elem) {
    var el = elem;
    el.querySelector('.key__text').innerHTML = (0,_hendlers__WEBPACK_IMPORTED_MODULE_4__.getCharFromCode)(elem.dataset.code);
  });
};

window.addEventListener('load', function () {
  setTimeout(function () {
    var language$ = document.querySelector('.language .key__text');
    language$.innerHTML = _app__WEBPACK_IMPORTED_MODULE_2__.APP.language;
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
  _app__WEBPACK_IMPORTED_MODULE_2__.APP.capsLock = !_app__WEBPACK_IMPORTED_MODULE_2__.APP.capsLock;

  if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.capsLock) {
    el.classList.add('enable');
  } else {
    el.classList.remove('enable');
  }

  updateKeyboardKeysView();
}; // *----- shift -----


var changeShiftState = function changeShiftState(isKeyboard) {
  _app__WEBPACK_IMPORTED_MODULE_2__.APP.shift = !_app__WEBPACK_IMPORTED_MODULE_2__.APP.shift;

  for (var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elements[_key - 1] = arguments[_key];
  }

  if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.shift) {
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
  _app__WEBPACK_IMPORTED_MODULE_2__.APP.control = !_app__WEBPACK_IMPORTED_MODULE_2__.APP.control;

  for (var _len2 = arguments.length, elements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    elements[_key2] = arguments[_key2];
  }

  if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.control) {
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
  _app__WEBPACK_IMPORTED_MODULE_2__.APP.win = !_app__WEBPACK_IMPORTED_MODULE_2__.APP.win;

  if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.win) {
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
  _app__WEBPACK_IMPORTED_MODULE_2__.APP.alt = !_app__WEBPACK_IMPORTED_MODULE_2__.APP.alt;

  for (var _len3 = arguments.length, elements = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    elements[_key3] = arguments[_key3];
  }

  if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.alt) {
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
  (0,_hendlers__WEBPACK_IMPORTED_MODULE_4__.changeLanguage)();
  updateKeyboardKeysView();
  document.querySelector('.language .key__text').innerHTML = _app__WEBPACK_IMPORTED_MODULE_2__.APP.language;
}; //
//
// ^------------------------ Send Keys To Text Area ------------------------


var sendKeyToTextArea = function sendKeyToTextArea(key, code) {
  var isKeyboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!key) return; // *-----  -----

  var addCharToTextarea = function addCharToTextarea(e) {
    var eCode = e.code;
    var el = e.target; // ^------------------------ Keypress FX ------------------------

    if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.win) {
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
      var keyPressFx = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__.createHTMLElem)(fragment, 'div', ['key-press-fx']);
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
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      sendTab();
    } else if (eCode === 'CapsLock') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleClick)();
      changeCapsLockState(el);
    } else if (eCode === 'ShiftLeft' || eCode === 'ShiftRight') {
      if (isKeyboard) {
        (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleDownClick)();
      } else {
        (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleClick)();
      }

      var shiftRight = document.querySelector('.shift-right');
      var shiftLeft = document.querySelector('.shift-left');
      changeShiftState(true, shiftRight, shiftLeft);
    } else if (eCode === 'ControlLeft' || eCode === 'ControlRight') {
      if (isKeyboard) {
        (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleDownClick)();
      } else {
        (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleClick)();
      }

      var controlRight = document.querySelector('.control-right');
      var controlLeft = document.querySelector('.control-left');
      changeControlState(controlLeft, controlRight);
    } else if (eCode === 'MetaLeft') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleClick)();
      changeMetaState(el);
    } else if (eCode === 'AltLeft' || eCode === 'AltRight') {
      if (isKeyboard) {
        (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleDownClick)();
      } else {
        (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleClick)();
      }

      var altRight = document.querySelector('.alt-right');
      var altLeft = document.querySelector('.alt-left');
      changeAltState(altLeft, altRight);
    } else if (eCode === 'Space') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playSoftClick)();
      addSpace();
    } else if (eCode === 'Enter') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      addEnter(el);
    } else if (eCode === 'Backspace') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      addBackspace();
    } else if (eCode === 'Delete') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      addDelete();
    } else if (eCode === 'ArrowUp') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      addArrowUp();
    } else if (eCode === 'ArrowRight') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      addArrowRight();
    } else if (eCode === 'ArrowDown') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      addArrowDown();
    } else if (eCode === 'ArrowLeft') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      addArrowLeft();
    } else if (eCode === 'Language') {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playMediumClick)();
      changeLanguageKey();
    } else {
      (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playSoftClick)();
      charFromKeyboard = _app__WEBPACK_IMPORTED_MODULE_2__.APP.control || _app__WEBPACK_IMPORTED_MODULE_2__.APP.alt ? '' : (0,_hendlers__WEBPACK_IMPORTED_MODULE_4__.getCharFromKeyboard)(e);
      changeTextValue(charFromKeyboard);
    }

    if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.control && _app__WEBPACK_IMPORTED_MODULE_2__.APP.alt) {
      var language$ = document.querySelector('.language .key__text');

      if (language$.innerHTML === 'RU') {
        _app__WEBPACK_IMPORTED_MODULE_2__.APP.language = 'EN';
      } else {
        _app__WEBPACK_IMPORTED_MODULE_2__.APP.language = 'RU';
      }

      language$.innerHTML = _app__WEBPACK_IMPORTED_MODULE_2__.APP.language;
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
      if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.shift) {
        _app__WEBPACK_IMPORTED_MODULE_2__.APP.shift = !_app__WEBPACK_IMPORTED_MODULE_2__.APP.shift;
        var shiftLeft$ = document.querySelector('.shift-left');
        var shiftRight$ = document.querySelector('.shift-right');
        shiftLeft$.classList.remove('enable');
        shiftRight$.classList.remove('enable');
      }

      updateKeyboardKeysView();
    };

    key.addEventListener('click', resetShift);

    var resetControl = function resetControl() {
      if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.control) {
        _app__WEBPACK_IMPORTED_MODULE_2__.APP.control = !_app__WEBPACK_IMPORTED_MODULE_2__.APP.control;
        var controlLeft$ = document.querySelector('.control-left');
        var controlRight$ = document.querySelector('.control-right');
        controlLeft$.classList.remove('enable');
        controlRight$.classList.remove('enable');
      }

      updateKeyboardKeysView();
    };

    key.addEventListener('click', resetControl); // const resetWin = () => {
    //   if (APP.win) {
    //     APP.win = !APP.win;
    //     const winLeft$ = document.querySelector('.meta-left');
    //     winLeft$.classList.remove('enable');
    //   }
    //   updateKeyboardKeysView();
    // };
    // key.addEventListener('click', resetWin);

    var resetAlt = function resetAlt() {
      if (_app__WEBPACK_IMPORTED_MODULE_2__.APP.alt) {
        _app__WEBPACK_IMPORTED_MODULE_2__.APP.alt = !_app__WEBPACK_IMPORTED_MODULE_2__.APP.alt;
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

  var bodyContainer$ = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__.createHTMLElem)(fragment$, 'div', ['body__container']);
  var main$ = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__.createHTMLElem)(bodyContainer$, 'div', ['main']);
  var mainContainer$ = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__.createHTMLElem)(main$, 'div', ['container']);
  var textarea$ = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__.createHTMLElem)(mainContainer$, 'textarea', ['textarea', 'p2', 'scroll']);
  var keyboard$ = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__.createHTMLElem)(mainContainer$, 'div', ['keyboard']); // *----- add keys -----

  _keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.forEach(function (code) {
    var _char = (0,_hendlers__WEBPACK_IMPORTED_MODULE_4__.getCharFromCode)(code);

    var isChar = _keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYS_MAP[code][0] === true; // *----- create button -----

    var classFromCodeName = (0,_scripts_others_toKebabCase__WEBPACK_IMPORTED_MODULE_1__["default"])(code);
    var key$ = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__.createHTMLElem)(keyboard$, 'div', ['keyboard__key', 'key', classFromCodeName]); // *----- add code to key -----

    if (isChar) key$.dataset.code = code; // *----- add listener to button -----

    key$.addEventListener('click', function () {
      return showAnimationOnKeyPress(key$);
    });
    key$.addEventListener('click', function () {
      return sendKeyToTextArea(key$, code);
    });
    addCharKeysListener(isChar, key$);

    if (code === 'Language') {
      _char = _app__WEBPACK_IMPORTED_MODULE_2__.APP.language;
    }

    (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_5__.createHTMLElem)(key$, 'p', ['p1', 'key__text'], _char);
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
  if (!_keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.find(function (item) {
    return item === event.code;
  })) return;

  if (!event.code) {
    if (_keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYS_MAP.ShiftRight[5]) return;
  } else if (!_keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYS_MAP[event.code][0] && _keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYS_MAP[event.code][5] && event.code !== 'Backspace' && event.code !== 'Delete' && event.code !== 'Enter' && event.code !== 'Tab' && event.code !== 'ArrowUp' && event.code !== 'ArrowDown' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'Space') return;

  code = event.code;

  if (event.code !== 'ShiftLeft' && event.key === 'Shift') {
    code = 'ShiftRight';
  }

  _keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYS_MAP[code][5] = true;
  event.preventDefault();
  var classFromCodeName = (0,_scripts_others_toKebabCase__WEBPACK_IMPORTED_MODULE_1__["default"])(code);
  var key = document.querySelector(".".concat(classFromCodeName));
  showAnimationOnKeyPress(key);
  sendKeyToTextArea(key, code, true);
}; //
//


var removeSpecialKeyState = function removeSpecialKeyState(event) {
  if (!_keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.find(function (item) {
    return item === event.code;
  })) return;
  var eCode = '';

  if (!event.code) {
    if (!_keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYS_MAP.ShiftRight[5]) return;
  }

  eCode = event.code;

  if (event.code !== 'ShiftLeft' && event.key === 'Shift') {
    eCode = 'ShiftRight';
  }

  _keysMap__WEBPACK_IMPORTED_MODULE_3__.KEYS_MAP[eCode][5] = false;

  if (eCode === 'ShiftLeft' || eCode === 'ShiftRight') {
    _app__WEBPACK_IMPORTED_MODULE_2__.APP.shift = false;
    document.querySelector('.shift-left').classList.remove('enable');
    document.querySelector('.shift-right').classList.remove('enable');
    (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleUpClick)();
    updateKeyboardKeysView();
  } else if (eCode === 'ControlLeft' || eCode === 'ControlRight') {
    _app__WEBPACK_IMPORTED_MODULE_2__.APP.control = false;
    document.querySelector('.control-left').classList.remove('enable');
    document.querySelector('.control-right').classList.remove('enable');
    (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleUpClick)();
    updateKeyboardKeysView();
  } else if (eCode === 'AltLeft' || eCode === 'AltRight') {
    _app__WEBPACK_IMPORTED_MODULE_2__.APP.alt = false;
    document.querySelector('.alt-right').classList.remove('enable');
    document.querySelector('.alt-left').classList.remove('enable');
    (0,_sound__WEBPACK_IMPORTED_MODULE_0__.playDoubleUpClick)();
    updateKeyboardKeysView();
  }
}; //
//
//
//
// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<




/***/ }),

/***/ "./initHtml.js":
/*!*********************!*\
  !*** ./initHtml.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_modules_asm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/modules/asm */ "./scripts/modules/asm.js");
 // >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

var initHtml = function initHtml(pageTitle, favicon) {
  var head$ = document.querySelector('head');
  head$.innerHTML += "\n        <title>".concat(pageTitle, "</title>\n        <link rel=\"icon\" href=\"").concat(favicon, "\">\n    ");
  var fragment$ = new DocumentFragment(); // createvirtual fragment for compose no parent node

  var zeroBlock$ = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_0__.createHTMLElem)(fragment$, 'div', ['zero-block']);
  var blackout$ = (0,_scripts_modules_asm__WEBPACK_IMPORTED_MODULE_0__.createHTMLElem)(zeroBlock$, 'div', ['blackout', 'h1'], 'CLICK TO START');
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initHtml);

/***/ }),

/***/ "./keysMap.js":
/*!********************!*\
  !*** ./keysMap.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_KEYS": () => (/* binding */ KEYBOARD_KEYS),
/* harmony export */   "KEYS_MAP": () => (/* binding */ KEYS_MAP)
/* harmony export */ });
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


/***/ }),

/***/ "./scripts/modules/Time.js":
/*!*********************************!*\
  !*** ./scripts/modules/Time.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// import {name} from './name.js';
//* *******************************************************************
//*
//*     const time = new Time();
//*
//*     SET:
//*         time.setDaysType = 'English';
//*             'English'   - [`Sunday`, `Monday`, `Tuesday`, `Wednesday`,
//*                            `Thursday`, `Friday`, `Saturday`]
//*             'Eng'       - [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`]
//*             'ENG'       - [`SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`]
//*             'Ukrainian' - [`Наділя`, `Понеділок`, `Вівторок`, `Середа`,
//*                            `Четвер`, `П'ятниця`, `Субота`]
//*             'Ua'        - [`Нд`, `Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`]
//*             'UA'        - [`НД`, `ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`]
//*         time.setDays = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`,
//*                          `Thursday`, `Friday`, `Saturday`];
//*
//*         time.setMonthsType = 'NUM';
//*             'NUM'       - [`01`, `02`, `03`, `04`, `05`, `06`, `07`,
//*                            `08`, `09`, `10`, `11`, `12`];
//*             'English'   - [`January`, `February`, `March`, `April`, `May`, `June`,
//*                            `July`, `August`, `September`, `October`, `November`, `December`]
//*             'Eng'       - [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `June`, `July`,
//*                            `Aug`, `Sept`, `Oct`, `Nov`, `Dec`];
//*             'ENG'       -
//*             'Ukrainian' - [`Січень`, `Лютий`, `Березень`, `Квітень`, `Травень`, `Червень`,
//*                            `Липень`, `Серпень`, `Вересень`, `Жовтень`, `Листопад`, `Грудень`]
//*             'Ua'        -
//*             'UA'        -
//*         time.setMonth = [`January`, `February`, `March`, `April`, `May`, `June`, `July`,
//*                          `August`, `September`, `October`, `November`, `December`]
//*
//*         time.setDateSeparator = '.';
//*         time.setTimeSeparator = ':';
//*
//*         time.reset();
//*
//*     GET:
//*         time.YYYY   // Year
//*         time.MM     // Month
//*         time.DD     // Day
//*         time.hhUTC  // Hours GMT=0
//*         time.hh     // Hours
//*         time.mm     // Minutes
//*         time.ss     // Seconde
//*         time.mmm    // Millisecons
//*         time.dd     // Day of the week
//*
//*         time.fullDate       // 2022.03.24 16:21:49 (Thursday)
//*         time.hhmmss         // 16:21:49
//*         time.hhmm           // 16:21
//*         time.fullDateUTC    // 2022.03.24 16:21:49 (Thursday)
//*         time.hhmmssUTC      // 16:21:49
//*         time.hhmmUTC        // 16:21
//*         time.YYYYMMDD       // 2022.03.24
//*         time.DDdd           // 24 Thursday
//*
//* *******************************************************************/
// >----------------------------------------------------------------<
// >                             CLASS                              <
// >----------------------------------------------------------------<
var Time = /*#__PURE__*/function () {
  function Time() {
    _classCallCheck(this, Time);
  }

  _createClass(Time, [{
    key: "addTimeForwardZero",
    value: //   constructor() {
    //   }
    function addTimeForwardZero(num) {
      this.num = num;
      return this.num < 10 ? "0".concat(this.num) : this.num;
    }
  }, {
    key: "addTimeForwardTwoZeros",
    value: function addTimeForwardTwoZeros(num) {
      this.num = num;

      if (this.num < 100) {
        if (this.num < 10) {
          return "00".concat(this.num);
        }

        return "0".concat(this.num);
      }

      return +this.num; // return this.num < 100 ? (this.num < 10 ? `00${this.num}` : `0${this.num}`) : +this.num;
    } // ^------------------------ main function ------------------------

  }, {
    key: "getUserDate",
    value: function getUserDate() {
      var date = new Date();
      var daysType = 'English';
      var monthsType = 'NUM'; // if (typeof date === 'number') date = new Date(date);

      var days = [];

      if (this.days) {
        days = this.days;
      } else {
        var _this$daysType;

        daysType = (_this$daysType = this.daysType) !== null && _this$daysType !== void 0 ? _this$daysType : daysType;

        if (daysType === 'Eng' || daysType === 'ENG') {
          days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        } else if (daysType === 'Ukrainian' || daysType === 'UKRAINIAN') {
          days = ['Наділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
        } else if (daysType === 'Ua' || daysType === 'UA') {
          days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        } else if (daysType === 'Num' || daysType === 'NUM') {
          days = ['01', '02', '03', '04', '05', '06', '07'];
        } else {
          days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        }
      }

      var months = [];

      if (this.months) {
        months = this.months;
      } else {
        var _this$monthsType;

        monthsType = (_this$monthsType = this.monthsType) !== null && _this$monthsType !== void 0 ? _this$monthsType : monthsType;

        if (monthsType === 'English' || monthsType === 'ENGLISH') {
          months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        } else if (monthsType === 'Eng' || monthsType === 'ENG') {
          months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        } else if (monthsType === 'Ukrainian' || monthsType === 'UKRAINIAN') {
          months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
        } else if (monthsType === 'Ua' || monthsType === 'UA') {
          months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'];
        } else {
          months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        }
      }

      var YYYY = date.getFullYear().toString();
      var MM = months[date.getMonth()].toString();
      var DD = this.addTimeForwardZero(date.getDate()).toString();
      var dd = days[date.getDay()].toString();
      var hhUTC = this.addTimeForwardZero(date.getUTCHours()).toString();
      var hh = this.addTimeForwardZero(date.getHours()).toString();
      var mm = this.addTimeForwardZero(date.getMinutes()).toString();
      var ss = this.addTimeForwardZero(date.getSeconds()).toString();
      var mmm = this.addTimeForwardTwoZeros(date.getMilliseconds()).toString();

      if (monthsType === 'ENGLISH' || monthsType === 'ENG' || monthsType === 'UKRAINIAN' || monthsType === 'UA') {
        MM = MM.toUpperCase();
      }

      if (daysType === 'ENGLISH' || daysType === 'ENG' || daysType === 'UKRAINIAN' || daysType === 'UA') {
        dd = dd.toUpperCase();
      }

      return {
        YYYY: YYYY,
        MM: MM,
        DD: DD,
        hhUTC: hhUTC,
        hh: hh,
        mm: mm,
        ss: ss,
        mmm: mmm,
        dd: dd
      };
    } // ^------------------------ others ------------------------

  }, {
    key: "reset",
    value: function reset() {
      this.days = undefined;
      this.months = undefined;
      this.daysType = undefined;
      this.monthsType = undefined;
      this.dataSeparator = undefined;
      this.timeSeparator = undefined;
    } // ^------------------------ setters ------------------------

  }, {
    key: "setDays",
    set: function set(days) {
      this.days = _toConsumableArray(days);
    }
  }, {
    key: "setDaysType",
    set: function set(daysType) {
      this.daysType = daysType;
    }
  }, {
    key: "setMonths",
    set: function set(months) {
      this.months = _toConsumableArray(months);
    }
  }, {
    key: "setMonthsType",
    set: function set(monthsType) {
      this.monthsType = monthsType;
    }
  }, {
    key: "setDateSeparator",
    set: function set(separator) {
      this.dataSeparator = separator;
    }
  }, {
    key: "setTimeSeparator",
    set: function set(separator) {
      this.timeSeparator = separator;
    } // ^------------------------ getters ------------------------

  }, {
    key: "YYYY",
    get: function get() {
      return this.getUserDate().YYYY;
    }
  }, {
    key: "MM",
    get: function get() {
      return this.getUserDate().MM;
    }
  }, {
    key: "DD",
    get: function get() {
      return this.getUserDate().DD;
    }
  }, {
    key: "dd",
    get: function get() {
      return this.getUserDate().dd;
    }
  }, {
    key: "hhUTC",
    get: function get() {
      return this.getUserDate().hhUTC;
    }
  }, {
    key: "hh",
    get: function get() {
      return this.getUserDate().hh;
    }
  }, {
    key: "mm",
    get: function get() {
      return this.getUserDate().mm;
    }
  }, {
    key: "ss",
    get: function get() {
      return this.getUserDate().ss;
    }
  }, {
    key: "mmm",
    get: function get() {
      return this.getUserDate().mmm;
    }
  }, {
    key: "fullDate",
    get: function get() {
      var _this$dataSeparator, _this$timeSeparator;

      var date = this.getUserDate();
      var ds = (_this$dataSeparator = this.dataSeparator) !== null && _this$dataSeparator !== void 0 ? _this$dataSeparator : '.';
      var ts = (_this$timeSeparator = this.timeSeparator) !== null && _this$timeSeparator !== void 0 ? _this$timeSeparator : ':';
      return "".concat(date.YYYY).concat(ds).concat(date.MM).concat(ds).concat(date.DD, " ").concat(date.hh).concat(ts).concat(date.mm).concat(ts).concat(date.ss, " (").concat(date.dd, ")");
    }
  }, {
    key: "hhmmss",
    get: function get() {
      var _this$timeSeparator2;

      var date = this.getUserDate();
      var ts = (_this$timeSeparator2 = this.timeSeparator) !== null && _this$timeSeparator2 !== void 0 ? _this$timeSeparator2 : ':';
      return "".concat(date.hh).concat(ts).concat(date.mm).concat(ts).concat(date.ss);
    }
  }, {
    key: "hhmm",
    get: function get() {
      var _this$timeSeparator3;

      var date = this.getUserDate();
      var ts = (_this$timeSeparator3 = this.timeSeparator) !== null && _this$timeSeparator3 !== void 0 ? _this$timeSeparator3 : ':';
      return "".concat(date.hh).concat(ts).concat(date.mm);
    }
  }, {
    key: "fullDateUTC",
    get: function get() {
      var _this$dataSeparator2, _this$timeSeparator4;

      var date = this.getUserDate();
      var ds = (_this$dataSeparator2 = this.dataSeparator) !== null && _this$dataSeparator2 !== void 0 ? _this$dataSeparator2 : '.';
      var ts = (_this$timeSeparator4 = this.timeSeparator) !== null && _this$timeSeparator4 !== void 0 ? _this$timeSeparator4 : ':';
      return "".concat(date.YYYY).concat(ds).concat(date.MM).concat(ds).concat(date.DD, " ").concat(date.hhUTC).concat(ts).concat(date.mm).concat(ts).concat(date.ss, " (").concat(date.dd, ")");
    }
  }, {
    key: "hhmmssUTC",
    get: function get() {
      var _this$timeSeparator5;

      var date = this.getUserDate();
      var ts = (_this$timeSeparator5 = this.timeSeparator) !== null && _this$timeSeparator5 !== void 0 ? _this$timeSeparator5 : ':';
      return "".concat(date.hhUTC).concat(ts).concat(date.mm).concat(ts).concat(date.ss);
    }
  }, {
    key: "hhmmUTC",
    get: function get() {
      var _this$timeSeparator6;

      var date = this.getUserDate();
      var ts = (_this$timeSeparator6 = this.timeSeparator) !== null && _this$timeSeparator6 !== void 0 ? _this$timeSeparator6 : ':';
      return "".concat(date.hhUTC).concat(ts).concat(date.mm);
    }
  }, {
    key: "YYYYMMDD",
    get: function get() {
      var _this$dataSeparator3;

      var date = this.getUserDate();
      var ds = (_this$dataSeparator3 = this.dataSeparator) !== null && _this$dataSeparator3 !== void 0 ? _this$dataSeparator3 : '.';
      return "".concat(date.YYYY).concat(ds).concat(date.MM).concat(ds).concat(date.DD);
    }
  }, {
    key: "DDdd",
    get: function get() {
      var date = this.getUserDate();
      return "".concat(date.DD, " ").concat(date.dd);
    }
  }]);

  return Time;
}(); // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Time);

/***/ }),

/***/ "./scripts/modules/addTimeForwardZero.js":
/*!***********************************************!*\
  !*** ./scripts/modules/addTimeForwardZero.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
var addTimeForwardZero = function addTimeForwardZero(num) {
  return num < 10 ? "0".concat(num) : num;
}; // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTimeForwardZero);

/***/ }),

/***/ "./scripts/modules/asm.js":
/*!********************************!*\
  !*** ./scripts/modules/asm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Time": () => (/* reexport safe */ _Time__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "addTimeForwardZero": () => (/* reexport safe */ _addTimeForwardZero__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "createHTMLElem": () => (/* reexport safe */ _createHTMLElem__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "createHTMLElemAfter": () => (/* reexport safe */ _createHTMLElemAfter__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "createHTMLElemBefore": () => (/* reexport safe */ _createHTMLElemBefore__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "createHTMLElemPrep": () => (/* reexport safe */ _createHTMLElemPrep__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "getRandomNumber": () => (/* reexport safe */ _getRandomNumber__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "getUserDate": () => (/* reexport safe */ _getUserDate__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "popup": () => (/* reexport safe */ _popup__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "randomizeArray": () => (/* reexport safe */ _randomizeArray__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "removeKeysFromArray": () => (/* reexport safe */ _removeKeysFromArray__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "sortAB": () => (/* reexport safe */ _sortAB__WEBPACK_IMPORTED_MODULE_6__["default"])
/* harmony export */ });
/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Time */ "./scripts/modules/Time.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ "./scripts/modules/popup.js");
/* harmony import */ var _createHTMLElem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHTMLElem */ "./scripts/modules/createHTMLElem.js");
/* harmony import */ var _createHTMLElemPrep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHTMLElemPrep */ "./scripts/modules/createHTMLElemPrep.js");
/* harmony import */ var _createHTMLElemAfter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createHTMLElemAfter */ "./scripts/modules/createHTMLElemAfter.js");
/* harmony import */ var _createHTMLElemBefore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createHTMLElemBefore */ "./scripts/modules/createHTMLElemBefore.js");
/* harmony import */ var _sortAB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortAB */ "./scripts/modules/sortAB.js");
/* harmony import */ var _addTimeForwardZero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addTimeForwardZero */ "./scripts/modules/addTimeForwardZero.js");
/* harmony import */ var _getUserDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getUserDate */ "./scripts/modules/getUserDate.js");
/* harmony import */ var _getRandomNumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getRandomNumber */ "./scripts/modules/getRandomNumber.js");
/* harmony import */ var _randomizeArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./randomizeArray */ "./scripts/modules/randomizeArray.js");
/* harmony import */ var _removeKeysFromArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./removeKeysFromArray */ "./scripts/modules/removeKeysFromArray.js");











 // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<



/***/ }),

/***/ "./scripts/modules/createHTMLElem.js":
/*!*******************************************!*\
  !*** ./scripts/modules/createHTMLElem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHTMLElem);

/***/ }),

/***/ "./scripts/modules/createHTMLElemAfter.js":
/*!************************************************!*\
  !*** ./scripts/modules/createHTMLElemAfter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
function createHTMLElemAfter(parent, elementType) {
  var _elName$classList;

  var classNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  // create element
  var elName = document.createElement(elementType);

  (_elName$classList = elName.classList).add.apply(_elName$classList, _toConsumableArray(classNames));

  elName.innerHTML = text;
  parent.after(elName);
  return elName;
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHTMLElemAfter);

/***/ }),

/***/ "./scripts/modules/createHTMLElemBefore.js":
/*!*************************************************!*\
  !*** ./scripts/modules/createHTMLElemBefore.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
function createHTMLElemBefore(parent, elementType) {
  var _elName$classList;

  var classNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  // create element
  var elName = document.createElement(elementType);

  (_elName$classList = elName.classList).add.apply(_elName$classList, _toConsumableArray(classNames));

  elName.innerHTML = text;
  parent.before(elName);
  return elName;
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHTMLElemBefore);

/***/ }),

/***/ "./scripts/modules/createHTMLElemPrep.js":
/*!***********************************************!*\
  !*** ./scripts/modules/createHTMLElemPrep.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
function createHTMLElemPrep(parent, elementType) {
  var _elName$classList;

  var classNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  // create element
  var elName = document.createElement(elementType);

  (_elName$classList = elName.classList).add.apply(_elName$classList, _toConsumableArray(classNames));

  elName.innerHTML = text;
  parent.prepend(elName);
  return elName;
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHTMLElemPrep);

/***/ }),

/***/ "./scripts/modules/getRandomNumber.js":
/*!********************************************!*\
  !*** ./scripts/modules/getRandomNumber.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import {name} from './name.js';
// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
function getRandomNumber() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
  if (min >= max) return undefined;
  var randomNumber = Math.trunc(Math.random() * (max - min + 1)) + min;
  return randomNumber;
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomNumber);

/***/ }),

/***/ "./scripts/modules/getUserDate.js":
/*!****************************************!*\
  !*** ./scripts/modules/getUserDate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTimeForwardZero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTimeForwardZero */ "./scripts/modules/addTimeForwardZero.js");
 // >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

function getUserDate() {
  var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var daysType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'English';
  var date = d;
  if (typeof date === 'number') date = new Date(d);
  var days = [];

  if (daysType === 'Eng') {
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  } else if (daysType === 'ENG') {
    days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  } else if (daysType === 'Ukraine') {
    days = ['Наділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
  } else if (daysType === 'Ua') {
    days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  } else if (daysType === 'UA') {
    days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  } else {
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  var YYYY = date.getFullYear().toString();
  var MM = (0,_addTimeForwardZero__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getMonth() + 1).toString();
  var DD = (0,_addTimeForwardZero__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getDate()).toString();
  var dd = days[date.getDay()].toString();
  var hhUTC = (0,_addTimeForwardZero__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours()).toString();
  var hh = (0,_addTimeForwardZero__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getHours()).toString();
  var mm = (0,_addTimeForwardZero__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getMinutes()).toString();
  var ss = (0,_addTimeForwardZero__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getSeconds()).toString();
  var mls = (0,_addTimeForwardZero__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getMilliseconds()).toString();
  return {
    fullDate: "".concat(YYYY, ".").concat(MM, ".").concat(DD, " ").concat(hh, ":").concat(mm, ":").concat(ss, " (").concat(dd, ")"),
    hhmmss: "".concat(hh, ":").concat(mm, ":").concat(ss),
    hhmm: "".concat(hh, ":").concat(mm),
    fullDateUTC: "".concat(YYYY, ".").concat(MM, ".").concat(DD, " ").concat(hhUTC, ":").concat(mm, ":").concat(ss, " (").concat(dd, ")"),
    hhmmssUTC: "".concat(hhUTC, ":").concat(mm, ":").concat(ss),
    hhmmUTC: "".concat(hhUTC, ":").concat(mm),
    YYYYMMDD: "".concat(YYYY, ".").concat(MM, ".").concat(DD),
    DDdd: "".concat(DD, " ").concat(dd),
    YYYY: YYYY,
    MM: MM,
    DD: DD,
    hhUTC: hhUTC,
    hh: hh,
    mm: mm,
    ss: ss,
    mls: mls,
    dd: dd
  };
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserDate);

/***/ }),

/***/ "./scripts/modules/popup.js":
/*!**********************************!*\
  !*** ./scripts/modules/popup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createHTMLElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHTMLElem */ "./scripts/modules/createHTMLElem.js");
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
  var popUp = (0,_createHTMLElem__WEBPACK_IMPORTED_MODULE_0__["default"])(zeroBlock, 'div', ['popup']);
  (0,_createHTMLElem__WEBPACK_IMPORTED_MODULE_0__["default"])(popUp, 'h3', ['h3', 'popup__title'], title);
  (0,_createHTMLElem__WEBPACK_IMPORTED_MODULE_0__["default"])(popUp, 'p1', ['p1', 'popup__text'], text);

  if (button !== '') {
    var popupButton = (0,_createHTMLElem__WEBPACK_IMPORTED_MODULE_0__["default"])(popUp, 'button', ['button', 'popup__button'], button);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);

/***/ }),

/***/ "./scripts/modules/randomizeArray.js":
/*!*******************************************!*\
  !*** ./scripts/modules/randomizeArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import {name} from './name.js';
// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
function randomizeArray(array) {
  var randomArray = [];

  var tempArray = _toConsumableArray(array);

  while (tempArray.length > 0) {
    var random = Math.trunc(Math.random() * tempArray.length);
    randomArray = [].concat(_toConsumableArray(randomArray), _toConsumableArray(tempArray.splice(random, 1)));
  }

  return randomArray;
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomizeArray);

/***/ }),

/***/ "./scripts/modules/removeKeysFromArray.js":
/*!************************************************!*\
  !*** ./scripts/modules/removeKeysFromArray.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import {name} from './name.js';
// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
function removeKeysFromArray(array, keysToRemove) {
  return array.filter(function (item) {
    return !keysToRemove.includes(item);
  });
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeKeysFromArray);

/***/ }),

/***/ "./scripts/modules/sortAB.js":
/*!***********************************!*\
  !*** ./scripts/modules/sortAB.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<
function sortAB(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
} // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortAB);

/***/ }),

/***/ "./scripts/others/toKebabCase.js":
/*!***************************************!*\
  !*** ./scripts/others/toKebabCase.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var toKebabCase = function toKebabCase(str) {
  if (str) {
    return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
      return x.toLowerCase();
    }).join('-');
  }

  return str;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKebabCase);

/***/ }),

/***/ "./sound.js":
/*!******************!*\
  !*** ./sound.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playDoubleClick": () => (/* binding */ playDoubleClick),
/* harmony export */   "playDoubleDownClick": () => (/* binding */ playDoubleDownClick),
/* harmony export */   "playDoubleUpClick": () => (/* binding */ playDoubleUpClick),
/* harmony export */   "playMediumClick": () => (/* binding */ playMediumClick),
/* harmony export */   "playSoftClick": () => (/* binding */ playSoftClick)
/* harmony export */ });
/* harmony import */ var _assets_sounds_click_soft_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sounds/click-soft.mp3 */ "./assets/sounds/click-soft.mp3");
/* harmony import */ var _assets_sounds_click_double_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sounds/click-double.mp3 */ "./assets/sounds/click-double.mp3");
/* harmony import */ var _assets_sounds_click_double_down_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sounds/click-double-down.mp3 */ "./assets/sounds/click-double-down.mp3");
/* harmony import */ var _assets_sounds_click_double_up_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sounds/click-double-up.mp3 */ "./assets/sounds/click-double-up.mp3");





function playSoftClick() {
  var audio = new Audio(_assets_sounds_click_soft_mp3__WEBPACK_IMPORTED_MODULE_0__);
  audio.play();
}

function playMediumClick() {
  var audio = new Audio(_assets_sounds_click_double_down_mp3__WEBPACK_IMPORTED_MODULE_2__);
  audio.play();
}

function playDoubleClick() {
  var audio = new Audio(_assets_sounds_click_double_mp3__WEBPACK_IMPORTED_MODULE_1__);
  audio.play();
}

function playDoubleDownClick() {
  var audio = new Audio(_assets_sounds_click_double_down_mp3__WEBPACK_IMPORTED_MODULE_2__);
  audio.play();
}

function playDoubleUpClick() {
  var audio = new Audio(_assets_sounds_click_double_up_mp3__WEBPACK_IMPORTED_MODULE_3__);
  audio.play();
}



/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/sounds/click-double-down.mp3":
/*!*********************************************!*\
  !*** ./assets/sounds/click-double-down.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "204641909b1a1fa35182.mp3";

/***/ }),

/***/ "./assets/sounds/click-double-up.mp3":
/*!*******************************************!*\
  !*** ./assets/sounds/click-double-up.mp3 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2108bfe4a7f7076e2002.mp3";

/***/ }),

/***/ "./assets/sounds/click-double.mp3":
/*!****************************************!*\
  !*** ./assets/sounds/click-double.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c73f52deecb9cfa816c4.mp3";

/***/ }),

/***/ "./assets/sounds/click-soft.mp3":
/*!**************************************!*\
  !*** ./assets/sounds/click-soft.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1de2062be033df93f8d6.mp3";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initHtml */ "./initHtml.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./app.js");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.scss */ "./style/style.scss");
/* harmony import */ var _html_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-generator */ "./html-generator.js");
// import {
//   createHTMLElem,
// } from './scripts/modules/asm';

 // import './style/scss/dark.scss';


 // const fragment$ = new DocumentFragment(); // createvirtual fragment for compose no parent node
// const darkTheme$ = createHTMLElem(fragment$, 'link', ['']);
// darkTheme$.href = dark;
// darkTheme$.rel = 'stylesheet';
// const head$ = document.querySelector('head');
// head$.prepend(fragment$);

(0,_initHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('Virtual Keyboard', './assets/favicon.ico');
window.addEventListener('load', _app__WEBPACK_IMPORTED_MODULE_1__.loadSettings);
window.addEventListener('beforeunload', _app__WEBPACK_IMPORTED_MODULE_1__.saveSettings);
(0,_html_generator__WEBPACK_IMPORTED_MODULE_3__.generateHtml)();
document.addEventListener('keydown', _html_generator__WEBPACK_IMPORTED_MODULE_3__.sendTypeKeyToVirtualKeyboard);
document.addEventListener('keyup', _html_generator__WEBPACK_IMPORTED_MODULE_3__.removeSpecialKeyState);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map