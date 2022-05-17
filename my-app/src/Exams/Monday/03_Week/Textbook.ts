// // import React, {useState} from 'react';
// //
// // type UserType = {
// // 	 id: number
// // 	 name: string
// // 	 age: number
// // }
// //
// // type UserPropsType = UserType & {
// // 	 deleteUser: (id: number) => void
// // }
// //
// // function User(props: UserPropsType) {
// // 	 return (
// // 		 <li>
// // 			 <button onClick={() => props.deleteUser(data)}>x</button>
// // 	 User {props.name}: {props.age} y.o.
// // 	 </li>
// // )
// // }
// //
// // export function UsersList() {
// // 	 const data: Array<UserType> = [
// // 			{id: 1, name: "Bob", age: 25},
// // 			{id: 2, name: "Alex", age: 28},
// // 			{id: 3, name: "Ann", age: 23},
// // 			{id: 4, name: "John", age: 30},
// // 	 ]
// // 	 const [users, setUsers] = useState<Array<UserType>>(data)
// // 	 const deleteUser = (userID: number) => {
// // 			const filteredUsers = users.filter(u => u.id !== userID)
// // 			setUsers(filteredUsers)
// // 	 }
// // 	 return (
// // 		 <main>
// // 			 <h4>User list:</h4>
// // 	 <ul>
// // 	 {users.map(u => <User
// // 				key={u.id}
// // 	 {...u}
// // 	 deleteUser={deleteUser}
// // 	 />)}
// // 	 </ul>
// // 	 </main>
// // )
// // }
// //
// //
//
//
// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function Post() {
// 	 const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
// 			// xxx
// 			alert("Летим-бомбим!!!")
// 	 }
// 	 return (
// 		 <div>
// 			 <article>
// 				 <h4>Как дела, братан?</h4>
// 		 <p>
// 		 Вижу, что неплохо. Давай, трудись )))
// 	 Google ждёт тебя в цифровом рабстве!
// 	 Cтавь лайк и полетели!!!
// 	 </p>
// 	 <a href={"https://www.youtube.com/"}
// 	 onClick={onClickHandler}
// 		 >В этом месте подробнее...</a>
// 	 </article>
// 	 </div>
// )
// }