import {addSkill, StudentType} from "./Function";


let student: StudentType

beforeEach(() => {
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
	 addSkill(student, 'TS')
	 expect(student.tech[3].id).toBe(4)
	 expect(student.tech[3].title).toBe('TS')

})