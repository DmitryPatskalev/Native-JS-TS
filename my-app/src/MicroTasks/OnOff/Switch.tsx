import React from "react";

type SwitchType = {
	 on: boolean
	 onClick: (on: boolean) => void
}

const Switch = (props: SwitchType) => {
	 const buttonOn = {
			width: '50px',
			height: '50px',
			margin: '10px',
			backgroundColor: props.on ? 'green' : 'white'
	 }
	 const buttonOFF = {
			width: '50px',
			height: '50px',
			margin: '10px',
			backgroundColor: props.on ? 'white' : 'red'
	 }
	 const indicator = {
			width: '40px',
			height: '30px',
			margin: '10px',
			backgroundColor: props.on ? 'green' : 'red'
	 }
	 const clickButtonOn = () => props.onClick(true)
	 const clickButtonOF = () => props.onClick(false)


	 return <div>
			<button style={buttonOn} onClick={clickButtonOn}>ON</button>
			<button style={buttonOFF} onClick={clickButtonOF}>OFF</button>
			<button style={indicator}>{props.on ? 'ON' : 'OFF'}</button>
	 </div>
}

export default Switch