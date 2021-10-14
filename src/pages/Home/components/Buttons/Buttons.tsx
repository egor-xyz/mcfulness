import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Anxious, Busy, Calm, Optimistic, Tired, Jumpy } from 'assets';

import { Wrapper } from './Buttons.styles';

export const Buttons: FC = () => (
  <Link to='/player'>
    <Wrapper>
      <div><Busy style={{ left: 24, top: 7 }} /></div>
      <div><Calm style={{ left: -4, top: -19 }} /></div>
      <div><Optimistic style={{ left: 16, top: -10 }} /></div>
      <div><Anxious style={{ left: 22, top: -14 }} /></div>
      <div><Tired style={{ left: -26, top: -17 }} /></div>
      <div><Jumpy style={{ left: -4, top: -19 }} /></div>
    </Wrapper>
  </Link>
);