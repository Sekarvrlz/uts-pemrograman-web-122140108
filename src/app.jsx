import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WasteProvider } from './context/WasteContext'; // Tambahkan ini
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import SellWaste from "./Pages/SellWaste"; // Import halaman penjualan sampah
import DataWaste from './Pages/DataWaste';
import About from './Pages/About';
import './global.css';

const App = () => {
  return (
    <WasteProvider> {/* Bungkus di dalam WasteProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell-waste" element={<SellWaste />} />
          <Route path="/data-waste" element={<DataWaste />} />
          <Route path="/about" element={<About />} />
          <Route path="/sellwaste" element={<SellWaste />} />
          <Route path="/about-waste" element={<About />} />
        </Routes>
      </Router>
    </WasteProvider>
  );
};

export default App;
