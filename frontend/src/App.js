import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "./features/user/userSlice";

function App() {
  // const location = useLocation();
  // const dispatch = useDispatch();
  // console.log(location);
  // if (location.pathname == "/") {
  //   Cookies.set("userInfo", "");
  //   dispatch(logout);
  // }
  return (
    <div className="App">
      <Routes>
        {/* <Route element={<LoggedInRoutes />}> */}
        <Route path="/chats" element={<ChatPage />} exact />
        {/* </Route> */}
        {/* <Route element={<NotLoggedInRoutes />}> */}
        <Route path="/" element={<HomePage />} exact />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
