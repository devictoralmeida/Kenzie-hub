import { produce } from "immer";
import { useTechsContext } from "../../providers/TechsContext";
import TechCard from "../TechCard/TechCard";
import { StyledTechsList } from "./style";
import EditTechsModal from "../EditTechsModal/EditTechsModal";

const TechsLists = () => {
  const { isEditModal, techsLits } = useTechsContext();

  const atualizedTechList = produce(techsLits, (draft) => {
    draft.reverse();
  });

  return (
    <>
      {isEditModal ? <EditTechsModal /> : null}
      <StyledTechsList>
        {atualizedTechList.map((item) => (
          <TechCard key={item.id} tech={item} />
        ))}
      </StyledTechsList>
    </>
  );
};

export default TechsLists;
