import React, {useState} from "react";
import StarValue, {StarRatingType} from "./StarValue";
import OnOff from "../OnOff/OnOff";


const StarRating = () => {
	 const [rating, setRating] = useState<StarRatingType>(0)
	 return <div>
			<StarValue value={rating} onClick={setRating}/>
			<hr/>
			<OnOff/>
	 </div>
}
export default StarRating