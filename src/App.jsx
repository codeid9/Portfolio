import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import DefaultNavbar from './components/default/DefaultNavbar.jsx';
import DefaultFooter from './components/default/DefaultFooter.jsx';
import Components from './pages/Components.jsx';
import Pages from './pages/Pages.jsx';
import Projects from './pages/Projects.jsx';
import ExploreNavbar from './pages/ExploreNavbar.jsx';
import Navbar01 from './components/navbars/Navbar01.jsx';

function App() {
  return (
    <>
      <Router>
        <DefaultNavbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Pages/>} path='/pages'/>
          <Route element={<Projects/>} path='/projects'/>
          <Route element={<Components/>} path='/category'/>
          <Route element={<ExploreNavbar/>} path='/category/navbars'/>
          <Route element={<Navbar01/>} path='/category/navbars/nav01'/>
          <Route element={<h1>404 Page Not Found</h1>} path='*'/>
        </Routes>
        <DefaultFooter/>
      </Router>
    </>
  )
}

export default App
