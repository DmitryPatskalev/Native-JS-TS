import React from "react";

type PeopleType = {
	 name: string
	 age: number
}

const Map = () => {

	 const people: Array<PeopleType> = [
			{name: 'Dmitry Patskalev', age: 37},
			{name: 'Serg Shevcov', age: 36},
			{name: 'Tania Homich', age: 31},
	 ]

	 let transform = (person: PeopleType) => ({
			stack: ['css', 'js', 'react'],
			firstName: [person.name.split(' ')[0]],
			lastName: [person.name.split(' ')[1]]
	 })
	 const dev = people.map((n, index) => <li key={index}>{n.name}--{n.age}</li>)


	 return <div>
			{dev}
	 </div>
}
export default Map