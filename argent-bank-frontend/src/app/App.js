import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/main.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HomePage from "../view/index";
import SignIn from "../view/sign/sign";
import User from "../view/user/user";
import Error from "../view/error/error";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
