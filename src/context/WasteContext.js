import { createContext, useContext, useEffect, useState } from "react";

const WasteContext = createContext();

export const WasteProvider = ({ children }) => {
  const [wasteData, setWasteData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data sampah dari API
  const fetchWasteData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://67e693086530dbd311108c3a.mockapi.io/Sampah");
      const data = await response.json();
      setWasteData(data); // Menyimpan semua data yang diterima
    } catch (error) {
      console.error("Error fetching waste data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWasteData();
  }, []);

  return (
    <WasteContext.Provider value={{ wasteData, loading, fetchWasteData }}>
      {children}
    </WasteContext.Provider>
  );
};

// Hook untuk menggunakan data sampah di komponen lain
export const useWasteContext = () => useContext(WasteContext);
