import React, {useEffect, useState} from 'react'

export default {
	 title: 'UseEffectClock'
}

export const Clock = () => {
	 const [date, setDate] = useState(new Date().toLocaleTimeString());

	 useEffect(() => {
			setTimeout(() => {
				 setDate(new Date().toLocaleTimeString())
			}, 1000)
	 })

	 return (
		 <div>
				<h1>Привет, мир!</h1>
				<h2>Сейчас {date}</h2>
		 </div>
	 )
}
