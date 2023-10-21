import { Outlet, Routes, Route } from 'react-router-dom';
import { Page } from './components/page/Page';

const Portifolio = () => <Routes>
  <Route path='' element={<Layout />}></Route>
</Routes>

const Layout = () => <>
  <Page />
  <Outlet />
</>
export default Portifolio