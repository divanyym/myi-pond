import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import MoreInfoSidebar from "./components/MoreInfo";


import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPages";
import PredictionPage from "./pages/Prediksi";
import ServicesPage from "./pages/ServicesPage";


function App() {
   return (
      <div>
         <NavbarComponent/>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPages />} />
            <Route path="/Monitoring" element={<ServicesPage />} />
            <Route path="/Info" element={<MoreInfoSidebar />} />
            <Route path="/Prediksi" element={<PredictionPage />} />
         </Routes>

         <Footer/> 
      </div>
   );
}

export default App;
