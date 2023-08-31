
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Home/>
    </BrowserRouter>
    </div>
  );
}

export default App;