import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageTwo from "./pages/PageTwo";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/page2" element={<PageTwo />} />
    </Routes>
  </Router>
);

export default App;
