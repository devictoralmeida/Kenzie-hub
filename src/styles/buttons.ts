import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  buttonsize: 'big' | 'medium' | 'small';
  buttonstyle: 'primary' | 'invalid' | 'disabled' | 'register';
  padding?: 'none';
}

export const ButtonStyles = css<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  gap: 0.5rem;
  border-radius: 0.25rem;
  font-family: var(--font-primary);
  font-size: clamp(0.75rem, 2vw, 1rem);
  font-weight: 500;
  color: #ffffff;
  transition: 0.2s;
  cursor: pointer;

  &:disabled {
    background-color: var(--color-color-primary-disable);
    border: 1px solid var(--color-color-primary-disable);
    cursor: not-allowed;
  }

  padding: ${({ padding }) => (padding === 'none' ? "0rem" : "0rem 1.375rem")};

  ${({ buttonsize }) => {
    switch (buttonsize) {
      case "big":
        return css`
          height: 3rem;
          width: clamp(16.25rem, 100%, 20.25rem);
        `;
      case "medium":
        return css`
          height: 2rem;
          
          min-width: 2rem;
          width: fit-content;
        `;
      case "small":
        return css`
          height: 3rem;
          width: clamp(4.875rem, 100%, 6.125rem);
        `;
    }
  }}

  ${({ buttonstyle }) => {
    switch (buttonstyle) {
      case "primary":
        return css`
          background-color: var(--color-color-primary);
          border: 1px solid var(--color-color-primary);

          &:hover {
            background-color: var(--color-color-primary-50);
            border: 1px solid var(--color-color-primary-50);
          }
        `;
      case "invalid":
        return css`
          background-color: var(--color-color-primary-disable);
          border: 1px solid var(--color-color-primary-disable);
          cursor: not-allowed;
        `;
      case "disabled":
        return css`
          background-color: var(--color-grey-2);
          border: 1px solid var(--color-grey-2);
          font-size: clamp(0.625rem, 2vw, 0.75rem);

          &:hover {
            background-color: var(--color-grey-1);
            border: 1px solid var(--color-grey-1);
          }
        `;
      case "register":
        return css`
          background-color: var(--color-grey-1);
          border: 1px solid var(--color-grey-1);

          &:hover {
            background-color: var(--color-grey-2);
            border: 1px solid var(--color-grey-2);
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonStyles}
`;

export const StyledLink = styled(Link)<StyledButtonProps>`
  ${ButtonStyles}
`;
