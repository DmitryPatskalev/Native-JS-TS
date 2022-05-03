import React, {ChangeEvent, useState} from "react";

type FullInputType = {
	 addMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {
	 let [title, setTitle] = useState('')
	 const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			setTitle(event.currentTarget.value)
	 }
	 const onClickHundler = () => {
			props.addMessage(title)
			setTitle('')

	 }
	 return <div>
			<input value={title} onChange={onChangeHundler}/>
			<button onClick={onClickHundler}>+</button>
			
	 </div>
}
