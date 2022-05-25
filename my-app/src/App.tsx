import React from 'react';
import './App.css';
import MicroTasks from "./MicroTasks/MicroTasks";
import Exams from "./Exams/Exams";
import StarRating from "./MicroTasks/StarRating/StarRating";

import {BrowserRouter} from "react-router-dom";
import ReactRouter from "./React_Router_Dom/ReactRouter";

import GlobalCounter from "./ControlTest/Monday/GlobalCounter";


function App() {
	 return (
		 <div className="App">
				{/*<MicroTasks/>*/}
				{/*<hr/>*/}
				{/*<Exams/>*/}
				{/*<StarRating/>*/}
				<GlobalCounter/>

				{/*<BrowserRouter>*/}
				{/*	 <ReactRouter/>*/}
				{/*</BrowserRouter>*/}
		 </div>
	 );
}

export default App;
