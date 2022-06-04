import React from "react";

type ListPerson = {
	 value: boolean
	 setValue: (value: boolean) => void
}

let listPerson = [
	 {name: 'Dima', age: 37},
	 {name: 'Tania', age: 31},
	 {name: 'Danik', age: 7},
]

export const ShowHideList = (props: ListPerson) => {
	 let result;
	 if (props.value) {
			result = listPerson.map((elem, index) => {
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