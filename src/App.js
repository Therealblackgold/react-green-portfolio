import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/Home/Homepage";
import BlogList from "./components/blog/BlogList";
import Blog from "./components/blog/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/react-green-portfolio">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:blogId" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
