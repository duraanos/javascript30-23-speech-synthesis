'use strict';

const voicesDropDown = document.querySelector('[name="voice"]');
const options = document.querySelector('[type="range"], [name="text"]');
let voice = [];

const btnStop = document.querySelector('#stop');
const btnSpeak = document.querySelector('#speak');
