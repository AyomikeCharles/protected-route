import Home from './views/Home';
import './App.css'
import Unauthorize from './views/Unauthorize';
import Admin from './views/Admin';
import Login from './views/login';
import User from './views/User';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protectedRoute/requireAuth'

function App() {
  return (
    <>
      

      <Routes>
        
        <Route element = {<ProtectedRoute roles={['user']}/>}>
          <Route path='/user' element={<User/>}/>
        </Route>

        <Route element = {<ProtectedRoute roles={['admin']}/>}>
          <Route path='/admin' element={<Admin/>}/>
        </Route>

        <Route path='/' element={<Home/>}/>
        <Route path='/unauthorize' element={<Unauthorize/>}/>
        <Route path='/login' element={<Login/>}/>
     
      </Routes>
    </>
  );
}

export default App;
