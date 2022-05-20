import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import LoadingComponent from "./components/LoadingComponent";
import NavComponent from "./components/NavComponent";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postid" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
