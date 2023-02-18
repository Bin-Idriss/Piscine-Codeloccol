const myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};
const gloveBoxContents = undefined // A modifier

function gloveBoxContents() {
  const gloveBoxContents = myStorage.car.inside['glove box'];
  return gloveBoxContents;
}

console.log(gloveBoxContents()); // Affichera "maps"