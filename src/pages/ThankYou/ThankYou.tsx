import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledLogo } from 'pages/Home/Home.styles';

import { Text } from './ThankYou.styles';

export const ThankYou: FC = () => (<>
  <Link to='/'><StyledLogo /></Link>
  <Text>Your Order is ready</Text>
</>);