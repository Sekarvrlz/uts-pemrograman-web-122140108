const WasteCard = ({ waste }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{waste.nama}</h2>
      <p><strong>Jenis:</strong> {waste.jenis}</p>
      <p><strong>Berat:</strong> {waste.berat} kg</p>
      <p><strong>Lokasi:</strong> {waste.lokasi}</p>
      <p><strong>Tanggal:</strong> {new Date(waste.Tanggal * 1000).toLocaleDateString()}</p>
    </div>
  );
};

export default WasteCard;