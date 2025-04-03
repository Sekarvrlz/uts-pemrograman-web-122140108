import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useWasteContext } from "../context/WasteContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { wasteData } = useWasteContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedTerm, setHighlightedTerm] = useState("");

  useEffect(() => {
    if (highlightedTerm) {
      setTimeout(() => {
        setHighlightedTerm("");
      }, 3000);
    }
  }, [highlightedTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const pages = {
      beranda: "/",
      "data sampah": "/data-waste",
      tentang: "/about",
    };

    const foundPage = Object.keys(pages).find((page) =>
      page.includes(searchTerm.toLowerCase())
    );
    if (foundPage) {
      navigate(pages[foundPage]);
      return;
    }

    const foundWaste = wasteData.find((waste) =>
      waste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundWaste) {
      navigate("/data-waste");
      setHighlightedTerm(searchTerm.toLowerCase());
    }
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="navbar-container flex justify-center items-center p-4">
        {/* Navigasi Tengah */}
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Beranda
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            Sampah
          </Link>
          <Link to="/data-waste" className="text-gray-700 hover:text-blue-600">
            Data Penjual Sampah
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
