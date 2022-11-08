import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import PrivateRoute from "./Route/PrivateRoute";

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
