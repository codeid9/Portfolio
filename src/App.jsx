import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import ComponentsPage from './pages/ComponentsPage.jsx';
import DefaultNavbar from './components/default/DefaultNavbar.jsx';
import DefaultFooter from './components/default/DefaultFooter.jsx';
function App() {
  return (
    <>
      <Router>
        <DefaultNavbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<ComponentsPage/>} path='/:component'/>
          <Route element={<h1>404 Page Not Found</h1>} path='*'/>
        </Routes>
        <DefaultFooter/>
      </Router>
    </>
  )
}

export default App
