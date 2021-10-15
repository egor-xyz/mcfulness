import styled from 'styled-components';

import { TipsBg, Next } from 'assets';

export const Wrapper = styled.div`
  max-width: 450px;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;
`;

export const CenterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 60%;
  width: 100%;
  transform: translateY(-50%);
`;

export const StyledTipsBg = styled(TipsBg)`
  width: 100%;
`;

export const WhiteFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20%;
  background: #fff;
`;

export const Text = styled.div`
  height: 100%;
  text-align: left;
  position: absolute;
  left: 0;
  width: 100%;
  top: 20%;
  padding: 0 40px;
  font-size: 40px;
  color: #fff;
  font-weight: bold;
`;

export const StyledNext = styled(Next)`
  position: fixed;
  bottom: 20%;
  left: 50%;
  height: 140px;
  transform: translate3d(-50%, 50%, 0);
`;