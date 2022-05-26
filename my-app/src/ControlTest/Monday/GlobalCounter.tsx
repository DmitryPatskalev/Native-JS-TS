import React, {useState} from "react";
import Counter from "./Counter";
import {SetValueCounter} from "./SetValueCounter";
import './style.css'

const GlobalCounter = () => {
	 const [value, setValue] = useState(0)
	 const [starValue, setStarValue] = useState<number>(0)
	 const [maxValue, setMaxValue] = useState<number>(1)


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