import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portifolio from "./components/Portifolio";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Portifolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
