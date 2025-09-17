import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import DefaultNavbar from './components/default/DefaultNavbar.jsx';
import DefaultFooter from './components/default/DefaultFooter.jsx';
import Components from './pages/Components.jsx';
import Pages from './pages/Pages.jsx';
import Projects from './pages/Projects.jsx';
// comp page
import DefaultComponentDetails from './components/default/DefaultComponentDetails.jsx';
// comp data
import { NavData } from './data/data.js';
import { FormData } from './data/data.js';

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
          <Route element={<DefaultComponentDetails/>} path='/category/:compname'/>
          {
            NavData && NavData.map(({path,Comp})=><Route element={<Comp/>} path={`/category/navbars/${path}`}/>)
          }
          {
            FormData && FormData.map(({path,Comp})=><Route element={<Comp/>} path={`/category/forms/${path}`}/>)
          }

          <Route element={<h1>404 Page Not Found</h1>} path='*'/>
        </Routes>
        <DefaultFooter/>
      </Router>
    </>
  )
}

export default App
