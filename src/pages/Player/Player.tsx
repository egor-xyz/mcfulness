// @ts-nocheck
import { FC } from 'react';
import styled from 'styled-components';

import { ReactComponent as Button } from 'assets/fakeRound.svg';

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
.button {
  position: fixed;
  left: 50%;
  bottom: 50px;
  width: 100px;
  height: 100px;
  transform: translateX(-50%);
}
`;

export const Player: FC = () => {
  return (<Wrapper>
    <div className='video'>
      <video
        // height="100%"
        // width="100%"
        autoPlay
        disablePictureInPicture
        loop
        muted
        playsInline
        className='video-player__viewer'
        controls={false}
        src='https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4'
        video-player-target='video'
      />
    </div>

    <Button
      className='button'
      onClick={() => document.getElementById('audio').play()}
    />

    <div className='audio'>
      <audio
        controls
        id='audio'
      >
        <source
          src='https://www.mindfulness-network.org/wp-content/uploads/2018/09/Breath-and-the-Body-6-mins-and-30-sec-9MB.mp3'
          type='audio/mpeg'
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  </Wrapper >);
};