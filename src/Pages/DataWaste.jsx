import { useWasteContext } from "../context/WasteContext";
import { useState, useEffect } from "react";

const DataWaste = () => {
  const { wasteData, loading, fetchWasteData } = useWasteContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Menampilkan 10 data per halaman

  useEffect(() => {
    fetchWasteData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Filter data berdasarkan pencarian
  const filteredWaste = (wasteData || []).filter((waste) =>
    waste.nama ? waste.nama.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );

  // Hitung jumlah halaman
  const totalPages = Math.ceil(filteredWaste.length / itemsPerPage);

  // Data yang ditampilkan per halaman
  const displayedWaste = filteredWaste.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container">
      {/* Teks Berjalan */}
      <div className="marquee-container">
        <h1 className="marquee-text">Data Penjual Sampah</h1>
      </div>

      {/* Input Pencarian */}
      <input
        type="text"
        placeholder="Cari nama..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset ke halaman pertama saat pencarian berubah
        }}
      />

      {loading ? (
        <p className="loading-text">Memuat data...</p>
      ) : filteredWaste.length === 0 ? (
        <p className="no-data">Tidak ada data ditemukan.</p>
      ) : (
        <div className="table-container">
          <table className="waste-table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Jenis</th>
                <th>Berat (kg)</th>
                <th>Lokasi</th>
                <th>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {displayedWaste.map((waste) => (
                <tr key={waste.id}>
                  <td>{waste.nama || "Tidak ada data"}</td>
                  <td>{waste.jenis || "Tidak ada data"}</td>
                  <td>{waste.berat || "0"}</td>
                  <td>{waste.lokasi || "Tidak ada data"}</td>
                  <td>
                    {waste.Tanggal
                      ? new Date(waste.Tanggal * 1000).toLocaleDateString()
                      : "Tidak ada tanggal"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="pagination">
            <button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
              disabled={currentPage === 1}
            >
              &laquo; Sebelumnya
            </button>
            <span> Halaman {currentPage} dari {totalPages} </span>
            <button 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
              disabled={currentPage === totalPages}
            >
              Berikutnya &raquo;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataWaste;
