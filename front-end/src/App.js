import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Create from "./Components/Create.jsx";
import Edit from "./Components/Edit.jsx";
import View from "./Components/View.jsx";
import SignIn from "./Components/SignIn.jsx";
import Register from "./Components/Register.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/view/:id" element={<View />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
