import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledLogo } from 'pages/Home/Home.styles';

import { StyledFivetips, Wrapper, Title, Text, StyledYBG } from './ThankYou.styles';

export const ThankYou: FC = () => (<Wrapper>
  <StyledYBG />
  <Link to='/'><StyledLogo /></Link>
  <Title>Your Order<br />is ready</Title>
  <Text>Sit down,<br /> Slow down<br />and<br />Enjoy</Text>
  <StyledFivetips />
</Wrapper>);