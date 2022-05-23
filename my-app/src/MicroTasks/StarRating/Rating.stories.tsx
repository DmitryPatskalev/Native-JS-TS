import React, {useState} from 'react';

import StarValue, {StarRatingType} from "./StarValue";
import StarRating from "./StarRating";


export default {
	 title: 'Rating Stories',
	 component: StarRating,
}

export const EmptyRating = () => {
	 const [rating, setRating] = useState<StarRatingType>(0)
	 return <div>
			<StarValue value={rating} onClick={setRating}/>
	 </div>
}

