import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Post from "./pages/Post";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
