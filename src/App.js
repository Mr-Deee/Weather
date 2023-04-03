import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Weather from './weather';
function App() {
  return (
    <Router>
   
   
      <Routes>
        <Route path="/" element={<Weather />} />
        
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>


  
    </Router>
  );
}

export default App;
