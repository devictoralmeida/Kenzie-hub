import styled from "styled-components";

export const StyledTechCard = styled.li`
  padding: 0.75rem;
  border-radius: 0.25rem;
  width: 100%;
  height: 3.125rem;
  background-color: var(--color-grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--color-grey-2);
  }

  &:hover p {
    color: var(--color-grey-0);
  }
`;
