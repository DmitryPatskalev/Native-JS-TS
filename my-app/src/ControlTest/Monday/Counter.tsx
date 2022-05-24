import React, {useEffect, useState} from "react";
import './style.css'
import CountInc from "./CountInc";


const Counter = () => {
	 const [value, setValue] = useState<number>(0)

	 useEffect(() => {
			let valueString = localStorage.getItem('valueID')
			if (valueString) {
				 let newValue = JSON.parse(valueString)
				 setValue(newValue)
			}
	 }, [])

	 useEffect(() => {
			localStorage.setItem('valueID', JSON.stringify(value))
	 }, [value])


	 return <div className='body'>
			<CountInc num={value} counter={setValue}/>
	 </div>

}
export default Counter;
