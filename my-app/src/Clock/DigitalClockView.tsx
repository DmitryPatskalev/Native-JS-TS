import React from "react";
import {ClockViewPropsType} from "./Clock";

const get2DigitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({data}) => {
	 return <><span>
			 {get2DigitsString(data.getHours())}
				 </span>:
			<span>
			{get2DigitsString(data.getMinutes())}
				 </span>:
			<span>
			{get2DigitsString(data.getSeconds())}
				 </span>
	 </>
}