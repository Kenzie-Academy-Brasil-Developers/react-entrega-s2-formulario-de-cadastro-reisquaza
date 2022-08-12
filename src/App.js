import { ToastContainer } from "react-toastify";
import Contexts from "./contexts/Contexts";
import RoutesMain from "./routes";
import Global from "./styles/global";

const App = () => {
  return (
    <Contexts>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          color: "var(--color-gray-0)",
          backgroundColor: "var(--color-gray-3)",
        }}
      />
      <Global />
      <RoutesMain />
    </Contexts>
  );
};

export default App;
