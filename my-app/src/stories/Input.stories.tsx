import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


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
export const ControlledWithFixedValue = () => <input value={'Dmitry'}/>