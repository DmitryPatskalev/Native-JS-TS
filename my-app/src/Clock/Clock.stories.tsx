import {Clock} from "./Clock";

export default {
	 title: 'Clock',
	 component: Clock
}

export const BaseAnalogExample = () => {
	 return <div>
			<Clock mode='analog'/>
	 </div>
}
export const BaseDigitalExample = () => {
	 return <div>
			<Clock mode='digital'/>
	 </div>
}