import React, {useState} from "react";
import Switch from "./Switch";
import {action} from "@storybook/addon-actions";


export default {
	 title: 'OnOff',
	 component: Switch,
	 argTypes: {
			color: {
				 control: 'color'
			}
	 }
}
const onClicked = action('clicked')

export const OnMode = () => <Switch on={true} onClick={onClicked}/>
export const OffMode = () => <Switch on={false} onClick={onClicked}/>

export const OnOff = () => {
	 const [turnOn, setTurnOn] = useState(false)

	 return <div>
			<Switch on={turnOn} onClick={setTurnOn}/>

	 </div>
}
