import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/axiosConfig";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const BrandComponent = () => {
  const [brands, setBrands] = useState([]);
  const [newBrand, setNewBrand] = useState({ name: "", description: "" });
  const [editingBrand, setEditingBrand] = useState(null);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axiosInstance.get("/brand/all");
      setBrands(response.data.brands);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBrand({ ...newBrand, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBrand) {
        const response = await axiosInstance.patch(
          `/brand/update/${editingBrand._id}`,
          newBrand
        );
        toast.success(response.data.msg);
        setEditingBrand(null);
      } else {
        const response = await axiosInstance.post(
          "/brand/create",
          newBrand
        );
        toast.success(response.data.msg);
      }
      setNewBrand({ name: "", description: "" });
      fetchBrands();
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleEdit = (brand) => {
    setNewBrand({ name: brand.name, description: brand.description });
    setEditingBrand(brand);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:5000/brand/delete/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      toast.success(response.data.msg);
      fetchBrands();
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* Manage Categories Form */}
        <div className="flex-1 max-w-md mx-auto bg-white shadow rounded p-4 mt-6">
          <h1 className="text-2xl font-bold mb-4">Manage Brands</h1>
          <form onSubmit={handleSubmit}>
            <ToastContainer />
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-1 font-medium">
                Brand Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={newBrand.name}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="description" className="mb-1 font-medium">
                Brand Description
              </label>
              <textarea
                name="description"
                id="description"
                value={newBrand.description}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {editingBrand ? "Update Brand" : "Add Brand"}
            </button>
          </form>
        </div>

        {/* Category List */}
<div className="flex-1 max-w-md mx-auto bg-white shadow rounded p-4 mt-6" style={{ height: '400px', overflowY: 'auto' }}>
  <h2 className="text-xl font-semibold mb-4">Brand List</h2>
  <ul>
    {brands.map((brand) => (
      <li
        key={brand._id}
        className="flex justify-between items-center border-b border-gray-300 py-2"
      >
        <div>
          <h3 className="font-medium">{brand.name}</h3>
          <p>{brand.description}</p>
        </div>
        <div>
          <button
            onClick={() => handleEdit(brand)}
            className="mr-2 text-blue-500"
          >
            <AiFillEdit />
          </button>
          <button
            onClick={() => handleDelete(brand._id)}
            className="text-red-500"
          >
            <AiFillDelete />
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

      </div>
    </div>
  );
};

export default BrandComponent;
