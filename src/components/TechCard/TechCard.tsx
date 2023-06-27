import { ITech, useTechsContext } from "../../providers/TechsContext";
import { StyledParagraph, StyledHeadline3 } from "../../styles/typography";
import { StyledTechCard } from "./style";

interface ITechCardProps {
  tech: ITech;
}

const TechCard = ({ tech }: ITechCardProps) => {
  const { setIsEditModal, setUpdatedTech } = useTechsContext();

  const handleOpenEditModal = (tech: ITech) => {
    setIsEditModal(true);
    setUpdatedTech(tech);
  };

  return (
    <StyledTechCard onClick={() => handleOpenEditModal(tech)}>
      <StyledHeadline3 fontweight="bold" fontsize="small">
        {tech.title}
      </StyledHeadline3>
      <StyledParagraph color="gray">{tech.status}</StyledParagraph>
    </StyledTechCard>
  );
};

export default TechCard;
