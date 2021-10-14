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
button {
  position: fixed;
  left: 20px;
  bottom: 20px;
  font-size: 30px;
  opacity: .5;
}
`;

export const Player: FC = () => {
  return (<Wrapper>
    <div className="video">
      <video
        // height="100%"
        // width="100%"
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
  </Wrapper >)
}