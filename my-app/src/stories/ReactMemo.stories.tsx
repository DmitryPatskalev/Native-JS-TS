import React, {ChangeEvent, useState} from "react";

export default {
	 title: 'React.memo.demo'
}

const NewMessagesCounter = (props: { count: number }) => {
	 return <div>
			{props.count}
	 </div>
}

const UsersSecret = (props: { users: Array<string> }) => {
	 console.log('Users')
	 return <div>
			{props.users.map((u, i) => {
				 return <div key={i}>
						{u}
				 </div>
			})}
	 </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
	 const [counter, setCounter] = useState(0)
	 const [users, setUsers] = useState(['Dima', 'Tania', 'Danik', 'Serg'])
	 const [value, setValue] = useState('')
	 const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
			setValue(event.currentTarget.value)
	 }

	 const addUser = () => {
			setUsers([...users, value])

	 }
	 return <>
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={addUser}>Add user</button>
			<input onChange={onChangeValue}/>
			<NewMessagesCounter count={counter}/>
			<Users users={users}/>
	 </>

}