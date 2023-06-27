import styled from "styled-components";

interface INavStylesProps {
  isbutton: 'true' | 'false';
}

export const NavStyles = styled.nav<INavStylesProps>`
  width: 100%;
  min-height: 2.5rem;
  display: flex;
  justify-content: ${({ isbutton }) => (isbutton ? "space-between" : "center")};
  align-items: center;
  margin: 0 auto;

  img {
    width: fit-content;
    height: 1.25rem;
  }
`;
