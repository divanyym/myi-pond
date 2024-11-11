import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";


import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPages";
import FaqPage from "./pages/FaqPage";
import ExplorePage from "./pages/ExplorePage";
import ServicesPage from "./pages/ServicesPage";


function App() {
   return (
      <div>
         <NavbarComponent/>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPages />} />
            <Route path="/Services" element={<ServicesPage />} />
            <Route path="/Explore" element={<ExplorePage />} />
            <Route path="/faq" element={<FaqPage />} />
         </Routes>

         {/* <Footer/> */}
      </div>
   );
}

export default App;
