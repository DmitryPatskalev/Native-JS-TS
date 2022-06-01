import React from "react";
import {CounterType} from "./Counter";

export const ButtonSet = (props: CounterType) => {

	 let setLocalStorage = () => {
			localStorage.setItem('valueMax', JSON.stringify(props.maxNum))
			localStorage.setItem('valueStart', JSON.stringify(props.startNum))
	 }

	 let setDisable = props.maxNum < 1 || props.maxNum <= props.startNum || props.startNum < 0
	 return <div className='button-border'>
			<div className='set'>
				 <button disabled={setDisable} className='buttonSet' onClick={setLocalStorage}>SET</button>
			</div>
	 </div>
}