const createPerson = (name, age) => {
  return { name, age }
}

const getName = (object) => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => object[property] ? true : false;

const isOver65 = (person) => person.age > 65 ? true : false;

const getAges = (people) => people.map(person => person.age);

const findByName = (name, people) => {
  const found = people.filter(person => person.name == name);
  return found[0]
}

const findHondas = (cars) =>
  cars.filter(honda => honda.manufacturer == 'Honda');

const averageAge = (people) => {
  const mappedAges = people.map(person => person.age);

  const totalAges = mappedAges.reduce((acc, next) => (acc += next), 0);
  return totalAges / mappedAges.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
    introduce: function (name) {
      return `Hi ${name}, my name is ${person.name} and I am ${person.age}!`
    }
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
