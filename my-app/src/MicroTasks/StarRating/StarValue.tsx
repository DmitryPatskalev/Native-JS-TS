import React from "react";
import './style.css'

export type StarRatingType = 0 | 1 | 2 | 3 | 4 | 5


type StarValue = {
	 value: StarRatingType
	 onClick: (value: StarRatingType) => void
}

const StarValue = (props: StarValue) => {
	 return <div>
			<Star selected={props.value > 0} onClick={props.onClick} value={1}/>
			<Star selected={props.value > 1} onClick={props.onClick} value={2}/>
			<Star selected={props.value > 2} onClick={props.onClick} value={3}/>
			<Star selected={props.value > 3} onClick={props.onClick} value={4}/>
			<Star selected={props.value > 4} onClick={props.onClick} value={5}/>
	 </div>
}
export default StarValue

type StarType = {
	 selected: boolean
	 value: StarRatingType
	 onClick: (on: StarRatingType) => void
}

const Star = (props: StarType) => {
	 let colorButton = () => props.onClick(props.value)
	 return <span onClick={colorButton}>
			{props.selected ? <button className='active'></button> :
				<button className='nonActive'></button>}
	 </span>


}
