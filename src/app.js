const APP = {
  language: 'EN',
  shift: false,
  capsLock: false,
  carretPosition: 0,
  control: false,
  win: false,
  alt: false,
};

const loadSettings = () => {
  if (localStorage.getItem('settings')) { // load settings if exists
    const receivedSettings = JSON.parse(localStorage.getItem('settings')); // read
    // APP = { ...APP, ...receivedSettings };
    // console.log(this.language);
    APP.language = receivedSettings.language;
    // this.shift = receivedSettings.shift;
    // this.capsLock = receivedSettings.capsLock;
    // this.carretPosition = receivedSettings.carretPosition;
    // this.control = receivedSettings.control;
    // this.win = receivedSettings.win;
    // this.alt = receivedSettings.alt;
  }
};

const saveSettings = () => {
  const savingSettings = {
    language: APP.language,
    // shift: APP.shift,
    // capsLock: APP.capsLock,
    // carretPosition: APP.carretPosition,
    // control: APP.control,
    // win: APP.win,
    // alt: APP.alt,
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
