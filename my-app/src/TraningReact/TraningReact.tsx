import React from 'react';
import State from "./State/State";
import './TrainReact.css'
import Structor from "./Structor/Structor";
import Rendering from "./Rendering/Rendering";

const TraningReact = () => {
	 return (
		 <div className='style'>
				<h1>State</h1>
				<State/>
				<h1>Structors</h1>
				<Structor/>
				<hr/>
				<h1>Rendering</h1>
				<Rendering/>
		 </div>
	 );
};

export default TraningReact;