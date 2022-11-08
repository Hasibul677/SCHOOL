import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import PrivateRoute from "./Route/PrivateRoute";
import OnlineAdmissionRoot from './components/OnlineRegistrationForm/OnlineAdmissionRoot/OnlineAdmissionRoot'

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
