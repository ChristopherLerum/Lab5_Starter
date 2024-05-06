// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // alert("test");
  document.querySelector("button").addEventListener('click', myplay);
  document.querySelector("select").addEventListener('input', mychoice);
  document.querySelector("input").addEventListener('input', myvolume);
}

function myvolume() {
  let vol = document.querySelector("input");
  let pic = document.querySelector("[alt='Volume level 2']");
  if (vol.value <= 0){
    pic.setAttribute("src", "assets/icons/volume-level-0.svg");
  } else if (vol.value >= 1 && vol.value < 33){
    pic.setAttribute("src", "assets/icons/volume-level-1.svg");
  } else if (vol.value >= 33 && vol.value < 67){
    pic.setAttribute("src", "assets/icons/volume-level-2.svg");
  } else if (vol.value >= 67){
    pic.setAttribute("src", "assets/icons/volume-level-3.svg");
  }
  document.querySelector("audio").volume = (vol.value / 100);
}

function mychoice() {
  let mysound = document.querySelector("audio");
  if (document.querySelector("select").value == "air-horn") {
    mysound.setAttribute("src", "assets/audio/air-horn.mp3");
    document.querySelector("img").setAttribute("src", "assets/images/air-horn.svg");
  } else if (document.querySelector("select").value == "car-horn") {
    mysound.setAttribute("src", "assets/audio/car-horn.mp3");
    document.querySelector("img").setAttribute("src", "assets/images/car-horn.svg");
  } else if (document.querySelector("select").value == "party-horn") {
    mysound.setAttribute("src", "assets/audio/party-horn.mp3");
    document.querySelector("img").setAttribute("src", "assets/images/party-horn.svg");
  }
}

function myplay(){
  document.querySelector("audio").play();
  if (document.querySelector("select").value == "party-horn"){
    //const box = document.createElement("canvas");
    //box.setAttribute("fillRect", "0, 0, 1500, 1500");
    const jsConfetti = new JSConfetti(); //{box});

    jsConfetti.addConfetti({confettiRadius: 12,});
  }
}

