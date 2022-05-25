import React, {useEffect, useState} from "react";
import './style.css'
import {ButtonsCounter} from "./ButtonsCounter";


const Counter = () => {
	 const [value, setValue] = useState(0)

	 useEffect(() => {
			let valueString = localStorage.getItem('valueCount')
			if (valueString) {
				 let newValue = JSON.parse(valueString)
				 setValue(newValue)
			}
	 }, [])

	 useEffect(() => {
			localStorage.setItem('valueCount', JSON.stringify(value))
	 })


	 return <div className='body'>
			<ButtonsCounter num={value} counter={setValue}/>

	 </div>

}
export default Counter
