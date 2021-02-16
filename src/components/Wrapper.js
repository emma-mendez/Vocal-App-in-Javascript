import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  padding-top: -60px;
  padding-left: 20px;
  padding-right: 20vw;
  margin-bottom: 20vh;
  overflow-x: visable;
  width: 950px;
  // background: ${props => props.vizColor};

  #defaultCanvas0 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 1000vw;
  }

  svg {
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    margin-top: 90px;
  }

  #white-bg-buttons {
    fill: #19ca90;
  }
`;

export default Wrapper;
