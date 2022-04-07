import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComp from "./Component/NavbarComp";
import Detail from "./Screens/Detail";
import Home from "./Screens/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
