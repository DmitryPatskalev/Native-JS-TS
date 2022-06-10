import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
	 title: 'Select',
	 component: Select
}

export const BaseExample = () => {
	 const [value, setValue] = useState('1')
	 return <div>
			<Select
				onChange={setValue}
				value={value}
				items={[
					 {value: '1', title: 'Manchester United'},
					 {value: '2', title: 'Manchester City'},
					 {value: '3', title: 'Arsenal'},
					 {value: '4', title: 'Chelsea'},
					 {value: '5', title: 'Liverpool'}
				]}/>
	 </div>


}


