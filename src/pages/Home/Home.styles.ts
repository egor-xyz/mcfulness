import styled from 'styled-components';

import { Logo } from 'assets';

export const Wrapper = styled.div`
background-color: #f1f1f1;
height: 100vh;
overflow: hidden;
`;

export const StyledLogo = styled(Logo)`
  margin-top: 20px;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 70px;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: #000000;
`;