//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
let repeatString = (str, num, empty) => {
  let repeat = ''
  while (num > 0) {
    repeat += str + empty
    num--
  }
  return repeat.slice(0, repeat.length - 1)
}
console.log(repeatString('yo', 3, ' '))
console.log(repeatString('yo', 3, ','))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

let checkStart = (str, subStr) => {
  return str.toUpperCase().slice(0, subStr.length) === subStr.toUpperCase()
}
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

let truncateString = (str, num) => {
  return str.slice(0, num) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null

let getMinLengthWord = (str) => {
  let arr = str.split(' ')
  if (str === '') {
    return null
  }
  return arr.sort((a, b) => a.length - b.length)[0]
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

let setUpperCase = (str) => {
  let newArr = []
  let arr = str.split(' ')
  for (let elem of arr) {
    newArr.push(elem[0].toUpperCase() + elem.slice(1).toLowerCase())
  }
  return newArr.join(' ')
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра. 
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false

let isIncludes = (str, subStr) => {
  let result;
  let arr1 = subStr.toLowerCase().split('')
  for (let elem of arr1) {
    result = str.includes(elem)
  }
  return result
}

console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))

