import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Weather from './weather';
import Fx from './fx';
function App() {
  return (
    <Router>
   
   
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="fx" element={<Fx/>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>


  
    </Router>
  );
}

export default App;
