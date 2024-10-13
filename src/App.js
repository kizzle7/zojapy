import "./App.css";
import Route from "./Components/routes/index";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
function App() {
  return (
    <PrimeReactProvider>
      <GlobalStateProvider>
        <Route />
      </GlobalStateProvider>
    </PrimeReactProvider>
  );
}

export default App;
