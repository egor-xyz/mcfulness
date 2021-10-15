import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledLogo } from 'pages/Home/Home.styles';

import {
  CenterWrapper,
  StyledNext,
  StyledTipsBg,
  Wrapper,
  Text,
  WhiteFooter
} from './Tips.styles';

const tips = [
  {
    fill: '#00C5CE',
    id: 1,
    Tip: () => <span>Look<br />at your<br />meal</span>
  },
  {
    fill: '#7EBC01',
    id: 2,
    Tip: () => <span>Take<br />your first<br />bite, slowly.</span>
  },
  {
    fill: '#C76343',
    id: 3,
    Tip: () => <span>Hear<br />yourself<br />chew.</span>
  },
  {
    fill: '#733A1F',
    id: 4,
    Tip: () => <span>Savor<br />the<br />flavor.</span>
  },
  {
    fill: '#FFBFCA',
    id: 5,
    Tip: () => <span>Put aside<br />your phone<br />and enjoy.</span>
  }
];

export const Tips: FC = () => {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    if (!tips[index + 1]) return;
    setIndex(index + 1);
  }, [index]);

  const { Tip, fill, id } = tips[index];
  const lastSlide = !tips[index + 1];

  return (<Wrapper>
    <Link to='/'><StyledLogo /></Link>
    <CenterWrapper>
      <StyledTipsBg fill={fill} />
      <Text>
        {id}.<br />
        <Tip />
      </Text>
    </CenterWrapper>
    <WhiteFooter />
    {!lastSlide && (
      <StyledNext onClick={goNext} />
    )}
  </Wrapper>);
};