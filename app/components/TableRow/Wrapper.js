import styled from 'styled-components';

const Wrapper = styled.tr`
  width: 100%;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;
  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
