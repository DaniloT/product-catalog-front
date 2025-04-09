import styled, { keyframes } from 'styled-components';
import { Colors } from './colors';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerCircle = styled.div`
  border: 8px solid ${Colors.textLight};
  border-top: 8px solid ${Colors.primaryBlue};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1.5s linear infinite;
`;
