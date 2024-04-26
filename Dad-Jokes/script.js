//通过DOM拿到button和main节点
const button = document.querySelector(".btn")
const main = document.querySelector(".main")
//调用函数
getJoke()
//给button按键添加事件监听器，click点击，执行函数
button.addEventListener('click',getJoke)
//async await 异步操作
//async 声明一个函数是异步函数
//异步函数会返回一个 Promise 对象，无论它是否显式地使用了 return 语句。在异步函数中，你可以使用 await 来暂停函数的执行，直到 Promise 被解决（resolved）或拒绝（rejected）。
async function getJoke(){
  //在执行函数期间，将button设置为不可用，
  button.disabled= true
  //创建div赋值在常量中，并给div添加类名
  const message = document.createElement('div')
  message.classList.add('message','response')
  const joke = document.createElement('div')
  joke.classList.add('message','joke')
  //在message中写入文本
  message.innerHTML='Can you tell me a joke?'
  //将message作为一个新的子元素，添加到父元素main中
  main.appendChild(message)
  //scrollTop是滚动条距离顶部的垂直偏移量
  //当设置scrollTop=scrollHeight相等时，可以让滚动条自动滚动到最底部
  main.scrollTop=main.scrollHeight

  //根据网站文档https://icanhazdadjoke.com/api
  //fetch 需要配置headers，按照网站要求
  const config = {
    headers:{
      "Accept": "application/json"
    }
  }
  //拿到网站的信息
  const res = await fetch('https://icanhazdadjoke.com/',config)
  const data = await res.json()
  console.log(data.joke);
  //创建一个新对象，设定setTimeout(r, 500) 定时器函数，500毫秒后继续执行函数
  await new Promise(r=>setTimeout(r,500))
  //写入icon font
  joke.innerHTML='<i class="fa-solid fa-ellipsis"></i>'
  main.appendChild(joke)
  
  main.scrollTop=main.scrollHeight

  await new Promise(r=>setTimeout(r,1500))

  joke.innerHTML=data.joke
  main.scrollTop=main.scrollHeight
  //函数直接结束，button可使用
  button.disabled=false
}