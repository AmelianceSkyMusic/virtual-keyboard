// import {name} from './name.js';

// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

function removeKeysFromArray(array, keysToRemove) {
  return array.filter((item) => !keysToRemove.includes(item));
}

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export {
  removeKeysFromArray,
};
