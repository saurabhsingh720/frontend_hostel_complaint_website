// import logo from './logo.svg';

import Register from './Register';
import Login from './Login';

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Main from './Main';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>} ></Route>
        <Route path='/register' element = {<Register />}> </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
