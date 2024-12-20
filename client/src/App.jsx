import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import CreatePost from "./pages/Post/CreatePost";
import CreateProfile from "./pages/CreateProfile";
import { RoutesDefinition } from "./Routes";
import Layout from "./components/Layout/Layout.jsx";
import { AuthProvider, LayoutAuthGuard } from "./components/Auth/Auth.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesDefinition.LOGIN} element={<Login />} />
          <Route path={RoutesDefinition.SIGNUP} element={<CreateProfile />} />
          <Route element={<Layout />}>
            <Route path={RoutesDefinition.HOME} element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route element={<LayoutAuthGuard />}>
              <Route path={RoutesDefinition.PROFILE} element={<Profile />} />
              <Route
                path={RoutesDefinition.NEW_POST}
                element={<CreatePost />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
