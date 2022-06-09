import React from "react";
import {NavLink, Route, Routes, useNavigate} from "react-router-dom";

const Profile = () => {
	 const navigate = useNavigate()
	 return <div>
			profile
			<button onClick={() => navigate('/login')}>logout</button>
	 </div>
}

const ReactRouter = () => {


	 return <div>

			<NavLink to={'/'}>main</NavLink>----
			<NavLink to={'/login'}>login</NavLink>----
			<NavLink to={'/profile'}>profile</NavLink>----
			<NavLink to={'/profile/setting'}>setting</NavLink>

			<Routes>
				 <Route path={'/*'} element={<div>404</div>}/>
				 <Route path={'/'} element={<div>main</div>}/>
				 <Route path={'/login'} element={<div>login</div>}/>
				 <Route path={'/profile/*'} element={(<div>

						profile
						<Routes>
							 <Route path={'/setting'} element={<div>setting</div>}/>
						</Routes>
				 </div>)}/>
			</Routes>
	 </div>
}
export default ReactRouter