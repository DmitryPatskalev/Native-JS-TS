import React, {useState} from 'react';
import {v1} from "uuid";
import {spawn} from "child_process";

const initNotes = [
	 {
			id: v1(),
			name: 'name1',
			desc: 'long description 1',
			show: false,
	 },
	 {
			id: v1(),
			name: 'name2',
			desc: 'long description 2',
			show: false,
	 },
	 {
			id: v1(),
			name: 'name3',
			desc: 'long description 3',
			show: false,
	 },
];
const Rendering = () => {
	 const [visible, setVisible] = useState(false)
	 const [notes, setNotes] = useState(initNotes)

	 const [value, setValue] = useState('text');
	 const [isEdit, setIsEdit] = useState(false);

	 let isElem;
	 if (!isEdit) {
			isElem = <span onDoubleClick={() => setIsEdit(true)}>{value}</span>
	 } else {
			isElem = <input
				value={value}
				onChange={e => setValue(e.target.value)}
				onBlur={() => setIsEdit(false)}
			/>
	 }

	 const showDesc = (id: any) => {
			return setNotes(notes.map(elem => elem.id === id ? {...elem, show: !elem.show} : elem))
	 }
	 const result = notes.map(elem => {
			let desc;
			if (elem.show) {
				 desc = <i>{elem.name} {elem.desc}</i>
			}
			return <p key={elem.id}>
				 <button onClick={() => showDesc(elem.id)}>show description</button>
				 {desc}
			</p>
	 })
	 
	 let elem;
	 if (visible) {
			elem = <p>Showed</p>
	 } else {
			elem = <p>Hided</p>
	 }
	 return (
		 <div>
				<button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
				{elem}
				<hr/>
				{result}
				<hr/>
				{isElem}
		 </div>
	 );
};

export default Rendering;