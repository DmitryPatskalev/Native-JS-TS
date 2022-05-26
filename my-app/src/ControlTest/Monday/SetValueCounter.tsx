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

	 useEffect(() => {
			let valueStringMax = localStorage.getItem('valueMax')
			let valueStringStart = localStorage.getItem('valueStart')
			if (valueStringMax) {
				 let maxValue = JSON.parse(valueStringMax)
				 props.setMaxNum(maxValue)
			}
			if (valueStringStart) {
				 let strValue = JSON.parse(valueStringStart)
				 props.setStartNum(strValue)
			}
	 }, [])

	 // useEffect(() => {
	 // 	localStorage.setItem('valueMax', JSON.stringify(props.maxNum))
	 // 	localStorage.setItem('valueStart', JSON.stringify(props.startNum))
	 // })
	 let setLocalStorage = () => {
			localStorage.setItem('valueMax', JSON.stringify(props.maxNum))
			localStorage.setItem('valueStart', JSON.stringify(props.startNum))
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
