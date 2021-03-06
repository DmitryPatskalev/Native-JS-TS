import React from 'react';
import './App.css';
import MicroTasks from "./MicroTasks/MicroTasks";
import Exams from "./Exams/Exams";
import StarRating from "./MicroTasks/StarRating/StarRating";

import {BrowserRouter} from "react-router-dom";
import ReactRouter from "./React_Router_Dom/ReactRouter";

import {Menu} from "./MicroTasks/ShowHideList/Menu";

import Counter from "./Counter/Counter";
import TraningReact from "./TraningReact/TraningReact";


function App() {
	 return (
		 <div className="App">
				{/*<MicroTasks/>*/}
				{/*<hr/>*/}
				{/*<Exams/>*/}
				{/*<StarRating/>*/}

				{/*<BrowserRouter>*/}
				{/*	 <ReactRouter/>*/}
				{/*</BrowserRouter>*/}

				{/*<Menu/>*/}
				<TraningReact/>


				{/*<BrowserRouter>*/}
				{/*	 <Counter/>*/}
				{/*</BrowserRouter>*/}


		 </div>
	 );
}

export default App;
