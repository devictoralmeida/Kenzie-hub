import { FormStyles } from "../../styles/form";
import HashLoader from "react-spinners/HashLoader";
import Eye from "../../assets/eye.svg";
import { StyledParagraph } from "../../styles/typography";
import { StyledHeadline1 } from "../../styles/typography";
import Input from "../Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginFormSchema } from "../../schemas/loginFormSchema";
import { StyledLoaderContainer } from "../../styles/grid";
import { StyledButton, StyledLink } from "../../styles/buttons";
import { useUserContext } from "../../providers/UserContext";
import { useState } from "react";

const LoginForm = () => {
  const { userLogin } = useUserContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    mode: "onBlur",
    resolver: zodResolver(loginFormSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = async (formData) => {
    await userLogin(formData, setLoading);
    reset();
  };

  const handleChangeInput = () => {
    const input = document.querySelector("#password") as HTMLElement;
    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  };

  return (
    <>
      {loading ? (
        <StyledLoaderContainer>
          <HashLoader color="#ff427f" />
        </StyledLoaderContainer>
      ) : (
        <FormStyles onSubmit={handleSubmit(submit)} noValidate>
          <StyledHeadline1 fontweight="bold" fontsize="big">
            Login
          </StyledHeadline1>
          <Input
            type="email"
            id="email"
            placeholder="Digite o seu email"
            label="Email"
            error={errors.email}
            disabled={loading}
            {...register("email")}
          />
          <div className="password-container">
            <Input
              type="password"
              id="password"
              placeholder="Digite a sua senha"
              label="Senha"
              error={errors.password}
              disabled={loading}
              {...register("password")}
            />
            <img
              src={Eye}
              alt="Button to see password"
              className="eye-button"
              onClick={handleChangeInput}
            />
          </div>
          {Object.keys(errors).length !== 0 ? (
            <StyledButton
              buttonsize="big"
              buttonstyle="invalid"
              disabled={true}
            >
              {loading ? "Entrando..." : "Entrar"}
            </StyledButton>
          ) : (
            <StyledButton
              buttonsize="big"
              buttonstyle="primary"
              disabled={false}
            >
              {loading ? "Entrando..." : "Entrar"}
            </StyledButton>
          )}
          <div className="register">
            <StyledParagraph fontweight="bold">
              Ainda não possui uma conta?
            </StyledParagraph>
            <StyledLink to="/register" buttonsize="big" buttonstyle="register">
              Cadastre-se
            </StyledLink>
          </div>
        </FormStyles>
      )}
    </>
  );
};

export default LoginForm;
