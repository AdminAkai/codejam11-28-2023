const santaGenerator = (people) => {
  const secretSantas = {}

  people.forEach(person => secretSantas[person])

  for (const person in secretSantas) {
    const mathRand = Math.floor(Math.random(0, people.length - 1))
    if (person !== array[mathRand]) {
      secretSantas[person]
    }
    people.splice(mathRand, 1)
  }

  return secretSantas
}