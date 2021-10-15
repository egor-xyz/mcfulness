// @ts-nocheck

import React from 'react';
import * as faceApi from 'face-api.js';
import { Link } from 'react-router-dom';

import { StyledLogo } from 'pages/Home/Home.styles';

const expressionMap = {
  angry: '🤬',
  disgusted: '🤢',
  fearful: '😧',
  happy: '😄',
  neutral: '😶',
  sad: '😞',
  surprised: '😲'
};

export class FaceApi extends React.Component {
  video = React.createRef();

  state = { expressions: [] };

  componentDidMount() {
    this.run();
  }

  log = (...args) => {
    console.log(...args);
  };

  run = async () => {
    this.log('run started');
    try {
      await faceApi.nets.tinyFaceDetector.load('/models/');
      await faceApi.loadFaceExpressionModel('/models/');
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' }
      });

      this.video.current.srcObject = this.mediaStream;
    } catch (e) {
      this.log(e.name, e.message, e.stack);
    }
  };

  onPlay = async () => {
    if (
      this.video.current.paused ||
      this.video.current.ended ||
      !faceApi.nets.tinyFaceDetector.params
    ) {
      setTimeout(() => this.onPlay());
      return;
    }

    const options = new faceApi.TinyFaceDetectorOptions({
      inputSize: 512,
      scoreThreshold: 0.5
    });

    const result = await faceApi
      .detectSingleFace(this.video.current, options)
      .withFaceExpressions();

    if (result) {
      this.log(result);
      const expressions = result.expressions.reduce(
        (acc, { expression, probability }) => {
          // acc.push([expressionMap[expression], probability]);
          acc.push([`${expressionMap[expression]} ${expression}`, probability]);
          return acc;
        },
        []
      );
      this.log(expressions);
      this.setState(() => ({ expressions }));
    }

    setTimeout(() => this.onPlay(), 1000);
  };

  render() {
    const { expressions } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <div>
          <Link to='/'> <StyledLogo /></Link>
          <h1>Face Recognition Webcam</h1>
          <div>
            {expressions
              .sort((a, b) => b[1] - a[1])
              .filter((_, i) => i < 3)
              .map(([e, w], i) => {
                if (i > 0) return <></>;
                return (
                  <p
                    key={e + w}
                    style={{
                      fontSize: '40px',
                      textAlign: 'center',
                    }}
                  >
                    {e}
                  </p>
                );
              })}
          </div>
          <div style={{ position: 'relative' }}>
            <video
              autoPlay
              muted
              playsInline
              ref={this.video}
              style={{
                bottom: 0,
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
                width: '100%'
              }}
              onPlay={this.onPlay}
            />
          </div>
        </div>
      </div>
    );
  }
}