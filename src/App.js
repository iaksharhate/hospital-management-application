import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AuthRoute from "./AuthRoute";
import Dashboard from "./Component/Dashboard/Dashboard";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import { RoutesPath } from "./Component/helper";
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
          <Route path={RoutesPath.SHOW_PATIENTS} />
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
