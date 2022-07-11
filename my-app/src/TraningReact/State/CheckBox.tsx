import React, {useState} from 'react';

const CheckBox = () => {
	 const [checked, setChecked] = useState(true)
	 const [checkBox, setCheckBox] = useState(false)
	 const [checkBox2, setCheckBox2] = useState(false)

	 const onChangeChecked = () => {
			setChecked(!checked)
	 }
	 let message;
	 if (checked) {
			message = <p>Hello</p>
	 } else {
			message = <p>GoodBuy</p>
	 }
	 const onCheckBox = () => {
			setCheckBox(!checkBox)
	 }
	 const onCheckBox2 = () => {
			setCheckBox2(!checkBox2)
	 }

	 return (
		 <div>
				<input type="checkbox" checked={checked} onChange={onChangeChecked}/>
				<button>Click</button>
				<p>{message}</p>
				<p>Вам есть 18 лет? ДА:
					 <input type="checkbox" disabled={checkBox2} checked={checkBox} onChange={onCheckBox}/>
					 НЕТ:<input type='checkbox' disabled={checkBox} checked={checkBox2} onChange={onCheckBox2}/></p>
				<div>
					 <h3>{checkBox ? 'Ура, вам уже есть 18. Здесь расположен контент только для взрослых' : ''}</h3>
					 <h3>{checkBox2 ? 'Увы, вам еще нет 18 лет' : ''}</h3>
				</div>
		 </div>
	 );
};

export default CheckBox;