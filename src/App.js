import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
