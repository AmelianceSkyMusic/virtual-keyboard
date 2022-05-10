import {
  createHTMLElem,
} from './scripts/modules/asm';
// >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

const initHtml = (pageTitle, favicon) => {
  const head$ = document.querySelector('head');
  head$.innerHTML += `
        <title>${pageTitle}</title>
        <link rel="icon" href="${favicon}">
    `;

  const fragment$ = new DocumentFragment(); // createvirtual fragment for compose no parent node
  const zeroBlock$ = createHTMLElem(fragment$, 'div', ['zero-block']);
  const blackout$ = createHTMLElem(zeroBlock$, 'div', ['blackout', 'h1'], 'CLICK TO START');
  blackout$.classList.add('show');
  blackout$.addEventListener('click', () => {
    blackout$.classList.remove('show');
    blackout$.addEventListener('animationend', () => {
      zeroBlock$.remove();
    });
  });

  const body$ = document.querySelector('body');
  body$.prepend(fragment$);
};

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export default initHtml;
