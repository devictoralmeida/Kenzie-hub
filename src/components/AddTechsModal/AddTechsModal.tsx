import { zodResolver } from "@hookform/resolvers/zod";
import { FormStyles } from "../../styles/form";
import { StyledHeadline3, StyledParagraph } from "../../styles/typography";
import { StyledTechsModal } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { TAddTechFormValues, addTechFormSchema } from "../../schemas/addTechFormSchema";
import Select from "../Select/Select";
import Input, { IFormError } from "../Input/Input";
import { StyledButton } from "../../styles/buttons";
import { useTechsContext } from "../../providers/TechsContext";
import { useState } from "react";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeydownPress } from "../../hooks/useKeydownPress";

const AddTechsModal = () => {
  const [loading, setLoading] = useState(false);
  const { addTech, setIsAddModal } = useTechsContext();

  const modalRef = useOutClick(() => setIsAddModal(false));
  const buttonRef = useKeydownPress("Escape", (element) => element?.click());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAddTechFormValues>({
    mode: "onBlur",
    resolver: zodResolver(addTechFormSchema),
  });

  const submit: SubmitHandler<TAddTechFormValues> = async (formData) => {
    await addTech(formData, setLoading);
    reset();
  };

  return (
    <div className="modalOverlay" role="dialog">
      <StyledTechsModal ref={modalRef}>
        <header>
          <StyledHeadline3 fontweight="bold" fontsize="small">
            Cadastrar Tecnologia
          </StyledHeadline3>
          <StyledParagraph
            fontweight="bold"
            color="gray"
            ref={buttonRef}
            onClick={() => setIsAddModal(false)}
          >
            X
          </StyledParagraph>
        </header>
        <FormStyles onSubmit={handleSubmit(submit)} radius='none'>
          <Input
            type="text"
            id="title"
            placeholder="Digite aqui o nome da tecnologia"
            label="Nome"
            error={errors.title as IFormError}
            disabled={loading}
            {...register("title")}
          />
          <Select
            id="status"
            label="Selecionar status"
            error={errors.status as IFormError}
            disabled={loading}
            {...register("status")}
          >
            <option value="" selected disabled>
              Selecione o status
            </option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          {Object.keys(errors).length !== 0 ? (
            <StyledButton
              buttonsize="big"
              buttonstyle="invalid"
              disabled={true}
            >
              {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
            </StyledButton>
          ) : (
            <StyledButton
              buttonsize="big"
              buttonstyle="primary"
              disabled={false}
            >
              {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
            </StyledButton>
          )}
        </FormStyles>
      </StyledTechsModal>
    </div>
  );
};

export default AddTechsModal;
