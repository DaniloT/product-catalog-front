import styled from 'styled-components';
import { Colors } from './colors';
import { IconButton } from '@mui/material';
import { AccountCircleOutlined } from '@mui/icons-material';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${ Colors.primaryPurple };
  padding: 15px 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: ${ Colors.secondaryPurple };
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${Colors.textLight};
  flex-grow: 1;
`;

export const Logo = styled.img`
  height: 40px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${Colors.textLight};
  margin-right: 20px;
  gap: 10px;
`;

export const IconButtonStyled = styled(IconButton)`
  &:hover {
    background-color: ${Colors.secondaryTurquoise};
    border-radius: 50%;
    transform: scale(1.1);
    transition: transform 0.2s ease, background-color 0.3s ease;
  }
`;

export const AvatarIcon = styled(AccountCircleOutlined)`
  font-size: 24px;
  color: ${Colors.textLight};
`;
