const button = document.getElementById('button')
const onClickHundler = () => alert('Button')

button.addEventListener('click', onClickHundler)

let def = (e) => {
  e.preventDefault()
  alert('NON')
}

const link = document.getElementById('link')
link.addEventListener('click', def)


console.log('dfdw')