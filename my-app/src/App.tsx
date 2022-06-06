import React from 'react';
import './App.css';
import MicroTasks from "./MicroTasks/MicroTasks";
import Exams from "./Exams/Exams";
import StarRating from "./MicroTasks/StarRating/StarRating";

import {BrowserRouter} from "react-router-dom";
import ReactRouter from "./React_Router_Dom/ReactRouter";
import GeneralCounter from "./Counter/FirstVersion/GeneralCounter";
import {Menu} from "./MicroTasks/ShowHideList/Menu";
import RouterCounter from "./Counter/SecondVersion/GeneralCounter";


function App() {
	 return (
		 <div className="App">
				{/*<MicroTasks/>*/}
				{/*<hr/>*/}
				{/*<Exams/>*/}
				{/*<StarRating/>*/}
				{/*<GeneralCounter/>*/}
				{/*<BrowserRouter>*/}
				{/*	 <ReactRouter/>*/}
				{/*</BrowserRouter>*/}
				{/*<Menu/>*/}
				<BrowserRouter>
					 <RouterCounter/>
				</BrowserRouter>
				
		 </div>
	 );
}

export default App;
