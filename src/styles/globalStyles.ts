import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: ${Colors.backgroundGray};
    margin: 0;
    padding: 0;
    color: ${Colors.textDark};
    transition: background-color 0.3s ease;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    background-color: ${Colors.primaryBlue};
    color: ${Colors.textLight};
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: ${Colors.hoverBlue};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  input, textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: ${Colors.secondaryTurquoise};
      outline: none;
    }
  }

  h1, h2, h3, h4 {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: ${Colors.primaryBlue};
  }

  a {
    color: ${Colors.secondaryTurquoise};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .card {
    background-color: ${Colors.textLight};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px 0;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  }

  .form-group {
    margin-bottom: 20px;
  }
`;
