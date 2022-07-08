import React, {useState} from 'react';

const State = () => {
	 const [name, setName] = useState('prod')
	 const [inCart, setInCart] = useState(false)


	 const onClickHundler = () => {
			setInCart(!inCart)
	 }

	 const changeHundler = () => {
			setName('cost')
	 }
	 return (
		 <div>
				<button onClick={onClickHundler}>Click</button>
				<span>{inCart ? 'in cart' : 'not in cart'}</span>
				<p>{name}</p>
				<button onClick={changeHundler}>change state</button>
				<hr/>

		 </div>
	 );
};

export default State;