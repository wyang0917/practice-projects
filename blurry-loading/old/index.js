const countElement = document.querySelector('.loading')
let count =0 
let reverseCount=100
const intervalCount = setInterval(function(){
  count++
  countElement.textContent = `${count}%`

  reverseCount=reverseCount-1
  countElement.style.opacity=reverseCount/100

  if(count===100 && reverseCount===0){
    clearInterval(intervalCount)
  }
}, 30)

const  filterElement = document.querySelector('.background')
let blur = 30
const filterCount = setInterval(function(){
  blur = blur -0.5
  filterElement.style.filter=`blur(${blur}px)`
  if(blur===0){
    clearInterval(filterCount)
  }
},30)
