import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom" ;
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/main" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
