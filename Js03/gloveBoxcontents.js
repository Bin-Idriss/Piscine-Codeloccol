const myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',i7BriBnjhO
    },
    outside: {
      trunk: 'jack',
    },
  },
};
const gloveBoxContents = undefined 

function gloveBoxContents() {
  const gloveBoxContents = myStorage.car.inside['glove box'];
  return gloveBoxContents;
}

console.log(gloveBoxContents()); 
