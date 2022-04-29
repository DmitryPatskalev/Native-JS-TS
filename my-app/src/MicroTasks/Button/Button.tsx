import {Buffer} from "buffer";
import React from "react";
import './style.css'
import {strict} from "assert";


const ButtonValue = (subscriber: string) => {
		console.log(subscriber)
}

const Button = () => {
		return <div className='body'>
				<ButtonClick name='BUTTON 1' callback={() => ButtonValue('Dima')}/>
				<ButtonClick name='BUTTON 2' callback={() => ButtonValue('Danik')}/>

		</div>
}
export default Button


type ButtonClickType = {
		name: string
		callback: () => void
}


const ButtonClick: React.FC<ButtonClickType> = (props) => {

		const ClickHundler = () => {
				props.callback()
		}

		return <div className='button'>
				<button onClick={ClickHundler}>{props.name}</button>
		</div>
}

