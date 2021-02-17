import React, { useState } from "react";
import UploadService from "../services/upload-files.service";
import wavesurfer from 'wavesurfer.js';

const FourTrackStudioRecorder = () => {
    const [
      progress, setProgress
    ] = useState( 0 );

    const [
      currentFile, setCurrentFile
    ] = useState( null );

    const [
      selectedFiles, setSelectedFiles
    ] = useState( [] );

    const [
      message, setMessage
    ] = useState( "" );

    const [
      fileInfos, setFileInfos
    ] = useState( [] );

    function upload() {
      let wav = selectedFiles[0];
      setCurrentFile ( wav );
  
      UploadService.upload(wav, (event) => {
          setProgress(Math.round((100 * event.loaded) / event.total));
      })
          .then((response) => {
            setMessage(response.data.message);
            return UploadService.getFiles();
          })

        .then((files) => {
            setFileInfos(files.data);
          })

        .catch(() => {
            setProgress (0);
            setMessage ("Could not upload the file!");
            setCurrentFile (wav);
          })
  
        setSelectedFiles (undefined);
      }

function selectFile (e) {
  setCurrentFile(e.target.files[0])
  setProgress( 0 )
  setMessage("")
}


      return (
        <div>
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset-utf-8"></meta>
            </head>
            {/* div where studio waves will be shown */}
    <div id="waveform-container">
      <canvas setFileInfos="true" class="track-container" id="canvas" width="1000" height="100"></canvas>
      <canvas class="track-container2" id="canvas2" width="1000" height="100"></canvas>
      <canvas class="track-container3" id="canvas3" width="1000" height="100"></canvas>
      <canvas class="track-container4" id="canvas4" width="1000" height="100"></canvas>
    </div>
      {/* Create action button */}
    <input type="button" className="buttonJ" id="btn-play" value="play" disabled="disabled"/> 
    <input type="button" className="buttonJ" id="btn-pause" value="pause" disabled="disabled"/> 
    <input type="button" className="buttonJ" id="btn-stop" value="stop" disabled="disabled"/> 



{/* Load the wavesurfer script  using a free CDN */}
<script src="https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.3.7/wavesurfer.min.js"></script>

 {/* Or load it from a local copy  */}
<script src="./path-to/wavesurfer.min.js"></script>

{/* Store the button in objects */}

    <h1>Hello</h1>
          <div className="row">
            <div className="col-8">
              <label className="btn btn-default p-0">
                <input type="file" accept="audio/*" onChange={selectFile} />
              </label>
            </div>
  
            <div className="col-4">
              <button
                className="btn btn-success btn-sm"
                disabled={!currentFile}
                onClick={upload}
              >
                Upload
              </button>
            </div>
          </div>
  
          {currentFile && (
            <div className="progress my-3">
              <div
                className="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: progress + "%" }}
              >
                {progress}%
              </div>
            </div>
          )}
  
          {/* {previewImage && (
            <div>
              <img className="preview" src={previewImage} alt="" />
            </div>
          )} */}
  
          {message && (
            <div className="alert alert-secondary mt-3" role="alert">
              {message}
            </div> 
          )}
  
          <div className="card mt-3">
            <div className="card-header">List of Files</div>
            <ul className="list-group list-group-flush">
              {fileInfos &&
                fileInfos.map((wav, index) => (
                  <li className="list-group-item" key={index}>
                    <a href={wav.url}>{wav.name}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      );
    }
  
function wavesurf () {

  const buttons = {
    play:document.getElementById("btn-play"),
    pause:document.getElementById("btn-pause"),
    stop:document.getElementById("btn-stop")
  }
  
  // configuration of wavesurfer
  const Spectrum = wavesurfer.create({
    container: "audio-spectrum",
    // progressColor: "#03a9f4"
  });
  
  // Handle Play button
  buttons.play.addEventListener("click", function(){
    Spectrum.play();
  
  // Enable/Disable respectively buttons
  buttons.stop.disabled = false;
  buttons.pause.disabled = false;
  buttons.play.disabled = true;
})

}
  export default FourTrackStudioRecorder