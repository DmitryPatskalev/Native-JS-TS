// // import React from "react";
// //
// //
// // type NewsType = {
// // 	 title: string
// // 	 author: string
// // }
// // type ArticleType = {
// // 	 title: string
// // 	 date: string
// // 	 text: string
// // }
// // type PagePropsType = {
// // 	 news: NewsType[]
// // 	 mainArticle: ArticleType
// // }
// // export const Page: React.FC<PagePropsType> = (props) => {
// // 	 return <div>
// // 			<article>
// // 				 <h1>Название: {props.author.title}</h1>
// // 				 <div>{props.XXX.date}</div>
// // 				 <div>{props.XXX.text}</div>
// // 			</article>
// // 			<aside>Articles:
// // 				 <ul>
// // 						{props.YYY.map(n => <li>{n.title}, {n.author}</li>)}
// // 				 </ul>
// // 			</aside>
// // 	 </div>
// // }
// //


// //
// // type PagePropsType = {
// // 	 age: number
// // 	 name: string
// // 	 avatarUrl: string
// // }
// // const Page: React.FC<PagePropsType> = (props) => {
// // 	 return <User n='Dima' a='37'/>
// // }
// // type UserPropsType = {
// // 	 a: number
// // 	 n: string
// // }
// // export const User: React.FC<UserPropsType> = (props) => {
// // 	 return <div>name: {props.n}, age: {props.a}</div>
// // }
// //
// // type UserWalletType = {
// // 	 title: string
// // 	 amount: number
// // }
// // type UserWalletPropsType = {
// // 	 wallet: UserWalletType
// // }
// //
// // export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
// // 	 return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// // }
// //
// // export const UserMoney = () => {
// // 	 const wallets = [
// // 			{title: 'bitcoin', amount: 1},
// // 			{title: '$', amount: 100}
// // 	 ]
// //
// // 	 return <div>
// // 			<UserWallet wallet={xxx}/>
// // 			<UserWallet wallet={yyy}/>
// // 	 </div>
// // }
// //
// // import ReactDOM from 'react-dom'
// //
// import React from "react-dom";
//
// export const VideoHeader = (props: { videoName: string }) => {
// 	 return <div>
// 			😀 {props.videoName}
// 	 </div>
// }
// export const VideoContent = (props: { videoContent: string }) => {
// 	 return <div>
// 			📼 <a href={props.videoContent}>{props.videoContent}</a>
// 	 </div>
// }
// export const VideoDescription = (props: { videoDescription: string }) => {
// 	 return <div>
// 			📑 {props.videoDescription}
// 	 </div>
// }
//
// export const YoutubeVideo = (props: any) => {
// 	 return <div>
// 			<VideoHeader videoName={props.video.title}/>
// 			<VideoContent videoContent={props.video.link}/>
// 			<VideoDescription videoDescription={props.video.description}/>
// 	 </div>
// }
//
// export const App = () => {
// 	 const video = {
// 			title: 'Samurai way',
// 			link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
// 			description: 'Best free react-course'
// 	 }
//
// 	 return <YoutubeVideo video={video}/>
// }
// //
// // ReactDOM.render(<App/>,
// // 	document.getElementById('root')
// // );
// const Son = (props: any) => {
// 	 return <div>
// 			I am son. My name is {props.name}
// 	 </div>
// }
//
//
// const Father = (props: any) => {
// 	 return <div>
// 			I am father. My name is {props.name}
// 			<Son name={props.sonName} />
// 	 </div>
// }
//
// const Granny = (props: any) => {
// 	 return <div>
// 			I am granny. My name is {props.name}
// 			<Father name={props.fatherName} sonName={props.sonName} />
// 	 </div>
// }
//
// export const App = () => {
// 	 return <div>
// 			<Granny XXX={'Бабуля'} YYY={'Батя'} ZZZ={'Сын'}/>
// 	 </div>
// }
//
// ReactDOM.render(<App/>,
// 	document.getElementById('root')
// )