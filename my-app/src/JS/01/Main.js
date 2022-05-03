// Objects
let obj = {
  name: 'Dima',
  age: 37,
  journey: {
    country: {
      Ukraine: {
        city: ['Bolehov', 'Lviv']
      },
      Georgia: {
        city: ['Batumi']
      },
    }
  }
}

let obj2 = {...obj, journey: {country: {Egypt: {city: ['Hurgada']}}}}
obj2.name = 'Tania'
obj2.age = 31

console.log(obj)
console.log(obj2)


