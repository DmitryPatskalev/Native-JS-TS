import {useState} from "react";
import Money from "./List";

export type ListMoneyType = 'ALL' | 'RUB' | 'USD'
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
	 const [filter, setFilter] = useState('ALL')
	 let currentMoney = money

	 if (filter === 'RUB') {
			currentMoney = money.filter(elem => elem.banknots === 'RUBLS')
	 }
	 if (filter === 'USD') {
			currentMoney = money.filter(elem => elem.banknots === 'Dollars')
	 }
	 const onClickHundler = (name: string) => {
			setFilter(name)

	 }

	 return <div>
			<Money currentMoney={currentMoney} onClickHundler={setFilter}/>

	 </div>

}
export default Filter