import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {v1} from "uuid";

type ReactivsType = {
	 id: string
	 name: string
}

const Reactivs = () => {
	 const [notes, setNotes] = useState<Array<ReactivsType>>([
			{id: v1(), name: 'Dima'},
			{id: v1(), name: 'Tania'},
			{id: v1(), name: 'Danik'},
	 ])
	 const [newTask, setNewTask] = useState('')

	 const result = notes.map((elem) => {
			return <p key={elem.id}>{elem.name}
				 <button onClick={() => buttonRemoveTitle(elem.id)}>x</button>
			</p>
	 })
	 const buttonRemoveTitle = (id: string) => {
			setNotes(notes.filter(elem => elem.id !== id))
	 }
	 const onChangeHundler = (e: ChangeEvent<HTMLInputElement>) => {
			setNewTask(e.currentTarget.value)
	 }
	 const onKeyHundler = (e: KeyboardEvent<HTMLInputElement>) => {
			if (e.charCode === 13) {
				 addNewTitle(newTask)
			}
	 }

	 const addNewTitle = (title: string) => {
			let addTask = {
				 id: v1(),
				 name: title
			}
			setNotes([addTask, ...notes])
	 }


	 return (
		 <div>
				{result}
				<input onKeyPress={onKeyHundler} onChange={onChangeHundler}/>
				<button onClick={() => addNewTitle(newTask)}>Add new Title</button>
		 </div>
	 );
};

export default Reactivs;