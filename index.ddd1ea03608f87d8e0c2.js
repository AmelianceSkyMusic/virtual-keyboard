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

;// CONCATENATED MODULE: ./initHtml.js
// >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<
var initHtml = function initHtml(pageTitle, favicon) {
  var head$ = document.querySelector('head');
  head$.innerHTML += "\n        <title>".concat(pageTitle, "</title>\n        <link rel=\"icon\" href=\"").concat(favicon, "\">\n    ");
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
  alt: false
};

var loadSettings = function loadSettings() {
  if (localStorage.getItem('settings')) {
    // load settings if exists
    var receivedSettings = JSON.parse(localStorage.getItem('settings')); // read
    // APP = { ...APP, ...receivedSettings };
    // console.log(this.language);

    APP.language = receivedSettings.language; // this.shift = receivedSettings.shift;
    // this.capsLock = receivedSettings.capsLock;
    // this.carretPosition = receivedSettings.carretPosition;
    // this.control = receivedSettings.control;
    // this.win = receivedSettings.win;
    // this.alt = receivedSettings.alt;
  }
};

var saveSettings = function saveSettings() {
  var savingSettings = {
    language: APP.language // shift: APP.shift,
    // capsLock: APP.capsLock,
    // carretPosition: APP.carretPosition,
    // control: APP.control,
    // win: APP.win,
    // alt: APP.alt,

  };
  localStorage.setItem('settings', JSON.stringify(savingSettings)); // write
}; // >----------------------------------------------------------------<
// >                          EXPORT                                <
// >----------------------------------------------------------------<



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
var KEYBOARD_KEYS = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'Language', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']; // const KEYS_MAP = [
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


