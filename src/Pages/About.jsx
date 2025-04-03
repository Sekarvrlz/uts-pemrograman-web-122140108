import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutWaste = () => {
  const [wasteData, setWasteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://67e693086530dbd311108c3a.mockapi.io/DataSampah")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Jaringan bermasalah");
        }
        return response.json();
      })
      .then((data) => {
        setWasteData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="marquee-container">
      <h1 className="marquee-text">Tentang Sampah yang Bisa Dijual</h1>
      </div>
      <p>Berikut adalah beberapa jenis sampah yang dapat diperjualbelikan beserta harga per kilogramnya.</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="waste-list">
          {wasteData.map((waste) => (
            <div key={waste.nama} className="waste-item about-item">
              <h2>{waste.nama}</h2>
              <img src={waste.gambar} alt={waste.nama} className="waste-image" />
              <p>Harga per kg: Rp {waste.harga_per_kg}</p>
              <button 
                className="sell-button" 
                onClick={() => navigate("/sellwaste", { state: { waste } })}
              >
                Jual Sampah
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutWaste;
