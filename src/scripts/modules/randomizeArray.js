// import {name} from './name.js';

// >----------------------------------------------------------------<
// >                           FUNCTIONS                            <
// >----------------------------------------------------------------<

function randomizeArray(array) {
  let randomArray = [];
  const tempArray = [...array];
  while (tempArray.length > 0) {
    const random = Math.trunc((Math.random() * tempArray.length));
    randomArray = [...randomArray, ...tempArray.splice(random, 1)];
  }
  return randomArray;
}

// >----------------------------------------------------------------<
// >                             EXPORT                             <
// >----------------------------------------------------------------<
export {
  randomizeArray,
};
