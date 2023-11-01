import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import { RoutesPath } from "./Component/helper";
import CreateDoctor from "./Component/Dashboard/CreateDoctor";
import UpdateUser from "./Component/Dashboard/UpdateUser";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={RoutesPath.SIGNIN} element={<AuthRoute><SignIn /></AuthRoute> } />
        <Route path={RoutesPath.SIGNUP} element={<AuthRoute><SignUp /></AuthRoute>} />
        <Route path={RoutesPath.DASHBOARD} element={ <ProtectedRoute><Dashboard /></ProtectedRoute> }>
          <Route path={RoutesPath.BOOK_APPOINTMENT}/>
          <Route path={RoutesPath.SHOW_APPOINTMENT} />
          <Route path={RoutesPath.SHOW_DOCTOR} />
          <Route path={RoutesPath.INSURANCE} />
          <Route path={RoutesPath.ABOUT} />
          <Route path={RoutesPath.CREATE_DOCTOR}/>
          {/* <Route path={`${RoutesPath.UPDATE_DOCTOR}/:doctorId`} element={<UpdateDoctor />} /> */}
          <Route path={RoutesPath.UPDATE_DOCTOR}/>
          <Route path={RoutesPath.UPDATE_PATIENT}/>
          <Route path={RoutesPath.RESCHEDULE_APPOINTMENT}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
