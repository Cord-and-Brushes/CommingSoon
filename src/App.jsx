import ContactUs from "./pages/ContactUs/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/common/Navbar";
import AboutPage from "./pages/About/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import SubscribeForm from "./pages/ContactUs/Subscriber";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gradient-to-tr from-white to-purple-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/subscribe" element={<SubscribeForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
