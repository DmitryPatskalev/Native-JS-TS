import React, {useState} from 'react';
import {string} from "prop-types";

const FormTrain = () => {
	 const [value1, setValue1] = useState()
	 const [value2, setValue2] = useState()
	 const [result, setResult] = useState(0)
	 const [sum, setSum] = useState('')

	 const onChangeValue1 = (e: any) => {
			setValue1(e.target.value)
	 }
	 const onChangeValue2 = (e: any) => {
			setValue2(e.target.value)
	 }
	 const onChangeResult = () => {
			setResult(Number(value1) + Number(value2))
	 }
	 const sumOfNum = (num: string) => {
			let sum: number = 0
			let str = String(num)
			let arr = str.split('')
			for (let elem of arr) {
				 sum += Number(elem)
			}
			return sum
	 }

	 return (
		 <div>
				<input onChange={onChangeValue1} type="text"/>
				<input onChange={onChangeValue2} type="text"/>
				<button onClick={onChangeResult}>Click +</button>
				<button onClick={() => setResult(Number(value1) * Number(value2))}>Click *</button>
				<h3>{result}</h3>
				<input type="text" onBlur={(e) => setSum(e.target.value)}/>
				<p>Sum of numbers from input: {sumOfNum(sum)}</p>
		 </div>
	 );
};

export default FormTrain;