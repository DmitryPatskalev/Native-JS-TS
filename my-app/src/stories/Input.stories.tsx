import React, {ChangeEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";


export default {
	 title: 'Input',

}
export const UncontrolledInput = () => <input/>
export const TrackValueInput = () => {
	 const [value, setValue] = useState('')
	 return <div>
			<input onChange={(event) => {
				 const actionValue = event.currentTarget.value
				 setValue(actionValue)
			}}/> - {value}
	 </div>
}

export const GetValueClickButton = () => {
	 const [value, setValue] = useState('')
	 const [result, setResult] = useState('')
	 return <>
			<input value={value} onChange={event => setValue(event.currentTarget.value)}/>
			<button onClick={() => setResult(value)}
			>save
			</button>
			actual value- {result}
	 </>
}

export const ControlledInput = () => {
	 const [parentValue, setParentValue] = useState('')
	 const onChange = (event: ChangeEvent<HTMLInputElement>) => {
			setParentValue(event.currentTarget.value)
	 }

	 return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
	 const [parentValue, setParentValue] = useState(true)
	 const onChange = (event: ChangeEvent<HTMLInputElement>) => {
			setParentValue(event.currentTarget.checked)
	 }

	 return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}


export const ControlledSelect = () => {
	 const [parentValue, setParentValue] = useState<string | undefined>('3')
	 const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
			setParentValue(event.currentTarget.value)
	 }

	 return <select value={parentValue} onChange={onChange}>
			<option value="none">none</option>
			<option value="1">Minsk</option>
			<option value="2">Kiev</option>
			<option value="3">Lviv</option>
	 </select>
}

export const ControlledWithFixedValue = () => <input value={'Dmitry'}/>