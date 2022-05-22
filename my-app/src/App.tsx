import React from 'react';

import './App.css';
import MicroTasks from "./MicroTasks/MicroTasks";
import Exams from "./Exams/Exams";
import StarRating from "./MicroTasks/StarRating/StarRating";
import Counter from "./ControlTest/Monday/Counter";
import {BrowserRouter} from "react-router-dom";
import ReactRouter from "./React_Router_Dom/ReactRouter";


function App() {
	 return (
		 <div className="App">
				{/*<MicroTasks/>*/}
				{/*<hr/>*/}
				{/*<Exams/>*/}
				{/*<StarRating/>*/}
				{/*<Counter/>*/}

				<BrowserRouter>
					 <ReactRouter/>
				</BrowserRouter>
		 </div>
	 );
}

export default App;
