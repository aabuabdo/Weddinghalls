import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Weddinghalls() {
  const navigate = useNavigate();
  const hallsData = [
    {
      id: 1,
      name: "Wedding Hall 1",
      address: "Address 1",
      governorate: "Amman",
      region: "Downtown",
    },
    {
      id: 2,
      name: "Wedding Hall 2",
      address: "Address 2",
      governorate: "Zarqa",
      region: "New Zarqa",
    },
    {
      id: 3,
      name: "Wedding Hall 3",
      address: "Address 3",
      governorate: "Irbid",
      region: "Irbid City",
    },
    // ... أضف بيانات 100 صالة هنا
  ];
  const GoTo = () => {
    navigate("/WeddingHallsbyid");
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("All");

  // فلتر الصالات حسب البحث والمحافظة
  const filteredHalls = hallsData.filter((hall) => {
    const matchesSearchTerm = hall.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGovernorate =
      selectedGovernorate === "All" || hall.governorate === selectedGovernorate;
    return matchesSearchTerm && matchesGovernorate;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGovernorateChange = (e) => {
    setSelectedGovernorate(e.target.value);
  };

  const governorates = ["All", "Amman", "Zarqa", "Irbid", "Aqaba", "Mafraq"]; // إضافة جميع المحافظات

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Wedding Halls</h2>

      {/* فلتر البحث */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* فلتر المحافظات */}
      <div className="mb-4">
        <select
          className="form-select"
          value={selectedGovernorate}
          onChange={handleGovernorateChange}
        >
          {governorates.map((gov) => (
            <option key={gov} value={gov}>
              {gov}
            </option>
          ))}
        </select>
      </div>

      {/* عرض الصالات */}
      <div className="row">
        {filteredHalls.map((hall) => (
          <div key={hall.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="category-item" onClick={GoTo}>
              <img
                src={`https://i.pinimg.com/originals/27/f5/94/27f5946583ff1bb4226a742b49d15dd0.jpg`}
                alt={hall.name}
                className="category-image img-fluid rounded"
              />
              <h3 className="mt-2 text-center">{hall.name}</h3>
              <p className="text-center">{hall.address}</p>
              <p className="text-center text-muted">
                {hall.governorate} - {hall.region}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weddinghalls;
