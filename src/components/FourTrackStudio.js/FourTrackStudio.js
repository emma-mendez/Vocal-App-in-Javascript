import React from 'react';
import React, { Component } from 'react'

export class FourTrackStudio extends Component {
  render() {
    return (
      <div>
    {/* <title>ACS Vocal Studio</title> */}
    <style
      type="text/css">
            .body {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
                margin: 0;
            }
            /* .holder { */
                /* background-color: #4c474c; */
                /* background-image: -webkit-gradient(linear, left bottom, left top, from(#4c474c), to(#141414)); */
                /* background-image: -o-linear-gradient(bottom, #4c474c 0%, #141414 100%); */
                /* background-image: linear-gradient(0deg, #4c474c 0%, #141414 100%); */
                /* border-radius: 50px; */
            /* } */
            [data-role="controls"] > button {
                margin: 50px auto;
                outline: none;
                display: block;
                border: none;
                background-color: #D9AFD9;
                background-image: -webkit-gradient(linear, left bottom, left top, from(#D9AFD9), to(#97D9E1));
                background-image: -o-linear-gradient(bottom, #D9AFD9 0%, #97D9E1 100%);
                background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
                width: 100px;
                height: 100px;
                border-radius: 50%;
                text-indent: -100em;
                cursor: pointer;
                -webkit-box-shadow: 0px 5px 5px 2px rgba(0,0,0,0.3) inset, 
                    0px 0px 0px 30px #fff, 0px 0px 0px 35px #333;
                        box-shadow: 0px 5px 5px 2px rgba(0,0,0,0.3) inset, 
                    0px 0px 0px 30px #fff, 0px 0px 0px 35px #333;
            }   
            [data-role="controls"] > button:hover {
                background-color: #ee7bee;
                background-image: linear-gradient(0deg, #ee7bee 0%, #6fe1f5 100%);
            }
            [data-role="controls"] > button[data-recording="true"] {
                background-color: #ff2038;
                background-image: -webkit-gradient(linear, left bottom, left top, from(#ff2038), to(#b30003));
                background-image: -o-linear-gradient(bottom, #ff2038 0%, #b30003 100%);
                background-image: linear-gradient(0deg, #ff2038 0%, #b30003 100%);
            }
            [data-role="recordings"] > .row {
                width: auto;
                height: auto;
                padding: 20px;
            }
            [data-role="recordings"] > .row > audio {
                outline: none;
            }
            [data-role="recordings"] > .row > a {
                display: inline-block;
                text-align: center;
                font-size: 20px;
                line-height: 50px;
                vertical-align: middle;
                width: 50px;
                height: 50px;
                border-radius: 20px;
                color: #fff;
                font-weight: bold;
                text-decoration: underline;
                background-color: #0093E9;
                background-image: -webkit-gradient(linear, left bottom, left top, from(#0093E9), to(#80D0C7));
                background-image: -o-linear-gradient(bottom, #0093E9 0%, #80D0C7 100%);
                background-image: linear-gradient(0deg, #0093E9 0%, #80D0C7 100%);
                float: right;
                margin-left: 20px;
                cursor: pointer;
            }
            [data-role="recordings"] > .row > a:hover {
                text-decoration: none;
            }
            [data-role="recordings"] > .row > a:active {
                background-image: -webkit-gradient(linear, left top, left bottom, from(#0093E9), to(#80D0C7));
                background-image: -o-linear-gradient(top, #0093E9 0%, #80D0C7 100%);
                background-image: linear-gradient(180deg, #0093E9 0%, #80D0C7 100%);
            }
      body {
        font-family: 'Helvetica neue', Helvetica, Arial, sans-serif;
      }

      #titles, #waveform-container {
        margin: 24px auto;
        width: 1000px;
      }

      #demo-controls {
        margin: 0 auto 24px auto;
        width: 1000px;
        display: flex;
        align-items: center;
      }
      .track-container {
    background-color: blue
}
      .track-container2 {
    background-color: pink
}
      .track-container3 {
    background-color: yellow
}
      .track-container4 {
    background-color: green
}
      #demo-controls button {
        background: #fff;
        border: 1px solid #919191;
        cursor: pointer;
      }

      #audio {
        flex: 0 0 30%;
      }

      #controls {
        flex: 1;
        margin-left: 1em;
      }
    </style>
  </head>
  <body>
    <div id="titles">
      <h1>Your Studio</h1>
      <p>
        Load your track in .wav format.      </p>
      
      <h2>Four Track Recorder</h2>
      <p>
    <div id="waveform-container">
      <canvas class="track-container" id="canvas" width="1000" height="250"></canvas>
      <canvas class="track-container2" id="canvas2" width="1000" height="250"></canvas>
      <canvas class="track-container3" id="canvas3" width="1000" height="250"></canvas>
      <canvas class="track-container4" id="canvas4" width="1000" height="250"></canvas>

      
      <div>
        <label for="offset">Offset</label>
        <input type="range" id="offset" value="0">
      </div>
    </div>

    <div id="demo-controls">
      <audio id="audio" controls="controls">
        <source src="07023003.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

      <div id="controls">
        <button data-action="load-dat">Load binary waveform data</button>
        <button data-action="load-json">Load JSON waveform data</button>
        <button data-action="generate">Generate using Web Audio API</button>
      </div>
    </div>

    <script src="waveform-data.js"></script>
    <script>
      let waveformData = null;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const canvas = document.getElementById('canvas');
      const canvas2 = document.getElementById('canvas2');
      const canvas3 = document.getElementById('canvas3');
      const canvas4 = document.getElementById('canvas4');


      const slider = document.getElementById('offset');

      const scaleY = (amplitude, height) => {
        const range = 256;
        const offset = 128;

        return height - ((amplitude + offset) * height) / range;
      };

      const drawWaveform = (canvas, waveform, offsetX) => {
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (offsetX > waveform.length - canvas.width) {
          offsetX = waveform.length - canvas.width;
        }

        const waveformHeight = canvas.height / waveform.channels;

        for (let c = 0, offsetY = 0; c < waveform.channels; c++, offsetY += waveformHeight) {
          const channel = waveform.channel(c);

          ctx.beginPath();

          for (let x = 0, i = offsetX; x < canvas.width && i < waveform.length; x++, i++) {
            const val = channel.max_sample(i);

            ctx.lineTo(x + 0.5, offsetY + scaleY(val, waveformHeight) + 0.5);
          }

          for (let x = canvas.width - 1, i = offsetX + canvas.width - 1; x >= 0; x--, i--) {
            const val = channel.min_sample(i);

            ctx.lineTo(x + 0.5, offsetY + scaleY(val, waveformHeight) + 0.5);
          }

          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }
      }

      const updateOffsetSlider = (waveform) => {
        slider.min = 0;
        slider.max = waveform.length - canvas.width;
        slider.max = waveform.length - canvas2.width;
        slider.max = waveform.length - canvas3.width;
        slider.max = waveform.length - canvas4.width;
slider.step = 1;
        slider.value = 0;
      };

      slider.addEventListener('input', (event) => {
        const offsetX = parseInt(event.target.value, 10);

        drawWaveform(canvas, waveformData, offsetX);
        drawWaveform(canvas2, waveformData, offsetX);
        drawWaveform(canvas3, waveformData, offsetX);
        drawWaveform(canvas4, waveformData, offsetX);

      });

      document.querySelector('button[data-action="load-dat"]').addEventListener('click', function() {
        fetch('07023003-2channel.dat')
          .then(response => {
            if (response.ok) {
              return response.arrayBuffer();
            }
            else {
              throw new Error(`${response.status} ${response.statusText}`);
            }
          })
          .then(buffer => WaveformData.create(buffer))
          .then(waveform => {
            console.log(`Waveform has ${waveform.channels} channels`);
            console.log(`Waveform has length ${waveform.length} points`);

            updateOffsetSlider(waveform);

            drawWaveform(canvas, waveform, 0);
            drawWaveform(canvas2, waveform, 0);
            drawWaveform(canvas3, waveform, 0);
            drawWaveform(canvas4, waveform, 0);

            waveformData = waveform;
          })
          .catch(err => {
            console.error(err.message);
          });
      });

      document.querySelector('button[data-action="load-json"]').addEventListener('click', function() {
        fetch('07023003-2channel.json')
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            else {
              throw new Error(`${response.status} ${response.statusText}`);
            }
          })
          .then(json => WaveformData.create(json))
          .then(waveform => {
            console.log(`Waveform has ${waveform.channels} channels`);
            console.log(`Waveform has length ${waveform.length} points`);

            updateOffsetSlider(waveform);

            drawWaveform(canvas, waveform, 0);
            drawWaveform(canvas2, waveform, 0);
            drawWaveform(canvas3, waveform, 0);
            drawWaveform(canvas4, waveform, 0);

            waveformData = waveform;
          })
          .catch(err => {
            console.error(err.message);
          });
      });

      document.querySelector('button[data-action="generate"]').addEventListener('click', function() {
        fetch('07023003.mp3')
          .then(response => {
            if (response.ok) {
              return response.arrayBuffer();
            }
            else {
              throw new Error(`${response.status} ${response.statusText}`);
            }
          })
          .then(buffer => {
            const audioContext = new AudioContext();

            const options = {
              audio_context: audioContext,
              array_buffer: buffer,
              scale: 128
            };

            return new Promise((resolve, reject) => {
              WaveformData.createFromAudio(options, (err, waveform) => {
                if (err) {
                  reject(err);
                }
                else {
                  resolve(waveform);
                }
                audioContext.close();
              });
            });
          })
          .then(waveform => {
            console.log(`Waveform has ${waveform.channels} channels`);
            console.log(`Waveform has length ${waveform.length} points`);

            updateOffsetSlider(waveform);

            drawWaveform(canvas, waveform, 0);
            drawWaveform(canvas2, waveform, 0);
            drawWaveform(canvas3, waveform, 0);
            drawWaveform(canvas4, waveform, 0);

            waveformData = waveform;
          })
          .catch(err => {
            console.error(err.message);
          });
      });
      <script type="text/javascript" src="https://code.jquery.com/jquery.min.js"></script>
       <!--  this src link to framework will handel interaction with the browser and exports .wav files -->
        <script src="/recorder.js"></script>
        <!--  -->
        <script>
            jQuery(document).ready(function() {
                // defining my $ sign JQuery 
                var $ = jQuery;
                // custom variable called my recorder which will call the methods to start, stop and store the recordings locally - intended to store in mongo at a later date
                var myRecorder = {
                    objects: {
                        context: null,
                        stream: null,
                        recorder: null
                    },
                    init: function () {
                        // this method gets the audio context and stores the verification needed only once. Manually initialised by user
                        if (null === myRecorder.objects.context) {
                            myRecorder.objects.context = new (
                                window.AudioContext || window.webkitAudioContext
                            );
                        }
                    },
                    start: function () {
                        var options = {audio: true, video: false};
                        navigator.mediaDevices.getUserMedia(options).then(function (stream) {
                            myRecorder.objects.stream = stream;
                            myRecorder.objects.recorder = new Recorder(
                                    myRecorder.objects.context.createMediaStreamSource(stream),
                                    {numChannels: 1}
                            );
                            myRecorder.objects.recorder.record();
                        }).catch(function (err) {});
                    },
                    stop: function (listObject) {
                        if (null !== myRecorder.objects.stream) {
                            myRecorder.objects.stream.getAudioTracks()[0].stop();
                        }
                        if (null !== myRecorder.objects.recorder) {
                            myRecorder.objects.recorder.stop();

                            // Validate object
                            if (null !== listObject
                                    && 'object' === typeof listObject
                                    && listObject.length > 0) {
                            // export Wav file, exports the audio recording into a wav file which is binary and passes it along a a blob or binary string
                            myRecorder.objects.recorder.exportWAV(function (blob) {
                                    var url = (window.URL || window.webkitURL)
                                            .createObjectURL(blob);
                                            // this URL is only accessable locally on my CPU. It will get passed along as src attr for the audio object.

                                // prep playback
                                var audioObject = $('<audio controls></audio>')
                                            .attr('src', url);

                                
                                // prep download link
                                var downloadObject = $('<a>&#9660;</a>')
                                            .attr('href', url)
                                            .attr('download', new Date().toUTCString() + '.wav');

                                    // Wrap everything in a row
                                    var holderObject = $('<div class="row"></div>')
                                            .append(audioObject)
                                            .append(downloadObject);

                                    // Append to the list
                                    listObject.append(holderObject);
                                });
                            }
                        }
                    }
                };
        
        // prep the recordings list
        var listObject = $('[data-role="recordings"]');

        // prep the record button 
        $('[data-role="controls"] > button').click(function () {
                    // Initialize the recorder
                    myRecorder.init();


        // GET STATE FOR Button
        var buttonState = !!$(this).attr('data-recording');
        
        // Toggle
        if (!buttonState) {
                        $(this).attr('data-recording', 'true');
                        myRecorder.start();
                    } else {
                        $(this).attr('data-recording', '');
                        myRecorder.stop(listObject);
                    }
                });
            });
        </script>
    <body>
        <div class="holder">
            <div data-role="controls">
                <button>Record</button>
            </div>
            <div data-role="recordings"></div>
        </div>
 
        
</div>
    )
  }
}
export default FourTrackStudio
