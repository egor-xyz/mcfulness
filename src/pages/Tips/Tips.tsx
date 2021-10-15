import { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledLogo } from 'pages/Home/Home.styles';

import { tipItems } from './tipItems';
import {
  CenterWrapper,
  StyledNext,
  StyledTipsBg,
  Wrapper,
  Text,
  WhiteFooter,
  StyledWhiteRound,
  StyledLastMessage
} from './Tips.styles';

export const Tips: FC = () => {
  const [index, setIndex] = useState(0);

  const goNext = useCallback(() => {
    if (!tipItems[index + 1]) return;
    setIndex(index + 1);
  }, [index]);

  const { Tip, fill, id } = tipItems[index];
  const lastSlide = !tipItems[index + 1];

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

    {lastSlide && (<>
      <StyledWhiteRound />
      <StyledLastMessage />
    </>)}
  </Wrapper>);
};