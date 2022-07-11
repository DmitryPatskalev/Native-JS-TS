import React, {useState} from 'react';

const Select = () => {
	 const cities = ['Minsk', 'Lviv', 'Kiev']
	 const [value, setValue] = useState<any>('')
	 const onChangeHundler = (e: any) => {
			setValue(e.target.value)
	 }
	 const listOfCities = cities.map((elem, index) => {
			return <option value={index}>{elem}</option>
	 })
	 return (
		 <div>
				<select value={value} onChange={onChangeHundler}>{listOfCities}</select>
				<p>Your city is: {cities[value]}</p>

		 </div>
	 );
};

export default Select;