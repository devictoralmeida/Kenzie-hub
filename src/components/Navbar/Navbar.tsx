import { NavStyles } from "./style";
import Logo from "../../assets/Logo.svg";
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
      <img src={Logo} alt="Logo da Kenzie Hub" />
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
