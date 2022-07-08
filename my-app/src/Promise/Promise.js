const button = document.getElementById('button')
button.addEventListener('click', function () {
  setTimeout(() => {
    console.log(1)
  }, 2000)
})
console.log(22)

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

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})
newPromise.then((result) => {
  return result + 1
})
  .then((result) => {
    return result + 2
  })
  .then((result) => {
    return result + 3
  })
  .then((result) => {
    console.log(result)
  })

const getNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random())
    }, 2000)
  })

}
getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      (resolve())
    }, ms)
  })
}

async function run() {
  await wait(1000)
  console.log(1)
  await wait(2000)
  console.log(2)
  await wait(3000)
  console.log(3)
}

run()

