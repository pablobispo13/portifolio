import { Outlet, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { NavBar } from './components/navbar/NavBar';
import { About } from './components/about/About';

const Portifolio = () => <Routes>
  <Route path='' element={<Layout />}></Route>
</Routes>

const Layout = () => <>
  {/* Navbar */}
  <NavBar />
  {/* Header */}
  <Header />
  <About/>
  <Outlet />
</>

export default Portifolio