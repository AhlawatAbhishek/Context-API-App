import logo from "./logo.svg";
import "./App.css";
import ContentComponent from "./component/ContentComponent";
import { ThemeProvider } from "./context/ThemeProvider";
function App() {
  return (
    <div>
      <ThemeProvider>
        <ContentComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
