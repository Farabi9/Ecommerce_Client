import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home'



function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
