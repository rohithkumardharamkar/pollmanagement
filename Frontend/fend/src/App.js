import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './Components/Nav';
import AddParty from './Components/AddParty';
import EVM from './Components/EVM';
import store from './utils/store';
import{ Provider} from 'react-redux'
import { lazy, Suspense } from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Home from './Components/Home';
import Reg from './Components/Reg';
import Adminhome from './Components/Adminhome';
function App() {
  let VVpat=lazy(()=>import('./Components/VVpat'))
  return (
   
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/add' element={<AddParty/>}/>
     <Route path='/evm' element={<EVM/>}/>
     <Route path='/vv' element={<Suspense fallback={<div>Loading......</div>}><VVpat/></Suspense>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/reg' element={<Reg/>}/>
     <Route path='/ahome' element={<Adminhome/>}/>
     </Routes>
     </BrowserRouter>
      </Provider>
    
    </div>
  );
}

export default App;
