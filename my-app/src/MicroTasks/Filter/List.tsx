import {PeopleType} from './Filter'


type PersonListType = {
	 family: {
			id: number
			name: string
			age: number
			sex: string
			city: string
	 }[],
	 onClickHundler: (namePerson: PeopleType) => void
}


const PersonList = (props: PersonListType) => {
	 return <div>
			<ul>
				 {props.family.map((elem, index) => {
						return <li key={index}>
							 <span>{elem.id}--</span>
							 <span>{elem.name}--</span>
							 <span>{elem.age}--</span>
							 <span>{elem.sex}--</span>
							 <span>{elem.city}--</span>
						</li>
				 })}
			</ul>
			<button style={{backgroundColor: "lightblue"}} onClick={() => props.onClickHundler('ALL')}>Show everyBody</button>
			<button style={{backgroundColor: "lightgreen"}} onClick={() => props.onClickHundler('MALE')}>Show men</button>
			<button style={{backgroundColor: "lightpink"}} onClick={() => props.onClickHundler('FEMALE')}>Show women</button>
	 </div>
}
export default PersonList