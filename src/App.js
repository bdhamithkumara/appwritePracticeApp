import { BrowserRouter ,  Route ,  Routes } from "react-router-dom";
import Login from '../src/components/Login'
import Singup from '../src/components/Singup'

function App() {
  return (
    <BrowserRouter >
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/singup" element={<Singup/>}/>

     </Routes>
    </BrowserRouter>
  );
}

export default App;
