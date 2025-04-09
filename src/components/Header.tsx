import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../store/actions/authActions';
import { RootState } from '../store/reducers';
import { Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { HeaderContainer, Logo, HeaderRight, HeaderWrapper, HeaderLeft, UserSection, IconButtonStyled, AvatarIcon } from '../styles/headerStyles';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector((state: RootState) => state.auth.username);

    const handleLogout = () => {
        dispatch(logoutRequest());
        navigate('/login');
    };

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLeft>
                    <Logo src="/logo-generic.svg" alt="Company Logo" />
                </HeaderLeft>
                <HeaderRight>
                    <UserSection>
                        <AvatarIcon />
                        <Typography variant="body1">
                            {username ? username : 'Guest'}
                        </Typography>
                        <IconButtonStyled
                            onClick={handleLogout}
                            color="inherit"
                        >
                            <ExitToApp />
                        </IconButtonStyled>
                    </UserSection>
                </HeaderRight>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
