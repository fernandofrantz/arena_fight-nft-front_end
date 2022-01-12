import "./App.css";
import { Routing } from "./routes";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routing />
    </div>
  );
}

export default App;
