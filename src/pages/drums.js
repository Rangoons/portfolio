import React, { useEffect } from 'react'
import styled from 'styled-components'
import clap from '../sounds/clap.wav'
import hihat from '../sounds/hihat.wav'
import kick from '../sounds/kick.wav'
import openhat from '../sounds/openhat.wav'
import boom from '../sounds/boom.wav'
import ride from '../sounds/ride.wav'
import snare from '../sounds/snare.wav'
import tom from '../sounds/tom.wav'
import tink from '../sounds/tink.wav'
import drums from '../images/drums.jpg'
import '../styles/drums.css'

const KEYS = [
  { label: 'A', sound: 'clap', keyCode: 65, src: clap },
  { label: 'S', sound: 'hihat', keyCode: 83, src: hihat },
  { label: 'D', sound: 'kick', keyCode: 68, src: kick },
  { label: 'F', sound: 'openhat', keyCode: 70, src: openhat },
  { label: 'G', sound: 'boom', keyCode: 71, src: boom },
  { label: 'H', sound: 'ride', keyCode: 72, src: ride },
  { label: 'J', sound: 'snare', keyCode: 74, src: snare },
  { label: 'K', sound: 'tom', keyCode: 75, src: tom },
  { label: 'L', sound: 'tink', keyCode: 76, src: tink },
]

const KeyWrapper = ({ sound, label, src, keyCode }) => {
  useEffect(() => {})
  return (
    <div className="key" data-key={keyCode}>
      <kbd>{label}</kbd>
      <span className="sound">{sound}</span>
      <audio src={src} data-key={keyCode}></audio>
    </div>
  )
}

const DrumkitPage = () => {
  const removeTransition = e => {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
  }

  const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
  }
  useEffect(() => {
    window.addEventListener('keydown', playSound)
    const keys = Array.from(document.querySelectorAll('.key'))
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))

    return function cleanup() {
      window.removeEventListener('keydown', playSound)
    }
  }, [])
  return (
    <Container>
      <div className="keys">
        {KEYS.map(key => (
          <KeyWrapper key={key.keyCode} {...key} />
        ))}
      </div>
    </Container>
  )
}
const Container = styled.div`
  background-image: url('${drums}');
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  font-size: 10px;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`

export default DrumkitPage
