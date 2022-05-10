const APP = {
  language: 'EN',
  shift: false,
  capsLock: false,
  carretPosition: 0,
  control: false,
  win: false,
  alt: false,
  isLight: false,
};

const loadSettings = () => {
  if (localStorage.getItem('settings')) { // load settings if exists
    const receivedSettings = JSON.parse(localStorage.getItem('settings')); // read
    APP.language = receivedSettings.language;
  }
};

const saveSettings = () => {
  const savingSettings = {
    language: APP.language,
  };
  localStorage.setItem('settings', JSON.stringify(savingSettings)); // write
};

// >----------------------------------------------------------------<
// >                          EXPORT                                <
// >----------------------------------------------------------------<
export {
  APP,
  loadSettings,
  saveSettings,
};
