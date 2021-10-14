// @ts-nocheck
import { FC, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

import { Start, Stop } from 'assets';

const Wrapper = styled.div`
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
}
`;

export const Player: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [redirect, setRedirect] = useState<string>();
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
      setTimeout(() => {
        setRedirect('/thank-you');
      }, 1000);
      return;
    }
    audioRef.current?.play();
    setIsPlaying(true);
  }, [audioRef.current, isPlaying]);

  if (redirect) return <Redirect to={redirect} />;

  return (<Wrapper>
    <div className='video'>
      <video
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

    {isPlaying ? (
      <Stop
        className='button'
        onClick={togglePlay}
      />
    ) : (
      <Start
        className='button'
        onClick={togglePlay}
      />
    )}

    <div className='audio'>
      <audio
        controls
        id='audio'
        ref={audioRef}
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