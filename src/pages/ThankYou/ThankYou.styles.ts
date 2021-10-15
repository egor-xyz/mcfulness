import styled from 'styled-components';

import { Fivetips, YBG } from 'assets';

export const Wrapper = styled.div`
  max-width: 450px;
  position: relative;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
`;

export const StyledYBG = styled(YBG)`
  position: absolute;
  bottom: -30px;
  left: 50%;
  width: 100%;
  z-index: -1;
  transform: translateX(-50%);
`;

export const Title = styled.div`
  margin-top: 10px;
  font-size: 34px;
  font-weight: bold;
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  bottom: 270px;
  width: 100%;
  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  font-size: 48px;
  color: #fff;
  margin-bottom: 40px;
`;

export const StyledFivetips = styled(Fivetips)`
  display: block;
  margin: 0 auto;
`;