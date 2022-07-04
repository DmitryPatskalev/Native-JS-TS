import React, {useEffect, useState} from 'react'

export default {
	 title: 'UseEffect'
}

export const SetIntervalOutExample = () => {
	 const [fake, setFake] = useState(1)
	 const [counter, setCounter] = useState(1)
	 useEffect(() => {
			let date = new Date()
			setInterval(() => {
				 // setCounter(state => state + 1)

			}, 1000)
	 }, [])
	 return <div>
			Counter: {counter}
	 </div>
}
