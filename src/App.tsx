// we want to notify when smtg chagnes in the listgroup componenet
import { Buttons } from "./components/Buttons";

function App() {
  return (
    <div>
      <Buttons onClick={() => console.log("Clicked!")} color="dark">
        Proceed!!
      </Buttons>
    </div>
  );
}

export default App;
