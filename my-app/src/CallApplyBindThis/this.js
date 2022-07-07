const elem1 = document.getElementById('elem1')
const elem2 = document.getElementById('elem2')


elem1.addEventListener('blur', func)
elem2.addEventListener('blur', func)


function func() {
  console.log(`${this.value} ${this.id}`)
}