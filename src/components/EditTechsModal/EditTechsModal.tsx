import { zodResolver } from "@hookform/resolvers/zod";
import { FormStyles } from "../../styles/form";
import { StyledHeadline3, StyledParagraph } from "../../styles/typography";
import { StyledTechsModal } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import Select from "../Select/Select";
import Input from "../Input/Input";
import { StyledButton } from "../../styles/buttons";
import { TEditTechFormValues, editTechFormSchema } from "../../schemas/editTechFormSchema";
import { useTechsContext } from "../../providers/TechsContext";
import { useState } from "react";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeydownPress } from "../../hooks/useKeydownPress";

const EditTechsModal = () => {
  const [loading, setLoading] = useState(false);
  const { setIsEditModal, editTech, removeTech, updatedTech } =
    useTechsContext();

  const modalRef = useOutClick(() => setIsEditModal(false));
  const buttonRef = useKeydownPress("Escape", (element) => element?.click());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TEditTechFormValues>({
    mode: "onBlur",
    resolver: zodResolver(editTechFormSchema),
  });

  const submit: SubmitHandler<TEditTechFormValues> = async (formData) => {
    await editTech(updatedTech!.id, formData, setLoading);
    reset();
  };

  const handleDeleteTech = async (techId: string) => {
    await removeTech(techId, setLoading);
    reset();
  };

  return (
    <div className="modalOverlay" role="dialog">
      <StyledTechsModal ref={modalRef}>
        <header>
          <StyledHeadline3 fontweight="bold" fontsize="small">
            Tecnologia Detalhes
          </StyledHeadline3>
          <StyledParagraph
            fontweight="bold"
            color="gray"
            ref={buttonRef}
            onClick={() => setIsEditModal(false)}
          >
            X
          </StyledParagraph>
        </header>
        <FormStyles onSubmit={handleSubmit(submit)} radius='none'>
          <Input
            type="text"
            id="title"
            label="Nome do projeto"
            value={updatedTech!.title}
            disabled={true}
          />
          <Select
            id="status"
            label="Selecionar status"
            disabled={loading}
            {...register("status")}
          >
            <option defaultValue={updatedTech!.status} selected disabled>
              {updatedTech!.status}
            </option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <div className="buttons-container">
            {Object.keys(errors).length !== 0 ? (
              <StyledButton
                buttonsize="big"
                buttonstyle="invalid"
                disabled={true}
              >
                {loading ? "Salvando..." : "Salvar alterações"}
              </StyledButton>
            ) : (
              <StyledButton
                buttonsize="big"
                buttonstyle="primary"
                disabled={false}
              >
                {loading ? "Salvando..." : "Salvar alterações"}
              </StyledButton>
            )}
            <StyledButton
              type="button"
              buttonsize="small"
              buttonstyle="register"
              disabled={loading}
              onClick={async () => await handleDeleteTech(updatedTech!.id)}
            >
              Excluir
            </StyledButton>
          </div>
        </FormStyles>
      </StyledTechsModal>
    </div>
  );
};

export default EditTechsModal;
