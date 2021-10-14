// @ts-nocheck
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
margin: 0px;
img {
  width: 50%;
  height: auto;
}
.container {
  position: absolute;
}
.child {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 22%;
  margin: -25px 0 0 -25px;
}
`;

export const Player: FC = () => (<Wrapper>
  <div className="container">
    <div style={{ marginTop: '-161px' }}>
      <video
        height="926"
        width="428"
        className="video-player__viewer"
        video-player-target="video"
        data-action="click->video-player--video-player#togglePlay timeupdate->video-player--video-player#progressUpdate loadedmetadata->video-player--video-player#setVideoDuration"
        src="https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4" controlslist="nodownload"
        disablePictureInPicture
        autoPlay
        loop
        muted />
    </div>
    <div className="child">
      <audio controls>
        <source
          src="https://www.mindfulness-network.org/wp-content/uploads/2018/09/Breath-and-the-Body-6-mins-and-30-sec-9MB.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</Wrapper>)