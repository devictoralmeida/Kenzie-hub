import { StyledContainer, StyledFormContainer } from "../../styles/grid";
import LoginForm from "../../components/LoginForm/LoginForm";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <>
      <StyledContainer>
        <StyledFormContainer>
          <Navbar />
          <LoginForm />
        </StyledFormContainer>
      </StyledContainer>
    </>
  );
};

export default Login;
