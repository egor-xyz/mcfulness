import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledLogo } from 'pages/Home/Home.styles';
import { YBG } from 'assets';

import { Wrapper, Text, Text2 } from './ThankYou.styles';

export const ThankYou: FC = () => (<Wrapper>
  <YBG className='bg' />
  <Link to='/'><StyledLogo /></Link>
  <Text>Your Order is ready</Text>
  <Text2>Sit down,<br /> Slow down<br />and<br />Enjoy</Text2>
</Wrapper>);