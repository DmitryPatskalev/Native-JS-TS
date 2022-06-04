import React, {useState} from "react";
import {ShowHideList} from "./ShowHideList";

export const Menu = () => {
	 const [visible, setVisible] = useState(false)

	 return <div>
			<ShowHideList value={visible} setValue={setVisible}/>
	 </div>
}