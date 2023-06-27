import { StyledFormContainer, StyledContainer } from "../../styles/grid";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
  return (
    <>
      <StyledContainer>
        <StyledFormContainer>
          <Navbar isbutton='true' text="Voltar" />
          <RegisterForm />
        </StyledFormContainer>
      </StyledContainer>
    </>
  );
};

export default Register;
