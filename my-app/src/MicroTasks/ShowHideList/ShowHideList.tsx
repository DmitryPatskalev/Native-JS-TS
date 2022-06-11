import React, {useState} from "react";
import {v1} from "uuid";


type ListPerson = {
	 value: boolean
	 setValue: (value: boolean) => void
}
type ListPersonType = {
	 id: string
	 name: string
	 age: number
}

let listPerson: Array<ListPersonType> = [
	 {id: v1(), name: 'Dima', age: 37},
	 {id: v1(), name: 'Tania', age: 31},
	 {id: v1(), name: 'Danik', age: 7},
]

export const ShowHideList = (props: ListPerson) => {
	 const [list, setList] = useState(listPerson)
	 let result;
	 if (props.value) {
			result = list.map((elem, index) => {
				 return <ul key={index}>
						<li>
							 name:{elem.name}---
							 age:{elem.age}
						</li>
				 </ul>
			})
	 }
	 const onClickShow = () => props.setValue(!props.value)

	 return <div>
			<button onClick={onClickShow}>{!props.value ? 'Show persons' : 'Hide persons'}</button>
			{result}
	 </div>
}