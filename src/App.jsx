import './App.css'
import Layout from './layout/Layout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';

function App() {

  return (
    <div className="App">
      <Router >
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
