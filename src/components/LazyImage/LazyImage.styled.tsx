import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const LazyLoad = styled.img`
  &.loading {
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s ${Shine} linear infinite;
  }
`;
