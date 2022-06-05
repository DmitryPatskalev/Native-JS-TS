import React, {useState} from "react";
import {ShowHideList} from "./ShowHideList";
import {action} from "@storybook/addon-actions";

export default {
	 title: 'Menu',
	 component: ShowHideList,
	 argTypes: {
			color: {
				 control: 'color'
			}
	 }
}

const callBack = action('clicked')

export const ShowMenu = () => <ShowHideList value={true} setValue={callBack}/>
export const HideMenu = () => <ShowHideList value={false} setValue={callBack}/>

export const Menu = () => {
	 const [visible, setVisible] = useState(false)

	 return <div>
			<ShowHideList value={visible} setValue={setVisible}/>
	 </div>
}