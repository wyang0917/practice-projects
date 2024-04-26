const container  = document.querySelector('.container')
const button  = document.querySelector('.button')
const search = document.querySelector('.search')

button.addEventListener('click',()=>{
  container.classList.toggle('active')
  search.focus()
})

