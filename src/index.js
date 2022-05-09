import initHtml from './initHtml';
import {
  APP,
  loadSettings,
  saveSettings,
} from './app';
import { KEYS_MAP } from './keysMap';

import './style/scss/dark.scss';
import './style/style.scss';
import { generateHtml, sendTypeKeyToVirtualKeyboard, removeSpecialKeyState } from './html-generator';
import { msg } from './scripts/modules/msg';

initHtml('Virtual Keyboard', './assets/favicon.ico');
window.addEventListener('load', loadSettings);
window.addEventListener('beforeunload', saveSettings);
msg(APP.language);
generateHtml();

document.addEventListener('keydown', (event) => { msg(event); });
document.addEventListener('keydown', sendTypeKeyToVirtualKeyboard);
document.addEventListener('keyup', removeSpecialKeyState);
