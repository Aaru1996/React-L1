import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import { useContext } from 'react';

function App() {
  const {isLight}=useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light" : "dark"} `} >
    
          <Navbar/>
          <Body/>
        
    </div>
  );
}

export default App;
