import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import PrivateRoute from "./Route/PrivateRoute";
import OnlineAdmissionRoot from "./components/OnlineRegistrationForm/OnlineAdmissionRoot/OnlineAdmissionRoot";
import SignIn from "./components/User/SignIn";
import SignUp from "./components/User/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <OnlineAdmissionRoot />
            </>
          }
        />
        <Route
          exact
          path="/signin"
          element={
            <>
              <Header />
              <SignIn/>
            </>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <>
              <Header />
              <SignUp/>
            </>
          }
        />
        {/* <Route exact path="/me" element={<PrivateRoute />}>
          <Route
            exact
            path="/me"
            element={
              <>
                <Header />
              </>
            }
          />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
