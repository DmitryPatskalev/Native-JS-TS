import React, {useState} from "react";

const Huk = () => {
		const [cart, setCart] = useState(false)
		let inCart;
		if (cart) {
				inCart = <p>В Корзине</p>
		}
		const Cart = () => {
				setCart(!cart)
		}
		const styleTrue = {
				backgroundColor: 'green'
		}

		const [value, setValue] = useState(0)
		const Plus = () => {
				setValue(value + 1)
		}
		const Minus = () => {
				setValue(value - 1)
		}
		const Null = () => {
				setValue(0)
		}

		return <div>

				<button onClick={Plus}>PLUS</button>
				<button onClick={Minus}>MINUS</button>
				<button onClick={Null}>Null</button>
				<h1>{value}</h1>
				<hr/>
				<button onClick={Cart}>{!inCart ? 'Add to Cart' : 'Remove from Cart'}</button>
				{inCart}
		</div>
}
export default Huk