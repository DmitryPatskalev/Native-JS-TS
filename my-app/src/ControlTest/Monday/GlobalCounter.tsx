import React, {useEffect, useState} from "react";
import Counter from "./Counter";
import {SetValueCounter} from "./SetValueCounter";
import './style.css'

const GlobalCounter = () => {
	 const [value, setValue] = useState(0)
	 const [starValue, setStarValue] = useState<number>(0)
	 const [maxValue, setMaxValue] = useState<number>(1)

	 useEffect(() => {
			let valueString = localStorage.getItem('value')
			let valueStringMax = localStorage.getItem('maxValue')
			let valueStringStart = localStorage.getItem('starValue')
			if (valueString) {
				 let newValue = JSON.parse(valueString)
				 setValue(newValue)
			}
			if (valueStringMax) {
				 let maxValue = JSON.parse(valueStringMax)
				 setMaxValue(maxValue)
			}
			if (valueStringStart) {
				 let strValue = JSON.parse(valueStringStart)
				 setStarValue(strValue)
			}
	 }, [])

	 useEffect(() => {
			localStorage.setItem('value', JSON.stringify(value))
	 })

	 return <div className='container'>
			<div className='setValueCounter'>
				 <SetValueCounter
					 startNum={starValue}
					 setStartNum={setStarValue}
					 maxNum={maxValue}
					 setMaxNum={setMaxValue}
				 />
			</div>
			<div className='counter'>
				 <Counter
					 num={value}
					 count={setValue}
					 startNum={starValue}
					 maxNum={maxValue}
				 />
			</div>
	 </div>
}
export default GlobalCounter