import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import CreatePost from "./pages/Post/CreatePost";
import CreateProfile from "./pages/CreateProfile";
import { RoutesDefinition } from "./Routes";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesDefinition.LOGIN} element={<Login />} />
        <Route path={RoutesDefinition.SIGNUP} element={<CreateProfile />} />
        <Route element={<Layout />}>
          <Route path={RoutesDefinition.HOME} element={<Home />} />
          <Route path={RoutesDefinition.PROFILE} element={<Profile />} />
          <Route path={RoutesDefinition.NEW_POST} element={<CreatePost />} />
          <Route path="/feed" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
