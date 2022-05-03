import React, {ChangeEvent} from "react";


type InputType = {
	 setTitle: (title: string) => void
	 title: string
}
export const Input = (props: InputType) => {
	 const onChangeHundler = (event: ChangeEvent<HTMLInputElement>) => {
			props.setTitle(event.currentTarget.value)
	 }

	 return <span>
		<input value={props.title} onChange={onChangeHundler}/>
	 </span>
}
