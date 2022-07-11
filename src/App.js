import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import "./style/darkMode.scss";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";
import { productInput, userInput } from './DataForForm';
import { DarkModeContext } from './context/DarkModeContext';
import { useContext } from 'react';

function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
      <div className={darkMode ? 'app dark' : 'app'}>
     <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/users" element={<Single/>} />
      <Route exact path="/:user_id" element={<Single/>} />
      <Route exact path="/users/new" element={<New inputs={userInput} title="Add New User"/>} />

      <Route exact path="/products" element={<List/>} />
      <Route exact path="/products/:productId" element={<Single/>} />
      <Route exact path="/products/new" element={<New inputs={productInput} title="Add New Product"/>} />

      </Routes>
      
    </BrowserRouter>

    </div>

  );
}

export default App;
