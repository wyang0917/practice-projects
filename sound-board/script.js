const buttons = document.querySelectorAll('.btn')

buttons.forEach(button=>{
  button.addEventListener('click',()=>{
    stopSongs()
    const buttonText = button.innerText.toLowerCase()
    
    switch(buttonText){
      case 'applause':
        document.getElementById('applause').play()
        break
      case 'boo':
        document.getElementById('boo').play()
        break
      case 'gasp':
        document.getElementById('gasp').play()
        break
      case 'tada':
        document.getElementById('tada').play()
        break
      case 'victory':
        document.getElementById('victory').play()
        break
      case 'wrong':
        document.getElementById('wrong').play()
        break
    }
  })
})
function stopSongs() {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}