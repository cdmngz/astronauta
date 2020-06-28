let astronauta = document.querySelector('#astronauta')
let num = 0

window.onload = () => {
  window.scrollTo(0,0)
  crearEstrellas(30)
}

crearEstrellas = num => {
  let star = document.querySelector('.stars')
  for (let i = 0; i < num; i++) {
    let same = Math.floor(Math.random() * 10) + 1
    star.innerHTML += `
    <div
      style="
        background-color: white;
        border-radius: 50%;
        height: ${same}px;
        left: ${Math.floor(Math.random() * 99) + 1}vw;
        position: absolute;
        top: ${Math.floor(Math.random() * 210) + 5}vh;
        width: ${same}px;
        "
      >
    </div>`
  }
}

window.onscroll = function(ev) {
  let y = window.scrollY

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    astronauta.style.transform = `rotate(${28}deg)`
    astronauta.style.top = '62vh'
    astronauta.style.animation = 'null'
    document.querySelector('.congrats').style.opacity = 1
  } else if(y > 10){
    astronauta.style.animation = 'astronauta 1.5s infinite'
    document.querySelector('.congrats').style.opacity = 0
    astronauta.style.top = '30vh'
  } else {
    astronauta.style.top = '-70vh'
  }
}

start = () => {
  document.querySelector('#ship').classList.toggle('init')
}

astronauta.addEventListener('click', () => {
  audio = document.getElementById("audio");
  audio.play();
})