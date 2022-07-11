import React, {useState} from 'react';

const Radio = () => {
	 const [value, setValue] = useState('1')
	 const onChangeHundler = (e: any) => {
			setValue(e.target.value)
	 }
	 return (
		 <div>
				<span>Выберите свой дюбимый язык программирования:</span>
				<input
					type="radio"
					name='radio'
					value='1'
					checked={value === '1'}
					onChange={onChangeHundler}
				/>JS
				<input
					type="radio"
					name='radio'
					value='2'
					checked={value === '2'}
					onChange={onChangeHundler}
				/>Python
				<input
					type="radio"
					name='radio'
					value='3'
					checked={value === '3'}
					onChange={onChangeHundler}
				/>C++
				<p>{value === '1' ? 'You are real dude' : ''}</p>

		 </div>
	 );
};

export default Radio;