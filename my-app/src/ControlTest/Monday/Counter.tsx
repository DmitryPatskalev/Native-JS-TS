import React, {useEffect, useState} from "react";
import './style.css'
import {ButtonsCounter} from "./ButtonsCounter";

export type CounterType = {
	 num: number
	 count: (num: number) => void
	 startNum: number
	 maxNum: number
}

const Counter = (props: CounterType) => {
	 
	 return <div className='body'>
			<ButtonsCounter num={props.num} count={props.count} startNum={props.startNum} maxNum={props.maxNum}/>
	 </div>

}
export default Counter
