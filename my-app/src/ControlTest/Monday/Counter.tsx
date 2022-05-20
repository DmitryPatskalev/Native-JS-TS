import React, {useState} from "react";
import './style.css'
import CountInc, {CounterType} from "./CountInc";


const Counter = () => {
	 const [value, setValue] = useState(0)
	 
	 return <div className='body'>
			<CountInc num={value} counter={setValue}/>
	 </div>

}
export default Counter