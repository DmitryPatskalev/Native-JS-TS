const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 95
  },
  {
    name: "alex",
    age: 23,
    isMarried: true,
    scores: 89
  },
  {
    name: "Helge",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 121
  },
];
console.log(students.sort((a, b) => a.age - b.age))
console.log(students.sort((a, b) => a.age + b.age))

console.log(students.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))

let arr = [1, 9, 22, 64, 31, -4, 0, 94]
for (let j = 0; j < arr.length - 1; j++) {
  for (let i = 0; i < arr.length - 1 - j; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
    }
  }
}

console.log(arr)