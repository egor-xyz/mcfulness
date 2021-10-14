import { FC } from 'react';

import { Buttons } from './components';
import { Wrapper, Title, StyledLogo } from './Home.styles';

export const Home: FC = () => (<Wrapper>
  <StyledLogo />
  <Title>What&apos;s your <br />state of mind?</Title>
  <Buttons />
</Wrapper>);