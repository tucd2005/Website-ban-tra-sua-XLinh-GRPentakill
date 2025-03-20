import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/layout/login";
import Header from "./component/layout/header";
import SignUp from "./component/layout/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
