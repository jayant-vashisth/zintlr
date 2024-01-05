import "./App.css";
import { Consumer } from "./pages/Consumer.pages";
import { ManageConsumer } from "./pages/ManageConsumer.pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Consumer />} />
          <Route path="/manage-consumer" element={<ManageConsumer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
