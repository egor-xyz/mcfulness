import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledLogo } from 'pages/Home/Home.styles';

import { Wrapper, Text, Text2, StyledYBG } from './ThankYou.styles';

export const ThankYou: FC = () => (<Wrapper>
  <StyledYBG />
  <Link to='/'><StyledLogo /></Link>
  <Text>Your Order is ready</Text>
  <Text2>Sit down,<br /> Slow down<br />and<br />Enjoy</Text2>
</Wrapper>);