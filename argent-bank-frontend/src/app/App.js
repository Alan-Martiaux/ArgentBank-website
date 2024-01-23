import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/main.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HomePage from "../view/index";
import SignIn from "../view/sign/sign";
import User from "../view/user/user";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
