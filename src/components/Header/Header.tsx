import { useUserContext } from "../../providers/UserContext";
import { StyledHeadline1, StyledParagraph } from "../../styles/typography";
import { HeaderStyles } from "./style";

const Header = () => {
  const { user } = useUserContext();

  return (
    <HeaderStyles>
      <StyledHeadline1 fontsize="big" fontweight="bold">
        Olá, {user?.name}
      </StyledHeadline1>
      <StyledParagraph color="gray">
        {user?.course_module}
      </StyledParagraph>
    </HeaderStyles>
  );
};

export default Header;
