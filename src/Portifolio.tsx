import {  Container} from '@mui/material';
import { Outlet, Routes, Route } from 'react-router-dom';
import { ResponsiveAppBar } from './components/navbar/NavBar'

const Portifolio = () => <Routes>
  <Route path='' element={<Layout />}></Route>
</Routes>

const Layout = () => <>
  <ResponsiveAppBar />
  <Container>
    <Outlet/>
  </Container>
</>
export default Portifolio