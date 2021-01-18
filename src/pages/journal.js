import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'


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
        <h1>Voice Notes</h1>
          <Row>
  <table class="table-responsive">
        <table class="table">
            <h2>Current Note</h2>
            {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
            <button onClick={handleSaveNote} disabled={!note}>
              Save Note
            </button>
            <button onClick={() => setIsListening(prevState => !prevState)}>
              Start/Stop
            </button>
            </table>
            
            <p>{note}</p>
            </table>
          </Row>
          <div class="table-responsive">
  <table class="table">
            <h2>Notes</h2>
            {savedNotes.map(n => (
              <p key={n}>{n}</p>
            ))}
          </table>
</div>
        </div>
      </>
    )
  }




export default Journal