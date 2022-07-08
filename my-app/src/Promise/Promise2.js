// const axios = {
//   _fake(url, data) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         let responseData = {
//           text: `${url} loves you`
//         };
//         if (url.indexOf('it-kamasutra') > 0) {
//           responseData = {
//             requestedCount: data.count,
//             message: 'we will prepare students for you'
//           }
//         } else if (url.indexOf('google') > 0) {
//           responseData = {
//             vacancies: 12
//           }
//         } else if (url.indexOf('microsoft') > 0) {
//           responseData = {
//             vacancies: 21
//           }
//         }
//         resolve({
//           request: {},
//           status: 200,
//           headers: {},
//           config: {},
//           data: responseData
//         })
//       }, randomIntFromInterval(1, 5) * 1000)
//     })
//   }
// }


const findUsersInDB = (id) => {
  const users = [
    {id: 1, name: 'Dima', friend: 3},
    {id: 2, name: 'Tania', friend: 2},
    {id: 3, name: 'Danik', friend: 5},
  ]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = users.find(u => u.id === id)
      return user === null ? reject('user not found') : resolve(user)
    }, randomIntFromInterval(500, 1500))
  })
}
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

findUsersInDB(1)
  .then(user => {
    console.log(user.name)
    return user.friend
  })
  .then(friend => findUsersInDB(friend))
  .then(friend1 => {
    console.log(friend1)
    return friend1.friend
  })
  .then(friendId => findUsersInDB(friendId))

  .catch(error => console.log(error))