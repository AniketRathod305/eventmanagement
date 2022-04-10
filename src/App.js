import AddEvent from "./components/AddEvent";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import './App.css';
import ViewEvent from "./components/ViewEvent";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UpdateorDeleteEvent from "./components/UpdateorDeleteEvent";

function App() {
  return (
    <Router>
    <div className="App">
            
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/add" element={<AddEvent />}></Route>
        <Route path="/view" element={<ViewEvent />}></Route>
        <Route path="/updateordelete" element={<UpdateorDeleteEvent />}></Route>
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
