import React, { useEffect } from "react";
import { errorToast } from "../../utils/TostMessage";
import axiosInstance from "../../utils/axiosInstance";
const Categories = () => {
  const [categoryList, setCategotyList] = React.useState([]);

  useEffect(() => {
    axiosInstance
      .get("/categoryWiseNumOfMenuItem")
      .then((res) => {
        setCategotyList(res.data["data"]);
      })
      .catch((err) => {
        errorToast("Something went wrong");
      });
  }, []);
  return (
    <div className="row categories">
      {categoryList.map((item, i) => (
        <div className="category-item col-md-6" key={item._id}>
          <img src="images/logo.png" alt="" />
          <p>{item.ItemCategory}</p>
          <h3>{item.numberOfMenuItems}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
