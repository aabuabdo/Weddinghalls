import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  // State to store category details
  const [Categorys, setCategorys] = useState([
    {
      id: 1,
      name: "Wedding halls",
      image:
        "https://www.arabiaweddings.com/sites/default/files/styles/max980/public/articles/2020/02/wedding_venues_in_amman.png?itok=x_xRR00O",
    },
    {
      id: 2,
      name: "Cars ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHa7mDZ1YWNXpw-Cp5xLoblzTkEl3BboiiMQ&s",
    },
    {
      id: 3,
      name: "farms ",
      image:
        "data:image/jpeg;base64,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",
    },
  ]);
  const GoTo = () => {
    navigate("/weddinghalls");
  };
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Categories</h2>
      <div className="row">
        {Categorys.map((category) => (
          <div key={category.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="category-item" onClick={GoTo}>
              <img
                src={category.image}
                alt={category.name}
                className="category-image img-fluid rounded"
              />
              <h3 className="mt-2 text-center">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
