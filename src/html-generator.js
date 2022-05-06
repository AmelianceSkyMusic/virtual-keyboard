import APP from './app';
import {
  msg as Msg,
  createHTMLElem,
} from './scripts/modules/asm';

const htmlGenerator = (KEYBOARD_KEYS, KEYS_MAP) => {
  const fragment$ = new DocumentFragment();
  const bodyContainer$ = createHTMLElem(fragment$, 'div', ['body__container']);
  //   const header$ = createHTMLElem(bodyContainer$, 'div', ['header']);
  //   const headerContainer$ = createHTMLElem(header$, 'div', ['container']);
  const main$ = createHTMLElem(bodyContainer$, 'div', ['main']);
  const mainContainer$ = createHTMLElem(main$, 'div', ['container']);
  const textarea$ = createHTMLElem(mainContainer$, 'textarea', ['textarea']);

  const keyboard$ = createHTMLElem(mainContainer$, 'div', ['keyboard']);

  KEYBOARD_KEYS.forEach((key) => {
    const { shift } = APP;
    const { capsLock } = APP;
    const { language } = APP;

    const lowercase = language === 'EN' ? 0 : 2;
    const uppercase = language === 'EN' ? 1 : 3;
    let char = '';
    if (shift && capsLock) {
      if (KEYS_MAP[key]) char = KEYS_MAP[key][lowercase];
    } else if (shift || capsLock) {
      if (KEYS_MAP[key]) char = KEYS_MAP[key][uppercase];
    } else if (KEYS_MAP[key]) char = KEYS_MAP[key][lowercase];

    const toKebabCase = (str) => str
      && str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('-');

    const classFromKey = toKebabCase(key);
    const key$ = createHTMLElem(keyboard$, 'div', ['keyboard__key', 'key', classFromKey]);
    key$.addEventListener('keydown', (e) => {
      console.log(e);
    });
    key$.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'a',
    }));

    createHTMLElem(key$, 'p', ['p1', 'key__text'], char);
  });

  //   const footer$ = createHTMLElem(bodyContainer$, 'div', ['footer']);
  //   const footerCntainer$ = createHTMLElem(footer$, 'div', ['container']);

  const body$ = document.querySelector('body');
  body$.appendChild(fragment$);

  textarea$.addEventListener('blur', () => { textarea$.focus(); });
  textarea$.focus();
};

export default htmlGenerator;
