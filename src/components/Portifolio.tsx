import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { NavBar } from "./NavBar";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

const Portifolio = () => (
  <>
    {/* Navbar */}
    <NavBar />
    {/* Body */}
    <Header />
    <Projects />
    <Contact />
    <Outlet />
  </>
);

export default Portifolio;
