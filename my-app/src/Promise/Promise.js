// console.log('Request data')
// setTimeout(() => {
//   console.log('Preparing data...')
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data reccived', backendData)
//   }, 2000)
// }, 2000)

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...')
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    }
  }, 2000)
})