;// CONCATENATED MODULE: ./assets/sounds/click-soft.mp3
const click_soft_namespaceObject = "data:audio/mpeg;base64,//vgZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAUZwBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP////////////////////////////////8AAAA3TEFNRTMuOTlyAc0AAAAAAAAAADT/JAaQTQABQAAAFGfLcoMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
;// CONCATENATED MODULE: ./assets/sounds/click-double.mp3
const click_double_namespaceObject = __webpack_require__.p + "c73f52deecb9cfa816c4.mp3";
;// CONCATENATED MODULE: ./assets/sounds/click-double-down.mp3
const click_double_down_namespaceObject = "data:audio/mpeg;base64,//vgZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAQUgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA3TEFNRTMuOTlyAc0AAAAAAAAAADT/JAXJTQABQAAAEFKdMBuOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=";
;// CONCATENATED MODULE: ./assets/sounds/click-double-up.mp3
const click_double_up_namespaceObject = "data:audio/mpeg;base64,//vgZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAUZwBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP////////////////////////////////8AAAA3TEFNRTMuOTlyAc0AAAAAAAAAADT/JAJMTQABQAAAFGecBckZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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yXzsDP/OEMmUJYxsjBzPIQBM7Yvsx4gfTDjF0MQAK0wFgFAqA+YHQGYCAgMDEFYwdQijCZCeMJkJIwVAPwEAwYEIGRgcgbGBiBMYC4ARVABMBIB8wJAJzARAIW+XtMAIAcwCACzAIAHAwAqdMhlLWWcwLASXxd4tMW2ZbBSwypmXUborCpiuNTuy5Lku7LdU1LjzVNGo1Go1jqmprXatLS2vxxxxx5////llTU2P5ZZZd3jl//vGrS2e7xxx/Kmpsfyyyy7vHLL9441aXH8auPNVqamx1WprWW8auXfxxxxx5+OPNZU1NTY6rU2XcaWlG0xBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
;// CONCATENATED MODULE: ./assets/sounds/click-medium.mp3
const click_medium_namespaceObject = "data:audio/mpeg;base64,//vgZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAUZwBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP////////////////////////////////8AAAA3TEFNRTMuOTlyAc0AAAAAAAAAADT/JAaYTQABQAAAFGfOU6voAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vgZAAACH1MxwVjIAKNSNjgozwAaR07RNm9gBLCo+fDH4AATkACDhY8UAVFFTO83lUOOdQy4WUduHzBuA2rjo2GaaCj2ZAAgzDjMIBwjklwzKONJQ1EAMgsCZKpuumqGOCHLWdcpupmWCmvHl2O6DQTQQM4ZLgRgmWqbbpurgptBg2XTdXM8kxQzDFMckyRVJGMoeOZ4ymuKrcYyRsOG4sEKBcU3pDkgNpAFGOSDQTFDLXvehPMc812zdZAT6UxlJGgEgRNqA3EgcY3EtWYYYKDXuwAAgmGCWjTDdeOORIVzlkCzBeBBxFRFRTRRMzVTusOZoWQBJ5uznbedcIRGBDjv1PfU76TjdNlUzyQcOqkZSB00nTGbZ4cOmQYhhoHA5BBs1mDWOCBIZWHYnF6lgRwAEXsGEEIiLvWIAAAIA5oHQoE4choGg4krAyBICwRU+h7PujGr0PUavf7gJw01HO8ZNP48BD3NsOQ6GSU5x6wcghhLIqfNM00PUageahv741d5EzDfv7+j9+/fv395E4XM652BWMkSjxXq9Xq9Xq9nai2Bqxc0epCCCaEIRinE0FwQia+6afoYrJob+O0Bh6AAAAAAAGBhIAAg0cAlvmcmRigoyozctMTSjGxUwcKMKDzSTdJQz+GM/FjEQQuqZ2EmBhpssIYuvmDhQIBzDwMxYGKoqYgeGAkJsTWZsWlY8Y+HDIEZcZBhKY+GmCiZppgbRPm/UCq6gIJEjOTYxc9M1HyQGMNBQuDHmPZ0ZgachBhqZqhGJiRiBSRGjCBIaMgFjKjoyAcDgkHFjsmKOpVPTNFU0+LMRNTWjpjggPTAxUyw1JBkSDTBAIrGlXmLiZigCYuJqXGYuJoCGcQLmJjxijeYwlCElLiAgBrDIOJAUMAUIRwh9nYEBgEOLxMyBAMAhAUEGrRiEhMdGjOSc1AIDBk24SNGR4KZ0lTAYABS8Ja4mChkqMsHBEChB2ZYNBcPMjEx4gqf/u2bRAgJ4MATzNlcxEsIi+Qf/g4NR0LjwerQFA3st+LLdqRdWXaIQhTnS9UUBVNBCBJ1aON2H1a0zl1G6oPqUpFj6lDwKAQDL+pxyKWQxUf1Yhf9hiTLMG2lTxS2s/0yxJRVnzU+S1oai8qxnE0jtQSIb7gb5CNnxtuP0NxxdxUO00gGJVBqiI1ZTd8GmMMe1p93aUsWTBsKJ45KqM/XHflqKETfyAl2Qwt9/nlX6nfCI42VAmoV3dVmOcFMNYi9WPZNDkbiN////+tGqemtfpE6jxcijrgsDG1PjFZgTWQtTHgFxUgjIoKzDUcDYUcyAPTDASDIUPzEIcxELZjGOpicKxjsHZ0g+a6Ngx+GZAyatN0lDFDYJfzW14zxxMCHht7NULzfyQy9pOW//viZCyP6kFKyAd3YAKtKJli5+QArHkpFBXuAALEpGMCn4AAUjC0IRNxqyKIToAwBA/FcoYzGmCKRnZWdAOiRkY9CB+gbacG6IJgA6bgHm5mhxIeYuNiA5MtDjBA4HHIiBTEAsDTBnrAcNTmpfpoXkbm2mW0RyI+Cb8HLxjCma2egUiQqM/bTwk4LjYGJAUFABlNWGTOogeAwoDkwyAhZQ0wIbMYQTK1A3xJMYZRaNNnJE9VWBgCngCglJkLAUWfd7GskAbcm3JMLHxkMMZFjAxArGTGh8xgTBoASC4GLQICg4NIiFGwwUqMZGBoxHgBoYKhjCxYwggL3JhMqFBkwgHMEAUBsOKVI9KmXc1lrruy3gUAAESvFEplFNKy6vCVyFH8tOzBIau2HGvQtR1KkE2HmYDSEArLUBUugBG5LpApDZ5G6wI0lTtBWXMRTFVuWtcag1ZNFGlyleyr8etadVrIiBM4l63dd0QCmUGbVoZCwl+acLCoqBAT/S61+P/NMiU5SJd2GX0YAgtD3f1WdJ513Q8yPlSjlTGt1pcoYut/i+wcE/sEsST1XrLYBd+kaLTMrg+hSKYylg93azMM+o0JUjzFmLGMEwTwy6xfTChCcMBATAyjwfDC/AcMRQR8xsgrDIjBOMBwc0xAgdzDYCRMMsOoxCQHTBrBSMIUAY0C2Ti5VN3ig1CDTDSNNVH81cXjcgrMKGw1OHzMypM+Bo1PQDdbiMnok1ANTRBnMxJMxQhTNhtNSgYyacTYJUORlMDcgyQNzX7mMbgI0StDmqCNOkAxySzLL/MDj0ycdTGQQNYgQz46jBI6NYi8yYODUQOFTQZGQZhcQgU0GwmCbmTJoEXAglmDFwDp8aePZkA/mqU8EEswWKDIYaNfDc0i1TFY9IisZNMgGXJm8pGFQKBgOAQKYHAai5KJgMEjG52NKk4RnE20/TWBDQZTyMbtctgjMnspkmGgHb9/iyBgQACQHBgMMuIUMh4NALU5t1GtPFA8Oy4ZARhkKBA2MWC8GAYwQESgCDALEgYUAYw0KSsEStzUxZbYpqAqAABAeM3JBatdJQYCXWRiCYD0FwOk/oqraRJhjLSzmGH8pWTKVpFtJUvARYGbiAAqtvtxLyrwYcxWmJBG2S4njLUkwYAkkBMuSPA0WwtOZcXCVy7rnxND1OB81NW7QRjWY9CC5QZcUDBbxgwazaszPz8MO4/cr7Hoo5FNFYKj0vr36kok1S7jmu2QyjtJFrz6SFS0lFG5RXpJ7VNVqJOmxKljOC74BEmcyEtyCkraViwhS7p7vNUEb3nP1QAATuhLNOpMz/0jHxqN7Pw5ZgDa07N3R804AjNI8NFhU0aSzewiNwzRXpmkJmVhSCiMbTeRyu1GBjEY5UJh2P/74mQfgAoVSEWOc4AArchI9cxgACalRwEdvQACz55gD7GAAGDhjMQrc0qsDTIWNEJ8waUhJzmFkqYxBxhsIHFmebqL5ptZmmC6ODoHHkyuGzBIaMPg4xWKjAAGMgAUxcRzjK6NDk43EOguADGJCMVkEyqXzMRGCw9TfITIRBcILiPpmMsgZtGJy8YREJgs9mNh6GQAwKfTFJMMBigyMkBYaGNyQEEoxqBjKQLMOoYxqJTSYsMGAUVNwIGA0cwuDjOA0MZD8xgATMRlLAYKE2DQqY1Cw9HjExCMLAww+CRI5AgDFzzAhDMEg4hJRjskBkClvK76GGQAZSAxgcVmZzEDjtG9XuggJGFBGOEseDsD0+POW8Pwjykuf//lv/ynvw+BGP///+CAABAAACgYhCwgPCrpVUAph1/l7oRKxoOIT2Spwt7SohmRkTMcRwIEA6rYIbTdbgp9TeNRppD9p2JDw85TxIzSmKwwW1hhu6CMYDJIeKpTcREF7XZbmiakckwhPf1mIwRrb1pbMvU6AfWmRFCmMqLEyk9nfKgisLR5JFyqGRq2DS0AVaBhErSk0rgdV+5cXXey5StbR9q//yzJ53FQHWv//uypRYWDT9///X81ff1ACwAARmUieRunrXpyTCUKJjZgZuXAoyBAiGAwUCTEhUxgBBpAaCvGepRqq4a6vG4Zhy0wZw17o4L42qQeLmSVm2fmjMCwaAXJh2MuCl6paskwQsxw8xQVEVLYw44ypgzJwxxMxw0xAVClHYxpo1LQ38Q48Y0yEIKvgsaB0BJhiJljpnDIQGFAplEJqGJtGpsl5pDZjgpgiJl1xwaB3cx7+h9eR7cB1Yxu1ho0Bki5kAq6DAijHkDGhFfgAeZQqHAhEBMQJMMDRxfAusYEAWaewLgDFkjMnDPnjOmDIiAcCYNg0pE4uUg8ps15/o1S0uPPyyy1+OOOOOOOOWWWWWWWWWOOONWlpcauWWWWWWWVbEFQVBUFQaBoGgaBkFQVBUFQaBoGgaBl3//6g7gqCoKhIGgaBoGgAAAOHSS+LvFsi8SumxgwJiGpc3VIVIlYruxmMzropeoqqayZpSQyKyEpUrEWuuS7r+xmWymGmtMOUCQlFljGY0qNbjEMsyXJLSlkSyJaUvCoK72dRpSCYAiM5jSgzmLkq5is0/0PV31Zy5TtNaXc16VpygAZkKgCdZ9kegCIykARkfnGxy7AKmJd0tKWlLwrGfrOUxmo0pCUXihCVRZYs0gCWM16Ho1S0tnEFXf//1gqCoKqTEFNRTMuOTkuNaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/++JkAA/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
;// CONCATENATED MODULE: ./sound.js






