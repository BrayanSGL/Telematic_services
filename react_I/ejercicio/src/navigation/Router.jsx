import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormView } from "../views/FormView";
import { StartView } from "../views/StartView";
import { Navbar } from "../components/Navbar";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartView />} />
        <Route path="/formulario" element={<FormView />} />
        <Route path="*" element={<StartView />} />
      </Routes>
    </BrowserRouter>
  );
};
