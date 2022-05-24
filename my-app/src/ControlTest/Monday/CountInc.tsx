import React from "react";
import UniversButton from "./UniversButton";

export type CounterType = {
	 num: number
	 counter: (num: number) => void
}

const CountInc = (props: CounterType) => {
	 const colorCount = {
			color: props.num === 10 ? 'red' : ''
	 }
	 return <div>
			<div className='subBody'>
				 <div className='count' style={colorCount}>{props.num}</div>
			</div>
			<UniversButton num={props.num} counter={props.counter}/>
	 </div>
}
export default CountInc