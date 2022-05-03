import React, {useState} from "react";

import {Input} from "./Input";
import {Button} from "./Button";


const messages: Array<any> = []

const InputMessage = () => {
	 let [title, setTitle] = useState('')
	 const [message, getMessage] = useState(messages)
	 let addMessage = (title: string) => {
			getMessage([{message: title}, ...message])

	 }
	 const result = message.map((elem, index) => {
			return <div key={index}>
				 {elem.message}
			</div>
	 })
	 const callBackButton = () => {
			addMessage(title)
			setTitle('')
	 }


	 return <div>
			
			<Input setTitle={setTitle} title={title}/>
			<Button name='+' callback={callBackButton}/>
			{result}
	 </div>
}
export default InputMessage;