import './style/scss/dark.scss';
import './style/style.scss';

import { generateHtml, sendTypeKeyToVirtualKeyboard } from './html-generator';

generateHtml();

document.addEventListener('keydown', sendTypeKeyToVirtualKeyboard);
