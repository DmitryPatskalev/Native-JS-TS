// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
	 let sum = 0
	 for (let elem of nums) {
			sum += Number(elem)
	 }
	 return sum
	 // console.log(nums)
	 //...здесь пишем код.
	 // В return стоит "заглушка", чтоб typescript не ругался

}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
	 if (a === b && a === c && b === c) {
			return '10'
	 }
	 if (a !== b && a !== c && b === c) {
			return '01'
	 }
	 if (a === b && a !== c && b !== c) {
			return '01'
	 }
	 if (a + b < c || a + c < b || c + b < a) {
			return '00'
	 } else {
			return '11'
	 }
}


//...здесь пишем код.
// В return стоит "заглушка", чтоб typescript не ругался


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
	 let sum = 0
	 let arr = String(number)
	 for (let elem of arr) {
			sum += Number(elem)
	 }
	 //...здесь пишем код.
	 // В return стоит "заглушка", чтоб typescript не ругался
	 return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
	 let result = arr.filter((item, index) => (item + index + 1) % 2 === 0);
	 let result1 = arr.filter((item, index) => (item + index) % 2 === 0);

	 //...здесь пишем код.
	 // В return стоит "заглушка", чтоб typescript не ругался
	 return result > result1
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
	 let arr = []
	 for (let elem of array) {
			if (elem > 0 && (elem % 2 === 0 || elem % 2 === 1)) {
				 arr.push(elem)
			}
	 }
	 //...здесь пишем код.
	 // В return стоит "заглушка", чтоб typescript не ругался
	 return arr.map(elem => elem ** 2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
	 let arr = []
	 let sum = 0
	 for (let i = 1; i <= N; i++) {
			arr.push(i)
	 }
	 for (let elem of arr) {
			sum += Number(elem)
	 }

	 //...здесь пишем код.
	 // В return стоит "заглушка", чтоб typescript не ругался
	 return sum
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
	 const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
	 let cash = []
	 for (let i = 0; i < banknotes.length; i++) {
			for (let j = 0; amountOfMoney >= banknotes[i]; j++) {
				 cash.push(banknotes[i])
				 amountOfMoney = amountOfMoney - banknotes[i]

			}
	 }
	 //...здесь пишем код.
	 // В return стоит "заглушка", чтоб typescript не ругался
	 return cash
}