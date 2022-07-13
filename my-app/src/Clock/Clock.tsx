import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
	 mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
	 data: Date
}


export const Clock: React.FC<PropsType> = (props) => {
	 const [data, setDate] = useState(new Date())
	 useEffect(() => {
			const interval = setInterval(() => {
				 setDate(new Date())

			}, 1000)
			return () => {
				 clearInterval(interval)
			}
	 }, [])
	 let view;
	 switch (props.mode) {
			case 'analog':
				 view = <AnalogClockView data={data}/>
				 break;
			case 'digital':
			default:
				 view = <DigitalClockView data={data}/>
	 }
	 return <div>
			{view}
	 </div>
}


