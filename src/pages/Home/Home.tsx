import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Buttons } from './components';
import { Wrapper, Title, StyledLogo } from './Home.styles';

export const Home: FC = () => (<Wrapper>
  <Link to='/face'> <StyledLogo /></Link>
  <Title>What&apos;s your mood?</Title>
  <Buttons />
</Wrapper>);