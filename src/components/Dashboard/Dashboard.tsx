import { StyledButton } from "../../styles/buttons";
import { StyledHeadline2, StyledParagraph } from "../../styles/typography";
import TechsLists from "../TechsLists/TechsLists";
import AddTechsModal from "../AddTechsModal/AddTechsModal";
import { useTechsContext } from "../../providers/TechsContext";

const Dashboard = () => {
  const { isAddModal, setIsAddModal, techsLits } = useTechsContext();

  return (
    <>
      {isAddModal ? <AddTechsModal /> : null}
      <div className="dashboardContainer">
        <div className="techs-header">
          <StyledHeadline2 fontsize="medium">Tecnologias</StyledHeadline2>
          <StyledButton
            buttonstyle="disabled"
            buttonsize="medium"
            padding='none'
            onClick={() => setIsAddModal(true)}
          >
            +
          </StyledButton>
        </div>
        {techsLits.length >= 1 ? (
          <TechsLists />
        ) : (
          <StyledParagraph fontweight="bold" color="gray">
            O usuário ainda não possui nenhuma tecnologia cadastrada
          </StyledParagraph>
        )}
      </div>
    </>
  );
};

export default Dashboard;
