import styled from 'styled-components';
import { Colors } from './colors';
import { IconButton } from '@mui/material';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${Colors.backgroundGray};
  padding: 20px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background-color: ${Colors.textLight};
  padding: 48px 40px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 420px;
  width: 100%;
  text-align: center;
`;

export const Logo = styled.img`
  width: 140px;
  height: auto;
  margin-bottom: 10px;
  align-self: center;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 24px;
  color: ${Colors.primaryBlue};
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.textLight};
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  padding: 12px 16px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    border-color: ${Colors.secondaryTurquoise};
    outline: none;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledPasswordInput = styled(Input)`
  position: absolute;
  padding-right: 40px;
`;

export const PasswordToggleButton = styled(IconButton)`
  position: absolute;
  top: 2px;
  left: 87%;
  background: none;
`;

export const SubmitButton = styled.button`
  background-color: ${Colors.primaryBlue};
  color: ${Colors.textLight};
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${Colors.hoverBlue};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: -10px 0 10px;
  width: 100%;
  text-align: left;
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid ${Colors.textLight};
  border-top: 3px solid ${Colors.accentGold};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: auto;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
