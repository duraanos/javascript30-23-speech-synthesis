'use strict';

const voicesDropDown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');

let voices = [];
const msg = new SpeechSynthesisUtterance();

const btnStop = document.querySelector('#stop');
const btnSpeak = document.querySelector('#speak');

const populateVoices = function () {
  voices = this.getVoices();
  voicesDropDown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`
    )
    .join('');
};

const toggle = function (startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
};

const setVoice = function () {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
};

const setOption = function () {
  msg[this.name] = this.value;
  toggle();
};

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropDown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));

btnSpeak.addEventListener('click', toggle);
btnStop.addEventListener('click', toggle.bind(null, false));
