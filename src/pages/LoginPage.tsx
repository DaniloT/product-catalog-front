import React, { useEffect, useState } from 'react';
import { useTypedDispatch } from '../hooks/hooks';
import { loginRequest } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { AuthActionTypes } from '../store/actions/types';
import {
    PageWrapper,
    LoginForm,
    Input,
    StyledPasswordInput,
    SubmitButton,
    Logo,
    Title,
    ErrorText,
    Spinner,
    PasswordWrapper,
    PasswordToggleButton,
} from '../styles/loginPageStyles';

import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state: any) => state.auth);

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/products');
            setIsSubmitting(false);
        }

        if (auth.error) {
            toast.error(auth.error);
            dispatch({ type: AuthActionTypes.LOGIN_FAILURE, payload: null });
            setIsSubmitting(false);
        }
    }, [auth.isAuthenticated, auth.error, navigate, dispatch]);

    const validate = () => {
        const newErrors: { username?: string; password?: string } = {};
        if (!username) newErrors.username = 'Username is required';
        if (!password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        dispatch(loginRequest({ username, password }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <PageWrapper>
            <LoginForm onSubmit={handleSubmit}>
                <Logo src="/logo-generic.svg" alt="Company Logo" />
                <Title>Welcome to Company</Title>

                <Input
                    type="text"
                    value={username}
                    maxLength={30}
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
                    placeholder="Username"
                    aria-invalid={!!errors.username}
                />
                {errors.username && <ErrorText>{errors.username}</ErrorText>}

                <PasswordWrapper>
                    <StyledPasswordInput
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        maxLength={50}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                        placeholder="Password"
                        aria-invalid={!!errors.password}
                    />
                    <PasswordToggleButton
                        onClick={togglePasswordVisibility}
                        aria-label="Toggle password visibility"
                        type="button"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </PasswordToggleButton>
                </PasswordWrapper>
                {errors.password && <ErrorText>{errors.password}</ErrorText>}

                <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <Spinner /> : 'Login'}
                </SubmitButton>
            </LoginForm>
        </PageWrapper>
    );
};

export default LoginPage;
