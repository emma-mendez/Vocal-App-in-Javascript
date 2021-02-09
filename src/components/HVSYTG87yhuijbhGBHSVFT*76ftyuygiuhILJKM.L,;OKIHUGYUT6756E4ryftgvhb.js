import React, { useState } from "react";
import UploadService from "../services/upload-files.service";


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
            
    <div id="waveform-container">
      <canvas setFileInfos="true" class="track-container" id="canvas" width="1000" height="100"></canvas>
      <canvas class="track-container2" id="canvas2" width="1000" height="100"></canvas>
      <canvas class="track-container3" id="canvas3" width="1000" height="100"></canvas>
      <canvas class="track-container4" id="canvas4" width="1000" height="100"></canvas>
    </div>
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
  

  export default FourTrackStudioRecorder