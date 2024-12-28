import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from './Components/Nav';
import AddParty from './Components/AddParty';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>
     <Route path='/' element={<AddParty/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
