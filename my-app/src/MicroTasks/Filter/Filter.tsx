import React, {useState} from "react";

type ListMoneyType = 'All' | 'RUB' | 'USD'
const listMoney = [
		{id: 1, banknots: 'Dollars', value: 100, number: ' a1234567890'},
		{id: 2, banknots: 'Dollars', value: 50, number: ' z1234567890'},
		{id: 3, banknots: 'RUBLS', value: 100, number: ' w1234567890'},
		{id: 4, banknots: 'Dollars', value: 100, number: ' e1234567890'},
		{id: 5, banknots: 'Dollars', value: 50, number: ' c1234567890'},
		{id: 6, banknots: 'RUBLS', value: 100, number: ' r1234567890'},
		{id: 7, banknots: 'Dollars', value: 50, number: ' x1234567890'},
		{id: 8, banknots: 'RUBLS', value: 50, number: ' v1234567890'},
]


const Filter = () => {
		const [money, setMoney] = useState(listMoney)
		const [filter, setFilter] = useState<ListMoneyType>('All')

		let currentMoney = money

		if (filter === 'RUB') {
				currentMoney = money.filter((elem) => elem.banknots === 'RUBLS')
		}
		if (filter === 'USD') {
				currentMoney = money.filter((elem) => elem.banknots === 'Dollars')
		}
		const onClickFilter = (nameButton: ListMoneyType) => {
				setFilter(nameButton)

		}


		return <div>
				<ul>
						{currentMoney.map((elem, index) => {
								return <li key={index}>
										<span>{elem.id}--</span>
										<span>{elem.banknots}--</span>
										<span>{elem.value}--</span>
										<span>{elem.number}</span>
								</li>
						})}
				</ul>
				<div>
						<button style={{backgroundColor: 'red'}} onClick={() => onClickFilter('All')}>Filter All</button>
						<button style={{backgroundColor: 'green'}} onClick={() => onClickFilter('RUB')}>Filter RUB</button>
						<button style={{backgroundColor: 'yellow'}} onClick={() => onClickFilter('USD')}>Filter USD</button>
				</div>

		</div>

}
export default Filter