import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import Appointment from "./Component/Appointment/Appointment";
import { RoutesPath } from "./Component/helper";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={RoutesPath.SIGNIN} element={<SignIn />} />
        <Route path={RoutesPath.SIGNUP} element={<SignUp />} />
        <Route path={RoutesPath.DASHBOARD} element={<Dashboard />}>
          <Route path={RoutesPath.BOOK_APPOINTMENT}/>
          <Route path={RoutesPath.SHOW_APPOINTMENT} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
