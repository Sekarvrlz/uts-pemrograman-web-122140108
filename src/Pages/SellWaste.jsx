import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutWaste from "./About"; // Pastikan path yang benar

const SellWaste = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const wasteData = location.state?.waste || {};

  const [formData, setFormData] = useState({
    nama: "",
    jenis: wasteData.nama || "",
    berat: "",
    lokasi: "",
    harga: wasteData.harga_per_kg || "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // Daftar lokasi tempat loak atau penjualan sampah
  const lokasiOptions = [
    "Bank Sampah Induk Kota Bandar Lampung",
    "Bank Sampah Surya Mandiri",
    "TPS 3R (Tempat Pengolahan Sampah Reduce, Reuse, Recycle) Kemiling",
    "Bank Sampah Hijau Lestari",
    "Pengepul Barang Bekas Cahaya Rezeki",
  ];

  useEffect(() => {
    setFormData((prevForm) => ({
      ...prevForm,
      jenis: wasteData.nama || "",
      harga: wasteData.harga_per_kg || "",
    }));
  }, [wasteData]);

  const calculateTotalPrice = (berat) => {
    return (wasteData.harga_per_kg || 0) * berat;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "berat") {
      const totalHarga = calculateTotalPrice(value);
      setFormData({
        ...formData,
        [name]: newValue,
        harga: totalHarga,
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.jenis || !formData.berat || !formData.lokasi || !formData.harga) {
      alert("Harap isi semua kolom!");
      return;
    }
    setShowPopup(true);
    setFormData({
      nama: "",
      jenis: wasteData.nama || "",
      berat: "",
      lokasi: "",
      harga: wasteData.harga_per_kg || "",
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/about-waste");
  };

  return (
    <div className="container">
      <div className="card">
      <div className="marquee-container">
        <h1 className="marquee-text">Jual Sampah Kurangi Limbah</h1>
      </div>
        <form onSubmit={handleSubmit} className="form">
          <label>Nama</label>
          <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />

          <label>Jenis Sampah</label>
          <input type="text" name="jenis" value={formData.jenis} readOnly />

          <label>Berat (kg)</label>
          <input type="number" name="berat" value={formData.berat} onChange={handleChange} required />

          <label>Lokasi</label>
          <select name="lokasi" value={formData.lokasi} onChange={handleChange} required>
            <option value="">Pilih Lokasi</option>
            {lokasiOptions.map((lokasi, index) => (
              <option key={index} value={lokasi}>{lokasi}</option>
            ))}
          </select>

          <label>Harga (Rp)</label>
          <input type="number" name="harga" value={formData.harga} readOnly />

          <button type="submit" className="submit-button">Jual Sampah</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Penjualan Berhasil</h2>
            <p>Sampah berhasil dijual!</p>
            <button onClick={handleClosePopup} className="close-button">Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellWaste;
