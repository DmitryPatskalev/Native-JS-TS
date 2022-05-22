import React from "react";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

const ReactRouter = () => {
	 return <div>

			<NavLink to={'/'}>main</NavLink>----
			<NavLink to={'/login'}>login</NavLink>----
			<NavLink to={'/profile'}>profile</NavLink>----
			<NavLink to={'/profile/setting'}>setting</NavLink>

			<Routes>
				 <Route path={'*'} element={<div>404</div>}/>
				 <Route path={'/'} element={<div>main</div>}/>
				 <Route path={'/login'} element={<div>login</div>}/>
				 <Route path={'/profile/*'} element={(
					 <div>
							profile
							<Routes>
								 <Route path={'/setting'} element={<div>setting</div>}/>
							</Routes>
					 </div>)
				 }/>
			</Routes>

	 </div>
}
export default ReactRouter