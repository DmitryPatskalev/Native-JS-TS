import React, {ChangeEvent, useMemo, useState} from "react";

export default {
	 title: 'useMemo'
}

export const DifficultCountExample = () => {
	 const [a, setA] = useState<number>(3)
	 const [b, setB] = useState<number>(3)
	 let resultA = 1
	 let resultB = 1

	 resultA = useMemo(() => {
			let tempResultA = 1
			for (let i = 1; i <= a; i++) {
				 let fake = 0
				 while (fake < 100000000) {
						fake++
						const fakeValue = Math.random()
				 }
				 tempResultA *= i
			}
			return tempResultA
	 }, [a])


	 for (let i = 1; i <= b; i++) {
			resultB *= i
	 }

	 return <div>
			<input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
			<input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
			<hr/>
			<div>
				 Result for a: {resultA}
			</div>
			<div>
				 Result for b: {resultB}
			</div>
	 </div>


}

const UsersSecret = (props: { users: Array<string> }) => {
	 console.log('USER SECRET')
	 return <div>
			{props.users.map((u, i) => {
				 return <div key={i}>
						{u}
				 </div>
			})}
	 </div>
}
const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
	 console.log('HelpsReactMemo')
	 const [counter, setCounter] = useState(0)
	 const [users, setUsers] = useState(['Dima', 'Tania', 'Danik', 'Serg'])

	 const newArray = useMemo(() => {
			return users.filter(elem => elem.toLowerCase().indexOf('a') > -1)
	 }, [users])
	 const addUser = () => {
			const newUser = [...users, 'Lola' + new Date().getTime()]
			setUsers(newUser)
	 }
	 return <>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={() => addUser()}>add user</button>
			{counter}
			<Users users={newArray}/>
	 </>
}


export const LikeUseCallBack = () => {
	 console.log('LikeUseCallBack')
	 const [counter, setCounter] = useState(0)
	 const [books, setBooks] = useState(['JS', 'CSS', 'HTML', 'REACT'])

	 const memoizedAddBook = useMemo(() => {
			return () => {
				 console.log(books)
				 const newBook = [...books, 'Angular' + new Date().getTime()]
				 setBooks(newBook)
			}
	 }, [books])

	 return <>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			{counter}
			<Book addBook={memoizedAddBook}/>
	 </>
}

type BookSecretType = {
	 // books: Array<string>
	 addBook: () => void
}
const BooksSecret = (props: BookSecretType) => {
	 return <div>
			<button onClick={() => props.addBook()}>addBook</button>
	 </div>
}
const Book = React.memo(BooksSecret)