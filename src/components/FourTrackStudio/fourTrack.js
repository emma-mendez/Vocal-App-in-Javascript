import React from 'react'
import './style.css';



function FourTrack() {
  return (
    <>
      <h1>Your Studio</h1>
        Load your track in .wav format.
      
      <h2>Four Track Recorder</h2>

      
    <div id="waveform-container">
      <canvas class="track-container" id="canvas" width="1000" height="50"></canvas>
      <canvas class="track-container2" id="canvas2" width="1000" height="50"></canvas>
      <canvas class="track-container3" id="canvas3" width="1000" height="50"></canvas>
      <canvas class="track-container4" id="canvas4" width="1000" height="50"></canvas>
      

      <div>
        <label for="offset">Offset</label>
        <input type="range" id="offset" value="0" />
      </div>

    <div id="demo-controls"
        controls="controls" />
        <source src="07023003.mp3" type="audio/mpeg" />
      </div>

      <div id="controls">
        <button data-action="load-dat">Upload Track</button>
        <button data-action="load-json">New Track</button>
        <button data-action="generate">Save</button>
      </div>

    <script src="waveform-data.js"></script>
        <div class="holder">
            <div data-role="controls">
                <button>Record</button>
            </div>
            <div data-role="recordings"></div>
        </div>
    </>

  );
  
}

export default FourTrack;