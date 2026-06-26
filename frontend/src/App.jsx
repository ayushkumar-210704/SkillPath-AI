import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/admin/LandingPage.jsx";
import AboutPage from "./pages/admin/AboutPage.jsx";
import ContactPage from "./pages/admin/ContactPage.jsx";
import NotFoundPage from "./pages/admin/NotFoundPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;