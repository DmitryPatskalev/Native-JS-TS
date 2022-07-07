// const button = document.getElementById('button')
// button.addEventListener('click', function () {
//   setTimeout(() => {
//     console.log(1)
//   }, 2000)
// })
// console.log(22)
//
// let obj = [
//   {id: 1, name: 'Dima'},
//   {id: 2, name: 'Tania'},
//   {id: 3, name: 'Danik'},
// ]
// const findUsers = (id) => {
//   return obj.filter(elem => elem.id === id)
// }
//
// const promise = new Promise((resolve) => {
//   resolve(findUsers(1))
//
// })
// promise
//   .then((users) => {
//     console.log(promise)
//     console.log(users)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     console.log('finish')
//   })
//
// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3)
//   }, 3000)
// })
// newPromise.then((result) => {
//   return result + 1
// })
//   .then((result) => {
//     return result + 2
//   })
//   .then((result) => {
//     return result + 3
//   })
//   .then((result) => {
//     console.log(result)
//   })

const getNumber = () => {
  const promise = Promise.resolve(Math.random())
  return promise
}
getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))

