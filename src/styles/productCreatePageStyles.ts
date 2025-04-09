import styled from 'styled-components';
import { Colors } from './colors';

export const PageWrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
`;

export const Title = styled.h1`
  color: ${Colors.primaryBlue};
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  background-color: white;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${Colors.textDark};
  margin-bottom: 0.5rem;
  display: block;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${Colors.primaryBlueLight};
  width: 100%;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${Colors.primaryBlue};
    box-shadow: 0 0 0 2px rgba(0, 90, 124, 0.15);
  }
`;

export const SubmitButton = styled.button`
  background-color: ${Colors.primaryPurple};
  color: ${Colors.textLight};
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  &:hover {
    background-color: ${Colors.secondaryPurple};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonSpinner = styled.div`
  border: 2px solid white;
  border-top: 2px solid ${Colors.secondaryPurple};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  border: 2px solid ${Colors.primaryBlue};
  color: ${Colors.primaryBlue};
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background-color: ${Colors.primaryBlueLight};
    color: white;
    border-color: ${Colors.primaryBlueDark};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
