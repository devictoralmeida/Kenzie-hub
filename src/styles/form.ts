import styled, { css } from "styled-components";

interface IFormStylesProps {
  radius?: string;
}

interface IStyledInputProps {
  error?: boolean;
}

interface ISelectStylesProps {
  error?: boolean;
}

export const FormStyles = styled.form<IFormStylesProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  padding: clamp(1rem, 5vw, 1.5625rem);
  border-radius: ${({ radius }) => (radius === 'none' ? "0rem" : "0.25rem")};
  box-shadow: 0px 4px 40px -10px #00000040;
  background-color: var(--color-grey-3);

  p {
    color: var(--color-grey-1);
  }

  label {
    font-family: var(--font-primary);
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-0);
  }

  .input-container,
  .password-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .password-container {
    position: relative;
  }

  .eye-button {
    position: absolute;
    width: 1rem;
    height: 1.25rem;
    top: 45px;
    right: 18px;
    cursor: pointer;
    transition: 0.2s;
  }

  .eye-button:hover {
    transform: scale(1.2);
  }

  .register {
    width: 100%;
    max-width: 20.25rem;
    height: 6.25rem;
    padding-top: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    gap: 1.375rem;
    width: 100%;
  }
`;

export const InputStyles = styled.input<IStyledInputProps>`
  font-family: var(--font-primary);
  width: clamp(15.3125rem, 100%, 20.625rem);
  padding: 0rem 1rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-grey-2);
  background-color: var(--color-grey-2);
  color: var(--color-grey-1);
  font-weight: 400;
  font-size: clamp(0.75rem, 2vw, 1rem);
  transition: 0.2s;
  outline: none;

  & > svg {
    fill: var(--color-grey-1);
  }

  & > svg:hover {
    fill: var(--color-grey-0);
  }

  &:focus {
    border: 1px solid var(--color-grey-0);
    color: var(--color-grey-0);
  }

  ${({ error }) => {
    if (error) {
      return css`
        border: 1px solid var(--color-negative);
      `;
    }
  }}
`;

export const SelectStyles = styled.select<ISelectStylesProps>`
  font-family: var(--font-primary);
  width: clamp(15.3125rem, 100%, 20.625rem);
  padding: 0rem 1rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-grey-2);
  background-color: var(--color-grey-2);
  color: var(--color-grey-1);
  font-weight: 400;
  font-size: clamp(0.75rem, 2vw, 1rem);
  transition: 0.2s;
  outline: none;

  &:focus {
    border: 1px solid var(--color-grey-0);
    color: var(--color-grey-0);
  }

  ${({ error }) => {
    if (error) {
      return css`
        border: 1px solid var(--color-negative);
      `;
    }
  }}
`;
