import './App.css';
import Login from './components/Login';
import Password from './components/Password';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
          <Routes>
                  <Route path='/' element = {<Login/>}/>
                  <Route path='/password' element = {<Password/>} />
          </Routes>
      </Router>

     

    </div>
  );
}

export default App;
