import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import GeneralCounter from "./FirstVersion/GeneralCounter";
import RouterCounter from "./SecondVersion/RouterCounter";

const Counter = () => {
	 return <div>
			<div>
				 {/*<NavLink to={'/firstVersion'}>First Version</NavLink>*/}
			</div>
			<div>
				 <NavLink to={'/'}>Second Version</NavLink>
			</div>
			<Routes>
				 {/*<Route path={'/firstVersion'} element={<GeneralCounter/>}/>*/}
				 <Route path={'/'} element={<RouterCounter/>}/>
			</Routes>


	 </div>
}
export default Counter