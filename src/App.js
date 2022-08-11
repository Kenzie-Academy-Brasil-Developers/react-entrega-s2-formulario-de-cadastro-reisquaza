import UserProvider from "./contexts/UserContexts";
import RoutesMain from "./routes";
import Global from "./styles/global";

const App = () => {
  return (
    <UserProvider>
      <Global />
      <RoutesMain />
    </UserProvider>
  );
};

export default App;
