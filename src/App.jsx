import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import ComponentsPage from './pages/ComponentsPage.jsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<ComponentsPage/>} path='/:component'/>
          <Route element={<h1>404 Page Not Found</h1>} path='*'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
