import styled from 'styled-components';
import { Colors } from './colors';

export const Backdrop = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  &.hide {
    opacity: 0;
    visibility: hidden;
  }
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  z-index: 1000;
  text-align: center;
  transform: translateY(-10px);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  &.hide {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const ModalButton = styled.button<{ variant?: 'cancel' | 'confirm' }>`
  background-color: ${({ variant }) =>
    variant === 'confirm' ? Colors.modalRed : Colors.modalGray};
  color: white;
  padding: 0.6rem 1.2rem;
  margin: 1rem 0.5rem 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: ${({ variant }) =>
    variant === 'confirm' ? Colors.modalRedHover : Colors.modalGrayHover};
  }
`;
