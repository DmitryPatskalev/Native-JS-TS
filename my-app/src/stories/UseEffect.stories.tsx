import React, {useEffect, useState} from 'react'

export default {
	 title: 'UseEffect'
}

export const SetIntervalOutExample = () => {
	 const [counter, setCounter] = useState(1)
	 const [fake, setFake] = useState(1)
	 console.log('Component Rendered')

	 useEffect(() => {
			console.log('Counter')

	 }, [counter])

	 useEffect(() => {
			console.log('Fake')

	 }, [fake])

	 const increaseCounter = () => {
			setCounter(counter + 1)
	 }
	 const increaseFake = () => {
			setFake(fake + 1)
	 }
	 return <>
			Hello, counter: {counter}
			<button onClick={increaseCounter}>Click Count</button>
			<p></p>
			Hello, fake: {fake}
			<button onClick={increaseFake}>Click Fake</button>
	 </>
}