function playSoftClick() {
  var audio = new Audio(click_soft_namespaceObject);
  audio.play();
}

function playMediumClick() {
  var audio = new Audio(click_double_down_namespaceObject);
  audio.play();
}

function playDoubleClick() {
  var audio = new Audio(click_double_namespaceObject);
  audio.play();
}

function playDoubleDownClick() {
  var audio = new Audio(click_double_down_namespaceObject);
  audio.play();
}

function playDoubleUpClick() {
  var audio = new Audio(click_double_up_namespaceObject);
  audio.play();
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

  if (KEYS_MAP[code]) return KEYS_MAP[code][charCase];
  return '';
}; // ^------------------------ changeLanguage ------------------------


var changeLanguage = function changeLanguage() {
  APP.language = APP.language === 'EN' ? 'RU' : 'EN';
}; // >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<



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


;// CONCATENATED MODULE: ./html-generator.js





 // >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<
// ^------------------------ Update Keyboard Keys View ------------------------

var updateKeyboardKeysView = function updateKeyboardKeysView() {
  msg(APP.language);
  var keys$ = document.querySelectorAll('.key[data-code]');
  keys$.forEach(function (elem) {
    var el = elem;
    el.querySelector('.key__text').innerHTML = getCharFromCode(elem.dataset.code);
  });
};

