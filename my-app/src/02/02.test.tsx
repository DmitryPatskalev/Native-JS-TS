import {StudentType} from "./02";

let student: StudentType

beforeEach(()=>{
		student = {
				name: 'Dima',
				age: 37,
				isActive: false,
				adress: {
						street: 'Lazo',
						city: 'Minsk',
						country: 'Belarus'
				},
				tech: [
						{id: 1, title: 'HTML'},
						{id: 2, title: 'JS'},
						{id: 3, title: 'REACT'},
				]
		}
})


test('should be', () => {
		expect(student.name).toBe('Dima')
		expect(student.age).toBe(37)
		expect(student.isActive).toBe(false)
		expect(student.adress.city).toBe('Minsk')
		expect(student.tech[2].title).toBe('REACT')

})