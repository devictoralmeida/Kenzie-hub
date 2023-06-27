import { FormStyles } from "../../styles/form";
import HashLoader from "react-spinners/HashLoader";
import { StyledParagraph } from "../../styles/typography";
import { StyledHeadline1 } from "../../styles/typography";
import Input, { IFormError } from "../Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterFormValues, registerFormSchema } from "../../schemas/registerFormSchema";
import { StyledLoaderContainer } from "../../styles/grid";
import Select from "../Select/Select";
import { StyledButton } from "../../styles/buttons";
import { useUserContext } from "../../providers/UserContext";
import { useState } from "react";

const RegisterForm = () => {
  const { userRegister } = useUserContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    mode: "onBlur",
    resolver: zodResolver(registerFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = async (formData) => {
    await userRegister(formData, setLoading);
    reset();
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
            Crie sua conta
          </StyledHeadline1>
          <StyledParagraph>Rapido e grátis, vamos nessa</StyledParagraph>
          <Input
            type="text"
            id="name"
            placeholder="Digite aqui o seu nome"
            label="Nome"
            error={errors.name as IFormError}
            disabled={loading}
            {...register("name")}
          />
          <Input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            label="Email"
            error={errors.email as IFormError}
            disabled={loading}
            {...register("email")}
          />
          <Input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            label="Senha"
            error={errors.password as IFormError}
            disabled={loading}
            {...register("password")}
          />
          <Input
            type="password"
            id="confirm"
            placeholder="Digite novamente sua senha"
            label="Confirmar Senha"
            error={errors.confirm as IFormError}
            disabled={loading}
            {...register("confirm")}
          />
          <Input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            error={errors.bio as IFormError}
            label="Bio"
            disabled={loading}
            {...register("bio")}
          />
          <Input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            label="Contato"
            error={errors.contact as IFormError}
            disabled={loading}
            {...register("contact")}
          />
          <Select
            id="course_module"
            label="Selecionar módulo"
            error={errors.course_module as IFormError}
            disabled={loading}
            {...register("course_module")}
          >
            <option value="" selected disabled>
              Selecione o seu módulo
            </option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </Select>
          {Object.keys(errors).length !== 0 ? (
            <StyledButton
              buttonsize="big"
              buttonstyle="invalid"
              disabled={true}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </StyledButton>
          ) : (
            <StyledButton
              buttonsize="big"
              buttonstyle="primary"
              disabled={false}
            >
              {loading ? "Cadastrando..." : "Cadastrar"}
            </StyledButton>
          )}
        </FormStyles>
      )}
    </>
  );
};

export default RegisterForm;
