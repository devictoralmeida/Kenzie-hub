import { NavStyles } from "./style";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { useUserContext } from "../../providers/UserContext";

interface NavbarProps {
  isbutton?: 'false' | 'true';
  text?: string;
}

const Navbar = ({ isbutton = 'false', text }: NavbarProps) => {
  const { handleLogout } = useUserContext();

  return (
    <NavStyles isbutton={ isbutton === 'true' ? 'true' : 'false'}>
      <p className="logo">Tech Tracker</p>
      {isbutton === 'true' && text === "Voltar" ? (
        <StyledLink to="/" buttonsize="medium" buttonstyle="disabled">
          {text}
        </StyledLink>
      ) : isbutton === 'true' && text === "Sair" ? (
        <StyledButton
          buttonstyle="disabled"
          buttonsize="medium"
          onClick={() => handleLogout()}
        >
          {text}
        </StyledButton>
      ) : null}
    </NavStyles>
  );
};

export default Navbar;
