import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/index'
import Profile from './pages/Profile/index'
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path='/:username' element={<Profile />}/>
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
