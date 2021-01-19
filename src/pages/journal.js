import React, { useState, useEffect } from 'react';
import '../App.css';

  
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Journal() {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])
  
    useEffect(() => {
      handleListen()
    }, [isListening])
  
    const handleListen = () => {
      if (isListening) {
        mic.start()
        mic.onend = () => {
          console.log('continue..')
          mic.start()
        }
      } else {
        mic.stop()
        mic.onend = () => {
          console.log('Stopped Mic on Click')
        }
      }
      mic.onstart = () => {
        console.log('Mics on')
      }
  
      mic.onresult = event => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        console.log(transcript)
        setNote(transcript)
        mic.onerror = event => {
          console.log(event.error)
        }
      }
    }
  
    const handleSaveNote = () => {
      setSavedNotes([...savedNotes, note])
      setNote('')
    }
  
    return (
      <>
      <div class="container">
      <div class="row">
      <div class="col-lg-12 col-lg-6 col-lg-8">
      <h1 class="h1">Voice Notes</h1>
      <div class="table-responsive">
      <table>
            <h2 class="h2">Current Note</h2>
            <div class="p">
            { isListening ? <span >🎙️</span> : <span>🛑🎙️</span>}
            <br></br>
            <button class="buttonJ" 
            onClick={() => setIsListening(prevState => !prevState)}>
              Start/Stop
            </button>
            <button class= "buttonJ" onClick={handleSaveNote} disabled={!note}>
            Save 
            </button>
            </div>
            <table class="boarder"> 
            <div>
            <p class="note">{note}</p>
            </div>
            </table>
            </table>
            </div>
          </div>
          </div>
          <br></br>
          <div class="table-responsive2">
          <table >
            <h2 class="h2">Notes</h2>
            <table class="boarder"> 
            <div >
                <p class="note">
            {savedNotes.map(n => (
              <p key={n}>{n}</p>
            ))}          
                    </p></div>
   
            </table>
            <table class="boarder"> 
            <br></br>
            </table>
            <div>
            <p class="note"></p>
            </div>
            <button class= "buttonJ" >Download</button>
        </table>
      </div> 
      </div> 
      </>
    )
  }




export default Journal