import "./App.css";
import { WheelTitle } from "./Components/WheelTitle";
import { WheelSummary } from "./Components/WheelSummary";
import { WheelList } from "./Components/WheelList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="background-div">
          <div className="wheels-text-div">
            <WheelTitle />
            <WheelSummary />
          </div>
          <WheelList />
        </div>
      </header>
    </div>
  );
}

export default App;
