import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "../utilities";
import {Button} from "react-bootstrap";
import { useHistory, Link } from 'react-router-dom';

function FaceRecognition () {
  
  let history = useHistory();

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
// load facemesh
const runFacemesh = async () => {  
  const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
  setInterval(() => {
    detect(net);
  }, 10);
};

// dection function
const detect = async (net) => {
  if (
    typeof webcamRef.current !== "undefined" &&
    webcamRef.current !== null &&
    webcamRef.current.video.readyState === 4
  ) {
    // get video props
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

   
//  setting the video width and canvas width
webcamRef.current.video.width = videoWidth;
webcamRef.current.video.height = videoHeight;

canvasRef.current.width = videoWidth;
canvasRef.current.height = videoHeight;

// Detection
const face = await net.estimateFaces({input:video});
console.log(face);

// canvas drawing
const ctx = canvasRef.current.getContext("2d");
requestAnimationFrame(()=>{drawMesh(face, ctx)});
}
};


useEffect(()=>{runFacemesh()}, []);

const redirect = () => {
  history.push('/Home');
}

console.log(canvasRef)
console.log(webcamRef)
return (
  <>
  <div className="App">
    <header className="App-header">
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
    </header>
    <button 
    class="buttonf"
    > <Link to="/page3">Back</Link> </button>
  </div>
  <div>
  </div>
  </>
);
}

export default FaceRecognition;