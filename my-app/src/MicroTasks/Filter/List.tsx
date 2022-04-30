import {ListMoneyType} from "./Filter";

type currentMoneyType = {
	 currentMoney: {
			id: number
			banknots: string
			value: number
			number: string
	 }[],
	 onClickHundler: (name: ListMoneyType) => void

}

const Money = (props: currentMoneyType) => {

	 return <div>
			<ul>
				 {props.currentMoney.map((elem, index) => {
						return <li key={index}>
							 <span>{elem.id}--</span>
							 <span>{elem.banknots}--</span>
							 <span>{elem.value}--</span>
							 <span>{elem.number}</span>
						</li>
				 })}
			</ul>
			<button style={{backgroundColor: 'yellow'}} onClick={() => props.onClickHundler('ALL')}>Show all money</button>
			<button style={{backgroundColor: 'red'}} onClick={() => props.onClickHundler('RUB')}>Show only RUB</button>
			<button style={{backgroundColor: 'lightgreen'}} onClick={() => props.onClickHundler('USD')}>Show only USD</button>
	 </div>
}

export default Money