import React, {ChangeEvent, useMemo, useState} from "react";

export default {
	 title: 'React.UseState.demo'
}

function generateData() {
	 console.log('generateData')
	 return 0
}


export const Example1 = () => {
	 console.log('Example1')
	 const [counter, setCounter] = useState(generateData)

	 const changer = (state: number) => {
			return state + 1
	 }
	 return <>


			<button onClick={() => setCounter(changer)}>+</button>
			{counter}

	 </>

}