const students = [
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
    scores: 90,
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
    scores: 100
  },
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105
  },
];

const user = {
  name: "Bob",
  age: 23,
  friends: ["Alex", "Nick", "John"]
}
console.log(students)

//1. Создайте поверхностную копию объекта user
let copyUser;

//Проверка:
console.log(copyUser = {...user}) // false т.к. ссылка на разный объект  - что должно быть в консоли?
console.log(copyUser.friends = {...user.friends})//- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser;

//Проверка:
console.log(deepCopyUser = {...user})// - что должно быть в консоли?
console.log(deepCopyUser.friends = {...user.friends})// - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents;

//Проверка:
console.log(copyStudents = [...students])// - что должно быть в консоли?


//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents;

//Проверка:
console.log(deepCopyStudents = [...students.map(elem => ({...elem}))])// - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName;
sortedByName = deepCopyStudents.sort((a, b) => b.name > a.name ? -1 : 1)
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores;
sortedByScores = deepCopyStudents.sort((a, b) => a.scores > b.scores ? -1 : 1)
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents;
bestStudents = deepCopyStudents.filter(elem => elem.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents;

topStudents = sortedByScores.splice(0, 3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents;
newDeepCopyStudents = topStudents.concat(deepCopyStudents)
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents;
notMarriedStudents = students.filter(elem => !elem.isMarried)
console.log(notMarriedStudents)
console.log(newDeepCopyStudents)
//8. Сформируйте массив имён студентов (map)
let studentsNames;
studentsNames = newDeepCopyStudents.map(elem => elem.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace;
namesWithSpace = studentsNames.join(' ')
console.log(namesWithSpace)
let namesWithComma;
namesWithComma = studentsNames.join(',')
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents;
trueStudents = newDeepCopyStudents.map(elem => ({...elem, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick;
studentsWithMarriedNick = newDeepCopyStudents.map(elem => elem.name === 'Nick' ? {...elem, isMarried: true} : elem)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann;
ann = newDeepCopyStudents.find(elem => elem.name === "Ann")
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent;
bestStudent = newDeepCopyStudents.reduce((a, b) => a.scores > b.scores ? a : b)
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!
let scoresSum;
scoresSum = newDeepCopyStudents.reduce((a, b) => a + b.scores, 0)

console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {

  return students.map(elem => ({...elem, friends: students.map(elem => elem.name).filter(elem => elem !== elem.name)}))
  //..............................
}
console.log(addFriends(students));









