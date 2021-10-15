import styled from 'styled-components';

export const Wrapper = styled.div`
max-width: 450px;
margin: 0 auto !important;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
margin: 0px;
position: relative;
background-color: #000;
.video {
  height: 100%;
  overflow: hidden;
}
.audio {
  display: none;
  audio {
    transform: translateX(-50%);
  }
}
.button {
  position: fixed;
  left: 50%;
  bottom: 50px;
  width: 100px;
  height: 100px;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
}
`;

export const Title = styled.div`
  font-size: 34px;
  color: #fff;
  position: fixed;
  bottom: 170px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 300px;
  text-align: left;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 11px;
`;