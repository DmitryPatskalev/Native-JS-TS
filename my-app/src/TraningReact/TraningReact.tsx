import React from 'react';
import State from "./State/State";
import './TrainReact.css'
import Structor from "./Structor/Structor";

const TraningReact = () => {
	 return (
		 <div className='style'>
				<h1>State</h1>
				<State/>
				<h1>Structors</h1>
				<Structor/>
		 </div>
	 );
};

export default TraningReact;