import {useState} from "react";
import PersonList from "./List";

const ALL: string = 'ALL'
const MALE: string = 'MALE'
const FEMALE: string = 'FEMALE'

export type PeopleType = 'ALL' | 'MALE' | 'FEMALE'


const family = [
	 {id: 1, name: 'Dima', age: 37, sex: 'male', city: 'Minsk'},
	 {id: 2, name: 'Tanya', age: 31, sex: 'female', city: 'Minsk'},
	 {id: 3, name: 'Danik', age: 7, sex: 'male', city: 'Minsk'},
	 {id: 4, name: 'Igor', age: 35, sex: 'male', city: 'Lviv'},
	 {id: 5, name: 'Julia', age: 37, sex: 'female', city: 'Chicago'},
]

const PeopleList = () => {
	 const [person, setPerson] = useState(family)
	 const [filter, setFilter] = useState(ALL)
	 let currentPerson = person
	 if (filter === MALE) {
			currentPerson = person.filter(elem => elem.sex === 'male')
	 }
	 if (filter === FEMALE) {
			currentPerson = person.filter(elem => elem.sex === 'female')
	 }
	 const onClickHundler = (namePerson: string) => {
			setFilter(namePerson)
	 }


	 return <div>
			<PersonList family={currentPerson} onClickHundler={onClickHundler}/>
	 </div>
}
export default PeopleList;