import Home from './Components/Home/Home';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
