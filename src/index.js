import initHtml from './initHtml';
import {
  loadSettings,
  saveSettings,
} from './app';

import './style/scss/dark.scss';
import './style/style.scss';
import { generateHtml, sendTypeKeyToVirtualKeyboard, removeSpecialKeyState } from './html-generator';

initHtml('Virtual Keyboard', './assets/favicon.ico');
window.addEventListener('load', loadSettings);
window.addEventListener('beforeunload', saveSettings);
generateHtml();

document.addEventListener('keydown', sendTypeKeyToVirtualKeyboard);
document.addEventListener('keyup', removeSpecialKeyState);
