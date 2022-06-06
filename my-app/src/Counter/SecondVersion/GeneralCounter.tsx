import React, {useEffect, useState} from "react";
import Counter from "./Counter";
import {SetValueCounter} from "./SetValueCounter";
import './style.css'
import {Route, Routes} from "react-router-dom";

const RouterCounter = () => {
	 const [value, setValue] = useState<number>(0)
	 const [starValue, setStarValue] = useState<number>(0)
	 const [maxValue, setMaxValue] = useState<number>(1)

	 useEffect(() => {
			let valueString = localStorage.getItem('value')
			let valueStringMax = localStorage.getItem('maxValue')
			let valueStringStart = localStorage.getItem('startValue')
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
			localStorage.setItem('maxValue', JSON.stringify(maxValue))
			localStorage.setItem('startValue', JSON.stringify(starValue))
	 })

	 return <div className='container'>
			<div className='setValueCounter'>
				 <Routes>
						<Route path='/inputValue'
									 element={<SetValueCounter
										 count={setValue}
										 startNum={starValue}
										 setStartNum={setStarValue}
										 maxNum={maxValue}
										 setMaxNum={setMaxValue}
									 />}
						/>
				 </Routes>
			</div>
			<div className='counter'>
				 <Routes>
						<Route path='/count' element={<Counter
							num={value}
							count={setValue}
							startNum={starValue}
							maxNum={maxValue}
						/>}/>
				 </Routes>

			</div>
	 </div>
}
export default RouterCounter