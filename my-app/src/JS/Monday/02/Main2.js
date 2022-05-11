const student = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: 'Jonh',
    age: 19,
    isMarried: true,
    scores: 100
  }
]

const listOfStudent = (arr, func) => {
  const result = []
  for (let elem of arr) {
    result.push(func(elem))
  }
  return result
}
console.log(listOfStudent(student, s => s.age))
console.log(listOfStudent(student, s => s.scores))


const getFilterArray = (arr, func) => {
  const result = []
  for (let elem of arr) {
    if (func(elem) === false) {
      result.push(elem)
    }
  }
  return result
}
console.log(getFilterArray(student, s => s.isMarried))


const names = (arr) => {
  const result = []
  for (let elem of arr) {
    result.push({...elem, isStudent: true})
  }
  return result
}
console.log((names(student)))
