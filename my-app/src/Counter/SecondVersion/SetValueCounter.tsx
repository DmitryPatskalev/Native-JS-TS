import React, {ChangeEvent} from "react";
import './style.css'
import {NavLink} from "react-router-dom";

export type SetValueCounter = {
	 count: (num: number) => void
	 maxNum: number
	 setMaxNum: (maxNum: number) => void
	 startNum: number
	 setStartNum: (startNum: number) => void
}

export const SetValueCounter = (props: SetValueCounter) => {

	 const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
			props.setMaxNum(Number(event.currentTarget.value))
	 }
	 const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
			props.setStartNum(Number(event.currentTarget.value))
	 }
	 const styleStarValue = {
			backgroundColor: props.startNum < 0 || props.startNum >= props.maxNum ? 'red' : ''
	 }
	 const styleMaxValue = {
			backgroundColor: props.maxNum <= props.startNum || props.maxNum < 1 ? 'red' : ''
	 }
	 const setDisable = props.maxNum < 1 || props.maxNum <= props.startNum || props.startNum < 0
	 const onSetValueCounter = () => {
			props.count(props.startNum)
	 }


	 return <div className='body'>
			<div className='subBody'>
				 <div className='titleMax'>
						<span>max value:</span>
						<input
							style={styleMaxValue}
							value={props.maxNum}
							type='number'
							className='inputMax'
							onChange={onChangeMaxValue}
						/>
				 </div>
				 <div className='titleStar'>
						<span>start value:</span>
						<input
							style={styleStarValue}
							value={props.startNum}
							type='number'
							className='inputStar'
							onChange={onChangeStartValue}
						/>
				 </div>
			</div>
			<div className='button-border'>
				 <div className='set'>
						<NavLink to='/count'>
							 <button disabled={setDisable} className='buttonSet' onClick={onSetValueCounter}>SET</button>
						</NavLink>
				 </div>
			</div>
	 </div>
}
