const container = document.querySelector('.container')
const left = document.querySelector('.split.left')
const right = document.querySelector('.split.right')

left.addEventListener('mouseenter',()=>{
  container.classList.add('hover_left')
})
left.addEventListener('mouseleave',()=>{
  container.classList.remove('hover_left')
})

right.addEventListener('mouseenter',()=>{
  container.classList.add('hover_right')
})
right.addEventListener('mouseleave',()=>{
  container.classList.remove('hover_right')
})