import "./App.css";
import { Consumer } from "./pages/Consumer.pages";
import { ManageConsumer } from "./pages/ManageConsumer.pages";

function App() {
  return (
    <div className="App h-screen w-screen">
      {/* <Consumer /> */}
      <ManageConsumer />
    </div>
  );
}

export default App;
