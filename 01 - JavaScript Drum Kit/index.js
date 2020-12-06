"use Strict";

function playSound(e) {
    // adding audio to keydown event
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // adding css efect on event
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    // rewind autio to the start
    audio.currentTime = 0; 
    // playing audio
    audio.play();
    // adding css efect on event
    key.classList.add('playing');
    
    // console.log(key);
    // console.log(audio);
  }

  // removing css effect from buttons

  function removeTransition (e) {
    // console.log(e);
    if(e.propertyName != 'transform') return; // skip it if it's not a transform
    // console.log(e.propertyName);
    this.classList.remove('playing');
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

 // keydown event listenr
  window.addEventListener('keydown', playSound);