// we want to notify when smtg chagnes in the listgroup componenet
import { NavBar } from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import StarRating from "./components/Rating/StarRating";

function App() {
  return (
    <div>
      {/* <StarRating /> */}
      <NavBar></NavBar>
      <Body></Body>
    </div>
  );
}

export default App;
