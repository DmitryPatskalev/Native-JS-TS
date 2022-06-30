import React, {useEffect, useState} from "react";

export default {
	 title: 'UseEffect demo'
}


export const SimpleExample = () => {

	 const [counter, setCounter] = useState(1)
	 const [fake, setFake] = useState(1)
	 console.log('SimpleExample')

	 useEffect(() => {
			console.log('useEffect every render')
			document.title = `${counter}`
	 })
	 useEffect(() => {
			console.log('useEffect only first render')
			document.title = counter.toString()
	 }, [])
	 useEffect(() => {
			console.log('useEffect first render and counter change')
			document.title = counter.toString()
	 }, [counter])

	 return <>
			Hello, {counter}
			<button onClick={() => setCounter(counter + 1)}>+</button>

			Fake, {fake}
			<button onClick={() => setFake(fake + 1)}>+</button>

	 </>

}