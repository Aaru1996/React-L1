import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Feeds from './pages/Feeds';
import Posts from './pages/Posts';
import RequiredAuth from './HOC/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/posts" element={<RequiredAuth><Posts/></RequiredAuth>}/>
        <Route path="/login" element={<Login/>} />
        <Route path ="/feeds" element ={<RequiredAuth><Feeds/></RequiredAuth>} />
      </Routes>
    </div>
  );
} 
export default App;
