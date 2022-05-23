const todoListId1 = '56-idjejf'
const todoListId2 = 'geg-34rf'

const todoLists = [
  {
    id: todoListId1,
    title: 'What to Learn',
    filter: 'All',
  },
  {
    id: todoListId2,
    title: 'What to buy',
    filter: 'Active',
  },
]

const tasks = {
  [todoListId1]: [
    {id: 1, name: 'CSS', isDone: false},
    {id: 2, name: 'HTML', isDone: true},
    {id: 3, name: 'JS', isDone: true},
    {id: 4, name: 'REACT', isDone: false},
  ],
  [todoListId2]: [
    {id: 1, name: 'Water', isDone: false},
    {id: 2, name: 'Vodka', isDone: true},
    {id: 3, name: 'Bear', isDone: false},
  ]
}

console.log(tasks[todoListId1])
console.log(tasks[todoListId2][0].name)

let arr = [1, 2, 3, 4, 5]
console.log(arr.reduce((a, b) => a > b ? a : b))

let students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  }, {
    name: "John",
    age: 23,
    isMarried: false,
    scores: 100
  }
];

console.log(students.reduce((a, b) => {
  a.push({...b, scores: b.scores + 10})
  return a
}, []))

