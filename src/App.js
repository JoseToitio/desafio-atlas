import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/index';
import Profile from './pages/Profile/index'
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:username' element={<Profile />}/>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
