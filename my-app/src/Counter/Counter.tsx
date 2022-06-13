import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import FirstVersionCounter from "./FirstVersion/FirstVersionCounter";
import SecondVersionCounter from "./SecondVersion/SecondVersionCounter";
import {Button} from "@material-ui/core";
import './../Counter/SecondVersion/style.css'

const Counter = () => {
	 return <div className='linkButton'>
			<span>
				 <NavLink to={'/firstVersion'}
									className='link'>
						<Button
							color='secondary'
							variant='contained'>
							 First Version
						</Button>
				 </NavLink>
			</span>
			<span>
				 <NavLink to={'/secondVersion'}
									className='link'>
						<Button
							color='primary'
							variant='contained'>
							 Second Version
						</Button>
				 </NavLink>
			</span>
			<Routes>
				 <Route path={'/firstVersion'} element={<FirstVersionCounter/>}/>
				 <Route path={'/secondVersion'} element={<SecondVersionCounter/>}/>
			</Routes>


	 </div>
}
export default Counter