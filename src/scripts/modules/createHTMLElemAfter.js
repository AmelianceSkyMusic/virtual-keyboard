// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

function createHTMLElemAfter(parent, elementType, classNames = '', text = '') { // create element
  const elName = document.createElement(elementType);
  elName.classList.add(...classNames);
  elName.innerHTML = text;
  parent.after(elName);

  return elName;
}

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<

export default createHTMLElemAfter;
