// @ts-nocheck
import { FC, useCallback, useRef, useState } from 'react';
import { Redirect } from 'react-router';

import { Start, Stop } from 'assets';

import { Wrapper, Title } from './Player.styles';

export const Player: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [redirect, setRedirect] = useState<string>();
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause();
      setTimeout(() => {
        setRedirect('/thank-you');
      }, 500);
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

    {!isPlaying && (
      <Title >
        Mindfulness<br />
        of deep breaths
      </Title>
    )}

    {isPlaying ? (
      <Stop
        className='button'
        style={{
          opacity: 0.5,
          transform: 'scale(0.7) translateX(-70%)',
          transformOrigin: 'center center'
        }}
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