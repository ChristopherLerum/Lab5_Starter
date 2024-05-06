// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  const mySpeech = window.speechSynthesis;
  console.log(speechSynthesis.getVoices());
  const tts = new SpeechSynthesisUtterance();
  const mylist = document.querySelector("select");

  document.querySelector("textarea").addEventListener('input', (event) => {
    tts.text = document.querySelector("textarea").value;
  });

  document.querySelector("button").addEventListener('click', (event) => {
    document.querySelector("img").setAttribute("src", "assets/images/smiling-open.png");
    let voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      console.log('1');
      if (voices[i].name === mylist.selectedOptions[0].getAttribute("data-name")) {
        console.log('2');
        tts.voice = voices[i];
        break;
      }
    }
    mySpeech.speak(tts);
    tts.onend = function (event) {
      document.querySelector("img").setAttribute("src", "assets/images/smiling.png");
    };
  });

  document.querySelector("select").addEventListener('click', morev);
  document.querySelector("select").addEventListener('input', vchoice);
}

function morev() {
  let voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.querySelector("select").appendChild(option);
  }
}

function vchoice() {
  let voices = speechSynthesis.getVoices();
}