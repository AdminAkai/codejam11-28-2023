const santaGenerator = (people) => {
  // map array of people to an object/hash map starting with empty object
  const peeps = createInitialPeopleHash(people);
  // loop through array and insert into object so we have names as keys
  // for - in peeps object
  for (const name in peeps) {
    if (!peeps[name].santa) peeps[name].santa = assignSanta(name, people);
  }
  // math.floor(math.rand(0, people.length - 1)) and use this number to index the array and assign to object key
  // check that current object name does not equal current array index
  // if true set key value
  // if false randomize again
  // return new hashmap of secret santa
};

const assignSanta = (name, people) => {
  const randomNumber = getRandomNumber(people.length);
  if (name === people[randomNumber]) {
    return assignSanta(name, people);
  }
  return people[randomNumber];
};

const getRandomNumber = (min, max) => {
  return math.floor(math.rand(0, people.length - 1));
};

const createInitialPeopleHash = (people = []) => {
  let peopleHash = {};
  people.forEach((person) => {
    peopleHash[person] = { santa: null };
  });
};
