import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
// import Post from "./pages/Post";
import CreateProfile from "./pages/CreateProfile";
import { RoutesDefinition } from "./Routes";
function App() {
  // <Route path="/post" element={<Post />} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesDefinition.LOGIN} element={<Login />} />
        <Route path={RoutesDefinition.SIGNUP} element={<CreateProfile />} />
        <Route path={RoutesDefinition.HOME} element={<Home />} />
        <Route path={RoutesDefinition.PROFILE} element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
