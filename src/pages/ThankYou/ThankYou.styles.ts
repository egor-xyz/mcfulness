import styled from 'styled-components';

import { YBG } from 'assets';

export const Wrapper = styled.div`
  max-width: 450px;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
`;

export const StyledYBG = styled(YBG)`
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  z-index: -1;
`;

export const Text = styled.div`
  margin-top: 40px;
  font-size: 40px;
`;

export const Text2 = styled.div`
  position: absolute;
  margin-top: 35%;
  left: 0;
  width: 100%;
  font-size: 35px;
  color: #fff;
`;
