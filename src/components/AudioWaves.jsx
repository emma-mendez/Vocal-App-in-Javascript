import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'


const WavesContainer = styled.div`
  position: relative;
  min-height: 300px;
  z-index: 100;

  > div {
    max-width: 780px;
    text-align: center;
    margin: 0 auto;
  }

  h2 {
    color: #ffffff;
    font-size: 26px;
    line-height: 36px;
    font-weight: 300;
  }
`;

const AudioPlayerContainer = styled.div`
  audio {
    margin-bottom: 10px;
  }
`;

class AudioWaves extends React.Component {
  render() {
    const { recordingUrls } = this.props;

    const waves = recordingUrls.map(url => (
      <AudioPlayerContainer key={url}>
        <audio controls={true} src={url} />
      </AudioPlayerContainer>
    ));

    return (
      // <WavesContainer>
        <div className="cassettecontainer">
          <h2 className='blueblock'>
            Record your freestyle!
          </h2>
          <button className='buttonf'>
          <Link 
          to='GCVJHIUH7y8tygujghbkVGTF67TGYHbkhjgvcukjlmkljhjklnj,.kjuygu'>
            Back
            </Link>
            </button>
          {waves}
        </div>
      // </WavesContainer>
    );
  }
}

export default AudioWaves;
