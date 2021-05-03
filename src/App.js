import "./App.css";
import Card from "./components/MyCard/MyCard";

function App() {
  return (
    <div className="App">
      <p>Hello react</p>
      <Card index={1} />
      <Card index={2} />
      <Card index={3} />
      <Card index={4} />
    </div>
  );
}

export default App;
