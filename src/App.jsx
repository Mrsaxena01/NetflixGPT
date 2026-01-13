import { BrowserRouter, Route, Routes } from "react-router-dom";
import Brouse from "./components/Brouse";
import Body from "./components/Body";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/brouse" element={<Brouse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
