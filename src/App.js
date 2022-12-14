import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import EmployeePage from "./pages/EmployeePage";
import EmployeeList from "./components/EmployeeList";

export default function App() {

  return (
    <div className="App">

      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee" element={<EmployeeList/>} />
        <Route path="/employee/:id" element={<EmployeePage/>} />
      </Routes> 
     
    </div>
  );
}