window.addEventListener('load', function () {
  setTimeout(function () {
    updateKeyboardKeysView();
    var textarea$ = document.querySelector('.textarea');
    textarea$.value = 'Клавиатура создана в операционной системе Windows\nДля переключения языка используйте: ctrl + alt';
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
    elem.classList.add('enable');
  } else {
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
  var count = lines.length; // count of lines

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
  var textAfterCursor = textarea$.value.substring(start);
  var cursorLine = textBeforeCursor.split('\n').length - 1; // cursor line
  // Msg(linesPos);

  if (start !== end) {
    msg('');
  } else if (linesPos[cursorLine - 1]) {
    var startNextPostion = linesPos[cursorLine - 1].start;
    var endNextPostion = linesPos[cursorLine - 1].end;
    var endNext = linesPos[cursorLine - 1].length;
    var currentCursorPosition = start - linesPos[cursorLine].start;
    msg(currentCursorPosition, endNextPostion);
    var nextPostion = startNextPostion + currentCursorPosition;

    if (currentCursorPosition > 0 && currentCursorPosition < endNext) {
      msg('custom');
      nextPostion = startNextPostion + currentCursorPosition;
    } else if (currentCursorPosition >= endNext) {
      msg('end');
      nextPostion = endNextPostion;
    } else if (currentCursorPosition <= 0) {
      msg('start');
      nextPostion = startNextPostion;
    }

    var halfLineLength = linesPos[cursorLine].length / 2;
    textarea$.selectionStart = nextPostion;
    textarea$.selectionEnd = nextPostion;
  }
}; // *----- arrow down -----


var addArrowDown = function addArrowDown() {
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;
  var lines = textarea$.value.split('\n');
  var count = lines.length; // count of lines

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
  var textAfterCursor = textarea$.value.substring(start);
  var cursorLine = textBeforeCursor.split('\n').length - 1; // cursor line
  // Msg(linesPos);
  // Msg(cursorLine);

  if (start !== end) {
    msg('');
  } else if (linesPos[cursorLine + 1]) {
    var startNextPostion = linesPos[cursorLine + 1].start;
    var endNextPostion = linesPos[cursorLine + 1].end;
    var endNext = linesPos[cursorLine + 1].length;
    var currentCursorPosition = start - linesPos[cursorLine].start;
    msg(currentCursorPosition, endNextPostion);
    var nextPostion = startNextPostion + currentCursorPosition;

    if (currentCursorPosition > 0 && currentCursorPosition < endNext) {
      msg('custom');
      nextPostion = startNextPostion + currentCursorPosition;
    } else if (currentCursorPosition >= endNext) {
      msg('end');
      nextPostion = endNextPostion;
    } else if (currentCursorPosition <= 0) {
      msg('start');
      nextPostion = startNextPostion;
    }

    var halfLineLength = linesPos[cursorLine].length / 2;
    textarea$.selectionStart = nextPostion;
    textarea$.selectionEnd = nextPostion;
  }
}; // *----- arrow right -----


var addArrowRight = function addArrowRight() {
  var textarea$ = document.querySelector('.textarea');
  var start = textarea$.selectionStart;
  var end = textarea$.selectionEnd;

  if (start !== end) {
    msg('');
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
    msg('');
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
  if (!key) return;
  var textarea$ = document.querySelector('.textarea'); // Msg(key, ': ', code);
  // *-----  -----

  var addCharToTextarea = function addCharToTextarea(e) {
    var eCode = e.code;
    var el = e.target; // ^------------------------ Keypress FX ------------------------
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

    var charFromKeyboard = '';

    if (eCode === 'Tab') {
      playMediumClick();
      sendTab();
    } else if (eCode === 'CapsLock') {
      playDoubleClick();
      changeCapsLockState(el);
    } else if (eCode === 'ShiftLeft') {
      if (isKeyboard) {
        playDoubleDownClick();
      } else {
        playDoubleClick();
      }

      var shiftRight = document.querySelector('.shift-right');
      changeShiftState(true, el, shiftRight);
    } else if (eCode === 'ControlLeft') {
      playDoubleClick();
      var controlRight = document.querySelector('.control-right');
      changeControlState(el, controlRight);
    } else if (eCode === 'MetaLeft') {
      playDoubleClick();
      changeMetaState(el);
    } else if (eCode === 'AltLeft') {
      playDoubleClick();
      var altRight = document.querySelector('.alt-right');
      changeAltState(el, altRight);
    } else if (eCode === 'Space') {
      playSoftClick();
      addSpace();
    } else if (eCode === 'AltRight') {
      var altLeft = document.querySelector('.alt-left');
      changeAltState(el, altLeft);
    } else if (eCode === 'ControlRight') {
      playDoubleClick();
      var controlLeft = document.querySelector('.control-left');
      changeControlState(el, controlLeft);
    } else if (eCode === 'ShiftRight') {
      if (isKeyboard) {
        // !TODO: fix this
        console.log('shift right');
        playMediumClick(); //!
      } else {
        playDoubleClick();
      }

      var shiftLeft = document.querySelector('.shift-left');
      changeShiftState(el, shiftLeft);
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
      charFromKeyboard = APP.control || APP.win || APP.alt ? '' : getCharFromKeyboard(e);
      changeTextValue(charFromKeyboard); // textarea$.focus();
      // textarea$.selectionStart = start + charFromKeyboard.length;
      // textarea$.selectionEnd = start + charFromKeyboard.length;
    } // textarea$.setSelectionRange(textarea$.selectionEnd, textarea$.selectionEnd);

  }; // if (!KEYS_MAP[code][5]) {
  // *----- emulate keyboard -----
  // key.addEventListener('keyup', () => { Msg('keyup'); });


  key.addEventListener('keydown', addCharToTextarea);
  key.dispatchEvent(new KeyboardEvent('keydown', {
    code: code
  }));
  key.removeEventListener('keydown', addCharToTextarea); // key.dispatchEvent(new KeyboardEvent('keyup', {
  //   code,
  // }));
  // }
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

    var resetWin = function resetWin() {
      if (APP.win) {
        APP.win = !APP.win;
        var winLeft$ = document.querySelector('.meta-left');
        winLeft$.classList.remove('enable');
      }

      updateKeyboardKeysView();
    };

    key.addEventListener('click', resetWin);

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

    if (isChar) key$.dataset.code = code; // key$.dataset.code = code;
    // *----- add listener to button -----

    key$.addEventListener('click', function () {
      return showAnimationOnKeyPress(key$);
    });
    key$.addEventListener('click', function () {
      return sendKeyToTextArea(key$, code);
    });
    addCharKeysListener(isChar, key$);

    if (code === 'Language') {
      _char = APP.language;
      msg(_char);
    }

    modules_createHTMLElem(key$, 'p', ['p1', 'key__text'], _char);
  }); // *----- add virtual node to body -----

  var body$ = document.querySelector('body');
  body$.appendChild(fragment$); // *----- add audio -----
  // const clickAudio$ = createHTMLElem(body$, 'audio', ['audio-click']);
  // clickAudio$.src = 'assets/sounds/favicon.ico';
  // clickAudio$.src = iconN;
  // body$.appendChild(clickAudio$);
  // *----- add listeners foe special keys -----

  addSepicalKeysListener(); // *----- add focus to textarea -----

  textarea$.addEventListener('blur', function () {
    textarea$.focus();
  });
  textarea$.focus();
}; //
//
// ^------------------------ Send Type Key To Virtual Keyboard ------------------------


var sendTypeKeyToVirtualKeyboard = function sendTypeKeyToVirtualKeyboard(event) {
  msg(event);
  if (!KEYS_MAP[event.code][0] && KEYS_MAP[event.code][5] && event.code !== 'Backspace' && event.code !== 'Delete' && event.code !== 'Enter' && event.code !== 'Tab' && event.code !== 'ArrowUp' && event.code !== 'ArrowDown' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight') return;
  KEYS_MAP[event.code][5] = true;
  event.preventDefault();
  var code = event.code;
  var classFromCodeName = others_toKebabCase(code);
  var key = document.querySelector(".".concat(classFromCodeName));
  showAnimationOnKeyPress(key);
  sendKeyToTextArea(key, code, true);
}; //
//


var removeSpecialKeyState = function removeSpecialKeyState(event) {
  KEYS_MAP[event.code][5] = false;
  var eCode = event.code;

  if (eCode === 'ShiftLeft') {
    APP.shift = !APP.shift;
    document.querySelector('.shift-left').classList.remove('enable');
    document.querySelector('.shift-right').classList.remove('enable');
    playDoubleUpClick();
    updateKeyboardKeysView();
  } else if (eCode === 'ControlLeft') {
    var controlRight = document.querySelector('.control-right');
    changeControlState(el, controlRight);
  } else if (eCode === 'MetaLeft') {
    changeMetaState(el);
  } else if (eCode === 'AltLeft') {
    var altRight = document.querySelector('.alt-right');
    changeAltState(el, altRight);
  } else if (eCode === 'Space') {
    playSoftClick();
    addSpace();
  } else if (eCode === 'AltRight') {
    var altLeft = document.querySelector('.alt-left');
    changeAltState(el, altLeft);
  } else if (eCode === 'ControlRight') {
    var controlLeft = document.querySelector('.control-left');
    changeControlState(el, controlLeft);
  } else if (eCode === 'ShiftRight') {
    APP.shift = !APP.shift;
    document.querySelector('.shift-left').classList.remove('enable');
    document.querySelector('.shift-right').classList.remove('enable');
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
;// CONCATENATED MODULE: ./index.js







initHtml_0('Virtual Keyboard', './assets/favicon.ico');
window.addEventListener('load', loadSettings);
window.addEventListener('beforeunload', saveSettings);
msg(APP.language);
generateHtml();
document.addEventListener('keydown', function (event) {
  msg(event);
});
document.addEventListener('keydown', sendTypeKeyToVirtualKeyboard);
document.addEventListener('keyup', removeSpecialKeyState);
/******/ })()
;