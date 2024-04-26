//创建一个数组，内容为要创建按钮的所有内容
// const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
// for(let i = 0;i < sounds.length;i++){
//   const div = document.createElement('div')
//   div.textContent=sounds[i]
//   div.classList.add('btn')
//   document.body.appendChild(div)
// }
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
// 通过js给html添加内容，使用forEach，遍历数组内的每一项，从而创建对应的button，audio元素
sounds.forEach((sound)=>{
  // 使用document.createElement创建元素
  const btn = document.createElement('button')
  const music = document.createElement('audio')
  // 使用  .textContent=  给元素写入内容
  btn.textContent=sound
  // 使用  .classList.add()  给元素添加class
  btn.classList.add('btn')
  // 使用  .id=  给元素添加id
  music.id=sound
  // 使用  .src=  给元素添加src，配合`${}`写入路径
  music.src=`sounds/sound-board_sounds_${sound}.mp3`
  // 使用document.body.appendChild()将创建的元素写入html中
  document.body.appendChild(btn)
  document.body.appendChild(music);
  // 添加事件监听器.addEventListener，这里使用点击事件click，调用回调函数
  btn.addEventListener('click',()=>{
    playMusic(sound)
  })
})
// 声明函数，播放音乐 audio文件使用play()来播放音乐，并引入stopPlay()
function playMusic(sound){
  const music = document.getElementById(sound)
  stopPlay(music)
  music.play()
}
// 声明函数，停止播放 audio文件使用pause()来暂停播放，并使用currentTime()设置当前播放时间为0 停止播放音乐，将音乐开始播放时间调至开头
function stopPlay(music){
  music.pause()
  music.currentTime=0
}