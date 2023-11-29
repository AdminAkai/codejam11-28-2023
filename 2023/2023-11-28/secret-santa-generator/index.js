const santaGenerator = (people) => {
  const peeps = {}
  const mathRand = Math.floor(Math.random(0, people.length - 1))
  // map array of people to an object/hash map starting with empty object
  people.forEach(person => peeps[person])
  // loop through array and insert into object so we have names as keys
    // for - in peeps object
  for (const person in peeps) {
    // random index
  if (person !== array[mathRand])
    peeps[person]
  }


  // math.floor(math.rand(0, people.length - 1)) and use this number to index the array and assign to object key
  // check that current object name does not equal current array index
  // if true set key value
  // if false randomize again
  // return new hashmap of secret santa
}