// display tracks by waves - different colours for each track would be a nice touch.
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


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
<>
<script type="text/javascript" src="https://code.jquery.com/jquery.min.js"></script>
//  this src link to framework will handel interaction with the browser and exports .wav files
  <script src="/recorder.js"></script>
  
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
          </>
                }
          });
          
      });

      