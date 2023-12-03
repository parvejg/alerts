import "./App.css";
import { AleartsPage } from "./Components/AlertsPage";

function App() {
  return (
    <div className="App">
      <h1>Alerts</h1>
      <h3>
        Alert messages can be used to notify the user about something special:
        danger, success, information or warning
      </h3>
      <AleartsPage
        AlertMsg=" Danger!  Indicates a dangerous or
          potentially negative action"
      />
      <AleartsPage
        AlertMsg="Success! Indicates a successful or positive action."
        background={{ background: "green" }}
      />
      <AleartsPage
        AlertMsg="Info! Indicates a neutral informative change or action."
        background={{ background: "blue" }}
      />
      <AleartsPage
        AlertMsg="Warning! Indicates a warning that might need attention."
        background={{ background: "yellow", color: "black" }}
      />
    </div>
  );
}

export default App;
