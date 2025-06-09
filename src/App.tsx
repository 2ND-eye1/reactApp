import ListGroups from "./components/ListGroups";

function App() {
  let items = ["London", "Tokyo", "Dakar"];
  return (
    <div>
      <ListGroups items={items} heading="Cities" />
    </div>
  );
}

export default App;
