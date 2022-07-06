let num = Array(1).fill().map(() => Math.floor(Math.random() * 6))
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (num[0] % 2 === 0) {
      resolve(num)
    } else {
      reject('Error')
    }
  }, 2000)
})
promise.then(
  function (result) {
    console.log(result); // выведет результат промиса
  },
  function (error) {
    console.log(error);  // выведет текст ошибки
  }
);

