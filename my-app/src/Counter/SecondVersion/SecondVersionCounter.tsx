import React, {useEffect, useState} from "react";
import Counter from "./Counter";
import {SetValueCounter} from "./SetValueCounter";
import './style.css'

const SecondVersionCounter = () => {
	 let [isSettingsOpen, setIsSettingsOpen] = useState(true)

	 const [value, setValue] = useState<number>(0)
	 const [starValue, setStarValue] = useState<number>(0)
	 const [maxValue, setMaxValue] = useState<number>(1)

	 useEffect(() => {
			let valueString = localStorage.getItem('count')
			let valueStringMax = localStorage.getItem('max')
			let valueStringStart = localStorage.getItem('start')
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
			localStorage.setItem('count', JSON.stringify(value))
			localStorage.setItem('max', JSON.stringify(maxValue))
			localStorage.setItem('start', JSON.stringify(starValue))
	 })

	 return <div className='container'>
			{isSettingsOpen ? <div className='setValueCounter'>
				 <SetValueCounter
					 count={setValue}
					 startNum={starValue}
					 setStartNum={setStarValue}
					 maxNum={maxValue}
					 setMaxNum={setMaxValue}
					 setIsSettingsOpen={setIsSettingsOpen}
				 />
			</div> : null}
			<div className='counter'>
				 {!isSettingsOpen ? <Counter
					 num={value}
					 count={setValue}
					 startNum={starValue}
					 maxNum={maxValue}
					 setIsSettingsOpen={setIsSettingsOpen}
				 /> : null}
			</div>
	 </div>
}
export default SecondVersionCounter