const loadingElement = document.querySelector('.container .loading')
const bgElement = document.querySelector('.container .background')

const blurryLoading = setInterval(blurring,30);
let load = 0
function blurring() {
  load++
  if(load===100){
    clearInterval(blurryLoading)
  }
  loadingElement.innerHTML=(`${load}%`)
  bgElement.style.filter=(`blur(${scale(load,0,100,30,0)}px)`)
  loadingElement.style.opacity=scale(load,0,100,1,0)
}

function scale (num,x_min,x_max,y_min,y_max) {
  return ((y_max-y_min)/(x_max-x_min))*(num-x_min)+y_min
}