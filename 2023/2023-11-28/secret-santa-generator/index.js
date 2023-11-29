const santaGenerator = (people) => {
  const secretSantas = {}

  people.forEach(person => secretSantas[person] = '')

  for (const person in secretSantas) {
    let mathRand = Math.round(Math.random() * (people.length - 1))
    
    if (person === people[mathRand]) {
      mathRand = Math.floor(Math.random() * (people.length - 1))
    }

    secretSantas[person] = people[mathRand]
    
    if (people.length !== 1) {
      people.splice(mathRand, 1)
    } else {
      secretSantas[person] = people[0]
    }
  }

  return secretSantas
}

console.log(santaGenerator(['test', 'test2', 'test3', 'test4', 'test5']))