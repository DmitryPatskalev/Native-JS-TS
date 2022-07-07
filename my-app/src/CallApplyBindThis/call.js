const elem = document.getElementById('elem')


function func(name, surname) {
  console.log(`${this.value} ${name} ${surname}`)
}

let newFunc = func.bind(elem)

newFunc('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
newFunc('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'

func.apply(elem, ['Dima', 'Patskalev'])

