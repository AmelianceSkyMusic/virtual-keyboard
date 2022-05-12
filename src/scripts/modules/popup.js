import createHTMLElem from './createHTMLElem';

// >----------------------------------------------------------------<
// >                              INIT                              <
// >----------------------------------------------------------------<

const popup = {};

// >----------------------------------------------------------------<
// >                          FUNCTIONS                             <
// >----------------------------------------------------------------<

function create(title, text, button = '', action = () => {}) {
  function closePopup(element, popupclosePopup, actionClosePopup) {
    element.addEventListener('click', () => {
      popupclosePopup.classList.remove('show'); // hide popup with animation

      // hideBlackout(); // hide blackout with aniamtion
      actionClosePopup();
      setTimeout(() => {
        popupclosePopup.remove(); // remove popup
      }, 300);
    });
  }

  const zeroBlock = document.querySelector('.zero-block');

  const popUp = createHTMLElem(zeroBlock, 'div', ['popup']);

  createHTMLElem(popUp, 'h3', ['h3', 'popup__title'], title);

  createHTMLElem(popUp, 'p1', ['p1', 'popup__text'], text);

  if (button !== '') {
    const popupButton = createHTMLElem(popUp, 'button', ['button', 'popup__button'], button);
    closePopup(popupButton, popUp, action);
  }

  // showBlackout();
  setTimeout(() => {
    popUp.classList.add('show');
  }, 0);
}

// >----------------------------------------------------------------<
// >                             COLECT                             <
// >----------------------------------------------------------------<

popup.create = create;

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

export default popup;
