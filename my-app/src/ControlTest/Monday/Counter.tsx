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

	 useEffect(() => {
			let valueString = localStorage.getItem('valueCount')
			if (valueString) {
				 let newValue = JSON.parse(valueString)
				 props.count(newValue)
			}
	 }, [])

	 useEffect(() => {
			localStorage.setItem('valueCount', JSON.stringify(props.num))
	 })

	 return <div className='body'>
			<ButtonsCounter num={props.num} count={props.count} startNum={props.startNum} maxNum={props.maxNum}/>
	 </div>

}
export default Counter
