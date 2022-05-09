// >----------------------------------------------------------------<
// >                            FUNCTIONS                           <
// >----------------------------------------------------------------<

const initHtml = (pageTitle, favicon) => {
  const head$ = document.querySelector('head');
  head$.innerHTML += `
        <title>${pageTitle}</title>
        <link rel="icon" href="${favicon}">
    `;
};

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export default initHtml;
