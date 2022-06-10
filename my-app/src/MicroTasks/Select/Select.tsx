import React, {useState} from "react";
import {FormControl, InputLabel, NativeSelect} from "@material-ui/core";


type ItemType = {
	 title: string
	 value: string
}
type SelectPropsType = {
	 value: any
	 onChange: (value: any) => void
	 items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
	 const [active, setActive] = useState(false)
	 const onShowClick = () => setActive(!active)

	 const selectedItem = props.items.find(elem => elem.value === props.value)
	 return <div>
			<FormControl>
				 <InputLabel variant="standard">Team</InputLabel>
				 <NativeSelect>
						<option value="MU">Manchester United</option>
						<option value="MC">Manchester City</option>
						<option value="ARS">Arsenal</option>
						<option value="CHL">Chelsea</option>
						<option value="LP">Liverpool</option>
				 </NativeSelect>
			</FormControl>
			<h3 onClick={onShowClick}>{selectedItem && selectedItem.title}</h3>

			{active && props.items.map(elem => <div key={props.value}
																							onClick={() => props.onChange(elem.value)}

			>{elem.title}</div>)}
	 </div>

}





