import React, {useState} from 'react';
import FormTrain from "./Form";
import CheckBox from "./CheckBox";
import Select from "./Select";
import Radio from "./Radio";


const State = () => {
	 const [name, setName] = useState('prod')
	 const [inCart, setInCart] = useState(false)

	 const [name1, setName1] = useState('Dima')
	 const [name2, setName2] = useState('Patskalev')
	 const [buttonName, buttonSetName] = useState('Danik')
	 const [button2Name, setButton2Name] = useState('Tania')
	 const [disabled, setDisabled] = useState(false)
	 const [buttonBan, setButton] = useState(false)
	 const [age, setAge] = useState(0)

	 const [input, setInput] = useState('')
	 const [input2, setInput2] = useState('')


	 const onClickHundler = () => {
			setInCart(!inCart)
	 }

	 const changeHundler = () => {
			setName('cost')
	 }
	 const onClickName = () => {
			setName1(buttonName)
	 }
	 const onClick2Name = () => {
			setName2(button2Name)
	 }
	 const ban = () => {
			setDisabled(!disabled)
	 }
	 const bunButton = () => {
			setButton(!buttonBan)
	 }
	 const changeHundlerInput = (e: any) => {
			setInput(e.target.value)
	 }
	 const changeHundlerInput2 = (e: any) => {
			setInput2(e.target.value)
	 }
	 const data = new Date()
	 const degree = (Number(input2) - 32) * 5 / 9


	 return (
		 <div>
				<button onClick={onClickHundler}>Click</button>
				<span>{inCart ? 'in cart' : 'not in cart'}</span>
				<p>{name}</p>
				<button onClick={changeHundler}>change state</button>
				<hr/>
				<div>{name1}</div>
				<div>{name2}</div>
				<button onClick={onClickName}>Change name</button>
				<button onClick={onClick2Name}>Change 2 name</button>
				<hr/>
				<button disabled={buttonBan} onClick={ban}>Ban</button>
				<span>{!disabled ? 'User is baned' : 'User is not baned'}</span>
				<hr/>
				<button onClick={bunButton}>Ban user</button>
				<hr/>
				<button disabled={age === 10} onClick={() => setAge(age + 1)}>Age +</button>
				<span>{age}</span>
				<button disabled={age === 0} onClick={() => setAge(age - 1)}>Age -</button>
				<hr/>
				<input onChange={changeHundlerInput} type="text"/>
				<input onChange={changeHundlerInput2} type="text"/>
				<div>
					 <p>{input}</p>
					 <p>Date, when you were born:{data.getFullYear() - Number(input2)}</p>
					 <p>Input1 + Input2 = {Number(input) + Number(input2)}</p>
					 <p>C/F: {degree}</p>
					 <p>(Input1 + Input2)/2 = {(Number(input) + Number(input2)) / 2}</p>
				</div>
				<hr/>
				<FormTrain/>
				<hr/>
				<CheckBox/>
				<hr/>
				<Select/>
				<hr/>
				<Radio/>

		 </div>
	 );
};

export default State;