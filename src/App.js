import "./App.css";
import { WheelTitle } from "./Components/WheelTitle";
import { WheelSummary } from "./Components/WheelSummary";
import { WheelList } from "./Components/WheelList";
import OnlineStatus from "./Components/OnlineStatus";
import OnlineContext from "./Utils/OnlineContext";
import { useState } from "react";
import Appo from "./Components/Parent";
import TimerComponent from './Components/TimerComponent';
import { RatingComponent } from "./Components/RatingComponent";

const App = () => {
  const [count, setCount] = useState([]);

  const onIncreaseClicked = () => {
    const newCount = [...count];
    newCount.push(count + 1);
    setCount(newCount);
   }
  
  const onDecreaseClicked = () => {
      const newCount = count;
    setCount(newCount.pop());
      }
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>WHEELS PROJECT</h1>
        <OnlineStatus />
        <div className="background-div">
          <div className="wheels-text-div">
            <WheelTitle />
            <WheelSummary />
          </div>
          <OnlineContext.Provider value={{ userName: useN, setUseN }}>
            <WheelList />
          </OnlineContext.Provider>
          <Appo/>
        </div>
      </header> */}
      {/* <TimerComponent/> */}
      {/* <RatingComponent/> */}

      <button className={"increase-btn"} onClick={onIncreaseClicked}>
        Increase
      </button>
      <button className={"decrease-btn"} onClick={onDecreaseClicked}>
        Decrease
      </button>
      <div className={"display-text"}>
        <span> {count}</span>
      </div>
    </div>
  );
}

export default App;
