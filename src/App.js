import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Weather from './weather';
import Navbar from "./components/navbar";
import Fx from './fx';
import Home from './pages/home';
function App() {
  return (

    <Router>
   
   <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="fx" element={<Fx/>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>


  
    </Router>
 
  );
}

export default App;
