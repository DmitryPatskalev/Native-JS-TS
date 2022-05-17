import React, {useState} from "react";
import Switch from "./Switch";

const OnOff = () => {
	 const [turnOn, setTurnOn] = useState(false)

	 return <div>
			<Switch on={turnOn} onClick={setTurnOn}/>

	 </div>
}
export default OnOff