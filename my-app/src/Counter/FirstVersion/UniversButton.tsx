import React from "react";
import './style.css'
import {CounterType} from "./Counter";
import {Button} from "@material-ui/core";

export const UniversButton = (props: CounterType) => {

	 const styleButton = {
			margin: '8px',
			width: '100px',
			height: '40px',
			fontSize: '20px',
			fontFamily: 'Neucha,cursive'
	 }

	 const incButton = () => props.count(props.num + 1)
	 const resetButton = () => props.count(props.startNum)

	 const incDisable = props.num === props.maxNum || props.num > props.maxNum || props.maxNum === props.startNum
		 || props.maxNum < 1 || props.startNum < 0 || props.startNum >= props.maxNum
	 const resetDisable = props.num === props.startNum || props.startNum < 0
		 || props.maxNum === props.startNum || props.startNum >= props.maxNum

	 return <div>
			<Button
				variant={'contained'}
				color='primary'
				style={styleButton}
				disabled={incDisable}
				onClick={incButton}>inc
			</Button>
			<Button
				variant={'contained'}
				color='secondary'
				style={styleButton}
				disabled={resetDisable}
				onClick={resetButton}>reset
			</Button>
	 </div>
}