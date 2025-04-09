import styled, { keyframes } from 'styled-components';
import { Colors } from './colors';

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StickyHeader = styled.div`
  position: sticky;
  top: 80px;
  z-index: 10;
  background-color: white;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;

  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${Colors.primaryBlue};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .new-product-btn {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      background-color: ${Colors.primaryBlue};
      color: white;
      border: none;
      padding: 0.45rem 1rem;
      font-size: 0.95rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;
      font-weight: 500;

      svg {
        font-size: 1.2rem;
      }

      &:hover {
        background-color: ${Colors.primaryBlueDark};
      }
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const RefreshIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1.6rem;
  color: ${Colors.textDark};
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
    color: ${Colors.primaryBlue};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const RefreshSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  & > div {
    width: 20px;
    height: 20px;
    border-width: 2px;
  }
`;

export const StyledProductList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 1rem 100px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  flex-grow: 1;
  scroll-behavior: smooth;
`;

export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.textLight};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease;
  align-items: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${fadeSlideIn} 0.4s ease forwards;
  animation-delay: var(--delay, 0ms);

  .left {
    flex: 1;
    min-width: 240px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  }
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: ${Colors.primaryBlue};
  margin: 0;
  font-weight: 600;
  word-break: break-word;
`;

export const ProductDescription = styled.p`
  font-size: 0.95rem;
  color: ${Colors.textDark};
  margin: 0.5rem 0 0;
  word-break: break-word;
  max-width: 600px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: ${Colors.textDark};
  margin: 0;
  font-weight: 600;
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${Colors.backgroundLight};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem;
`;

export const RefreshButton = styled.button`
  background-color: ${Colors.primaryBlue};
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: ${Colors.primaryBlueDark};
  }
  &:disabled {
    background-color: ${Colors.primaryBlueLight};
    cursor: not-allowed;
  }
`;

export const LoadMoreButton = styled.button`
  background-color: ${Colors.primaryBlue};
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  margin: 30px auto 0;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  text-align: center;
  max-width: 300px;
  display: block;
  &:hover {
    background-color: ${Colors.primaryBlueDark};
  }
  &:disabled {
    background-color: ${Colors.primaryBlueLight};
    cursor: not-allowed;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NoMoreItemsMessage = styled.li`
  list-style: none;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.95rem;
  color: ${Colors.textDark};
  background-color: ${Colors.backgroundLight};
  border-radius: 12px;
  margin: 1rem auto 0;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 0.4s ease forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  svg {
    font-size: 1.2rem;
    color: ${Colors.textMedium};
  }
`;

export const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
`;

export const ActionButton = styled.button<{ danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 8px 14px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${Colors.textLight};
  background-color: ${({ danger }) =>
    danger ? Colors.primaryPurple : Colors.primaryBlue};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  svg {
    font-size: 1rem;
    color: ${Colors.textLight};
  }
  &:hover {
    background-color: ${({ danger }) =>
    danger ? Colors.secondaryPurple : Colors.primaryBlueDark};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 90, 124, 0.2);
  }
`;
