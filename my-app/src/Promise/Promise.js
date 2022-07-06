let obj = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Tania'},
  {id: 3, name: 'Danik'},
]
const findUsers = (id) => {
  return obj.filter(elem => elem.id === id)
}

const promise = new Promise((resolve) => {
  resolve(findUsers(1))

})
promise
  .then((users) => {
    console.log(promise)
    console.log(users)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('finish')
  })

