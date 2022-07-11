import React, {useState} from 'react';

const FormTrain = () => {
	 const [value1, setValue1] = useState()
	 const [value2, setValue2] = useState()
	 const [result, setResult] = useState(0)

	 const onChangeValue1 = (e: any) => {
			setValue1(e.target.value)
	 }
	 const onChangeValue2 = (e: any) => {
			setValue2(e.target.value)
	 }
	 const onChangeResult = () => {
			setResult(Number(value1) + Number(value2))
	 }
	 return (
		 <div>
				<input onChange={onChangeValue1} type="text"/>
				<input onChange={onChangeValue2} type="text"/>
				<button onClick={onChangeResult}>Click</button>
				<h3>{result}</h3>
		 </div>
	 );
};

export default FormTrain;