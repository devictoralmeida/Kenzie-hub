import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { useUserContext } from "./providers/UserContext";
import { StyledLoaderContainer } from "./styles/grid";
import { HashLoader } from "react-spinners";

const App = () => {
  const { globalLoading } = useUserContext();

  return (
    <>
      {globalLoading ? (
        <StyledLoaderContainer>
          <HashLoader color="#ff427f" />
        </StyledLoaderContainer>
      ) : (
        <RoutesMain />
      )}
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};

export default App;
