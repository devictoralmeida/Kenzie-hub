import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: var(--color-grey-4);
`;

export const StyledFormContainer = styled.section`
  width: clamp(18.5rem, 100%, 23.125rem);
  height: 100%;
  max-width: 23.125rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLoaderContainer = styled.section`
  width: 100vw;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDashBoardContainer = styled.section`
  width: 100%;
  height: calc(100vh - 2.5rem);
  display: flex;
  flex-direction: column;
  max-width: 48.4375rem;
  background-color: var(--color-grey-4);

  .dashboardContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.6875rem;
    gap: 1.75rem;
  }
  .header-fullWidth {
    min-width: 100vw;
    border: 1px solid var(--color-grey-3);
    align-self: center;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    padding: 1rem;
  }

  .techs-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }

  .modalOverlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    inset: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
  }
`;
