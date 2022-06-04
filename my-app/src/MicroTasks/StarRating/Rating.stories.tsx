import React, {useState} from 'react';

import StarValue, {StarRatingType} from "./StarValue";
import StarRating from "./StarRating";
import {action} from "@storybook/addon-actions";


export default {
	 title: 'Rating Stories',
	 component: StarRating,
}
const changeRating = action('click')

export const EmptyRating = () => <StarValue value={0} onClick={changeRating}/>
export const Rating1 = () => <StarValue value={1} onClick={changeRating}/>
export const Rating2 = () => <StarValue value={2} onClick={changeRating}/>
export const Rating3 = () => <StarValue value={3} onClick={changeRating}/>
export const Rating4 = () => <StarValue value={4} onClick={changeRating}/>
export const Rating5 = () => <StarValue value={5} onClick={changeRating}/>

export const ChangeRating = () => {
	 const [rating, setRating] = useState<StarRatingType>(0)
	 return <div>
			<StarValue value={rating} onClick={setRating}/>
	 </div>
}

