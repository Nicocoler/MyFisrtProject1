import './App.css';
import MainRoute from "./route";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <MainRoute/>
      </BrowserRouter>
  );
}

export default App;
