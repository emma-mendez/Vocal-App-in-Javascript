import React, { useRef, useEffect } from "react";
// eslint-disable-next-line
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "../utilities";
import { Link } from 'react-router-dom';

function FaceRecognition () {
  

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
if (canvasRef.current !== null) {
  const ctx = canvasRef.current.getContext("2d");
  requestAnimationFrame(()=>{drawMesh(face, ctx)});
} 
}
};


useEffect(()=>{runFacemesh()});

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
    <br></br>
    <h1 className='facerecmargin'>Instructions: Open Your Mouth - Have Fun Giving Your Face/Articulators A Good Stretch </h1>
    <h2>Fun Updates Coming Soon...</h2>
    <button 
    class="buttonzing"> 
    <Link to="/7Ygihbjnkbdafhisyf78re7t94ythiy5eht5io4y875erfygaikhbjadvchbdsvkdflmblgflg;knbjdhfgfiruv"
    className='blacktextbutton' >Back</Link> 
    </button>
  </div>
  <div>
  </div>
  </>
);
}

export default FaceRecognition;