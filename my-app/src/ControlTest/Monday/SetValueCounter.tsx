import React, {useEffect} from "react";
import './style.css'
import {Inputs} from "./Inputs";


export type SetValueCounter = {
	 maxNum: number
	 setMaxNum: (maxNum: number) => void
	 startNum: number
	 setStartNum: (startNum: number) => void
}

export const SetValueCounter = (props: SetValueCounter) => {

	 let setLocalStorage = () => {
			localStorage.setItem('maxValue', JSON.stringify(props.maxNum))
			localStorage.setItem('startValue', JSON.stringify(props.startNum))
	 }

	 let setDisable = props.maxNum < 1 || props.maxNum <= props.startNum || props.startNum < 0

	 return <div className='body'>
			<div className='subBody'>
				 <Inputs
					 maxNum={props.maxNum}
					 setMaxNum={props.setMaxNum}
					 startNum={props.startNum}
					 setStartNum={props.setStartNum}
				 />
			</div>
			<div className='button-border'>
				 <div className='set'>
						<button disabled={setDisable} className='buttonSet' onClick={setLocalStorage}>SET</button>
				 </div>
			</div>

			{/*<ButtonSet num={props.num} count={props.count} startNum={props.startNum} maxNum={props.maxNum}/>*/}

	 </div>
}
