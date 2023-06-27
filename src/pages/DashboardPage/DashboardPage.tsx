import Header from "../../components/Header/Header";
import { StyledContainer, StyledDashBoardContainer } from "../../styles/grid";
import Navbar from "../../components/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard";
import { TechsContextProvider } from "../../providers/TechsContext";

const DashboardPage = () => {
  return (
    <StyledContainer>
      <StyledDashBoardContainer>
        <Navbar isbutton='true' text="Sair" />
        <div className="header-fullWidth">
          <Header />
        </div>
        <main>
          <TechsContextProvider>
            <Dashboard />
          </TechsContextProvider>
        </main>
      </StyledDashBoardContainer>
    </StyledContainer>
  );
};

export default DashboardPage;
