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
  bottom: 0;
  left: 50%;
  width: 140%;
  z-index: -1;
  transform: translateX(-50%);
`;

export const Title = styled.div`
  margin-top: 10px;
  font-size: 34px;
  font-weight: bold;
`;

export const Text = styled.div`
  position: fixed;
  left: 0;
  bottom: 250px;
  width: 100%;
  font-size: 40px;
  line-height: 70px;
  font-weight: 600;
  font-size: 48px;
  color: #fff;
`;

export const StyledFivetips = styled(Fivetips)`
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
`;