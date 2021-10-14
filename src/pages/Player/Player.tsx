// @ts-nocheck
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
margin: 0px;
position: relative;
img {
  width: 50%;
  height: auto;
}
.container {
  position: absolute;
}
.audio {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  bottom: 20px;
  audio {
    transform: translateX(-50%);
    display: none;
  }
}
button {
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-size: 30px;
  opacity: .5;
}
`;

export const Player: FC = () => {
  return (<Wrapper>
    <div className="container">
      <div style={{ marginTop: '-161px' }}>
        <video
          height="100%"
          width="100%"
          className="video-player__viewer"
          video-player-target="video"
          data-action="click->video-player--video-player#togglePlay timeupdate->video-player--video-player#progressUpdate loadedmetadata->video-player--video-player#setVideoDuration"
          src="https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4"
          disablePictureInPicture
          autoPlay
          playsInline
          controls={false}
          loop
          muted
        />
      </div>
      <button onClick={() => document.getElementById('audio').play()}>Play</button>
      <div className="audio">
        <audio controls id="audio">
          <source
            src="https://www.mindfulness-network.org/wp-content/uploads/2018/09/Breath-and-the-Body-6-mins-and-30-sec-9MB.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </Wrapper >)
}