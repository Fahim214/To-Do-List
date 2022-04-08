import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterComp from "./Component/FooterComp";
import NavbarComp from "./Component/NavbarComp";
import AddAgenda from "./Screens/AddAgenda";
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
          <Route path="/add-agenda" element={<AddAgenda />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </div>
  );
}

export default App;
