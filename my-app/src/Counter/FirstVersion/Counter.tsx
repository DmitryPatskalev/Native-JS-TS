import React from "react";
import './style.css'
import {UniversButton} from "./UniversButton";

export type CounterType = {
	 num: number
	 count: (num: number) => void
	 startNum: number
	 maxNum: number
}

const Counter = (props: CounterType) => {

	 let colorNum = {
			color: props.num === props.maxNum || props.num === props.startNum ? 'red' : ''
	 }

	 return <div className='body'>
			<div className='subBody'>
				 <div className='count' style={colorNum}>
						{props.startNum >= 0 && props.maxNum > props.startNum ? props.num :
							<span className='errorValue'>Incorrect Value</span>}
				 </div>
			</div>
			<div className='button-border'>
				 <UniversButton num={props.num} count={props.count} startNum={props.startNum} maxNum={props.maxNum}/>
			</div>
	 </div>

}
export default Counter
