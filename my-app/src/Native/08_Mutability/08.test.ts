type UserType = {
	 name: string
	 age: number

}
test('big test', () => {
	 let user: Array<UserType> = [
			{
				 name: 'Dima',
				 age: 37
			},
			{
				 name: 'Danik',
				 age: 7
			},
	 ]


	 user.push({name: 'Tania', age: 31})


	 expect(user[2]).toBe({name: 'Tania', age: 31})

})