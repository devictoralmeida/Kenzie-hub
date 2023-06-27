import styled from "styled-components";

export const StyledTechsModal = styled.div`
  width: clamp(18.4375rem, 90vw, 23.125rem);
  position: relative;
  background-color: var(--color-grey-3);
  border-radius: 4px;
  box-shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px #00000040;

  header {
    padding-top: clamp(0.625rem, 5vw, 0.75rem);
    padding-bottom: clamp(0.625rem, 5vw, 0.75rem);
    padding-left: clamp(1rem, 5vw, 1.25rem);
    padding-right: clamp(1rem, 5vw, 1.25rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-2);
  }

  header > p {
    cursor: pointer;
    transition: 0.2s;
  }

  header > p:hover {
    transform: scale(1.3);
  }
`;
