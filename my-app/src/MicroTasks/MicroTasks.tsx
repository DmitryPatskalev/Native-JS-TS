import Button from "./Button/Button";
import Huk from "./Huk/Huk";
import PeopleList from "./Filter/Filter";
import InputMessage from "./Input/InputMessage";
import Map from "../05_Map/Map";


const MicroTasks = () => {
	 return <div className='body'>
			<Button/>
			<hr/>
			<Huk/>
			<hr/>
			<PeopleList/>
			<hr/>
			<InputMessage/>
			<hr/>
			<Map/>
	 </div>
}
export default MicroTasks