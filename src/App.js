import "./App.css";
import Route from "./Components/routes/index";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
function App() {
  return (
    <GlobalStateProvider>
      <Route />
    </GlobalStateProvider>
  );
}

export default App;
