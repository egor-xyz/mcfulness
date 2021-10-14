import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  font-size: 0;
  > div {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 50%;
    height: 150px;
    /* border: 1px solid #000; */
  }
  svg {
    position: absolute;
    left: 0;
  }
`;