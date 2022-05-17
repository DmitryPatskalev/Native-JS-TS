import React from 'react';

import './App.css';
import MicroTasks from "./MicroTasks/MicroTasks";
import Exams from "./Exams/Exams";
import StarRating from "./MicroTasks/StarRating/StarRating";


function App() {
	 return (
		 <div className="App">
				{/*<MicroTasks/>*/}
				<hr/>
				{/*<Exams/>*/}
				<StarRating/>
		 </div>
	 );
}

export default App;
