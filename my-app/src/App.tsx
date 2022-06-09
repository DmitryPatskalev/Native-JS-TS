import React from 'react';
import './App.css';
import MicroTasks from "./MicroTasks/MicroTasks";
import Exams from "./Exams/Exams";
import StarRating from "./MicroTasks/StarRating/StarRating";

import {BrowserRouter} from "react-router-dom";
import ReactRouter from "./React_Router_Dom/ReactRouter";
import GeneralCounter from "./Counter/FirstVersion/GeneralCounter";
import {Menu} from "./MicroTasks/ShowHideList/Menu";
import RouterCounter from "./Counter/SecondVersion/RouterCounter";
import Counter from "./Counter/Counter";


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

				{/*<GeneralCounter/>*/}

				<BrowserRouter>
					 <RouterCounter/>
				</BrowserRouter>

				{/*<BrowserRouter>*/}
				{/*	 <Counter/>*/}
				{/*</BrowserRouter>*/}


		 </div>
	 );
}

export default App;
