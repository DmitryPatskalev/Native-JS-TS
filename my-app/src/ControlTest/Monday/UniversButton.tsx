import React from "react";
import {CounterType} from "./CountInc";


const UniversButton = (props: CounterType) => {
	 const buttonInc = () => {
			props.counter(props.num + 1)
	 }

	 const buttonReset = () => {
			props.counter(0)
	 }
	 const incDisabled = props.num === 10
	 const resetDisabled = props.num === 0

	 return <div className='buttons'>
			<button disabled={incDisabled} className='inc' onClick={buttonInc}>inc</button>
			<button disabled={resetDisabled} className='reset' onClick={buttonReset}>reset</button>
	 </div>
}
export default UniversButton