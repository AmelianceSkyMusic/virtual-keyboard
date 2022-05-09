import initHtml from './initHtml';

import './style/scss/dark.scss';
import './style/style.scss';
import { generateHtml, sendTypeKeyToVirtualKeyboard } from './html-generator';

initHtml('Virtual Keyboard', './assets/favicon.ico');

generateHtml();

document.addEventListener('keydown', sendTypeKeyToVirtualKeyboard);
