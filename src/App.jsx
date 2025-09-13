import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import ComponentsPage from './pages/ComponentsPage.jsx';
import DefaultNavbar from './components/default/DefaultNavbar.jsx';
import DefaultFooter from './components/default/DefaultFooter.jsx';
import Components from './pages/Components.jsx';
import Pages from './pages/Pages.jsx';
import Projects from './pages/Projects.jsx';
function App() {
  return (
    <>
      <Router>
        <DefaultNavbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Pages/>} path='/pages'/>
          <Route element={<Projects/>} path='/projects'/>
          <Route element={<Components/>} path='/components'/>
          <Route element={<ComponentsPage/>} path='/components/:component'/>
          <Route element={<h1>404 Page Not Found</h1>} path='*'/>
        </Routes>
        <DefaultFooter/>
      </Router>
    </>
  )
}

export default App
