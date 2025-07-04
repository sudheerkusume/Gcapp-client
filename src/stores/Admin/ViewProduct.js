import React, { useEffect, useState } from 'react';
import axios from 'axios';

const categories = ["Pharmacy", "Snacks", "Eggs", "Petcare", "babycare", "Drinks", "Candies"];

const ViewProduct = () => {
  const [category, setCategory] = useState("Pharmacy");
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({
    id: "", Product: "", title: "", Offer: "", Size: "", Features: "",
    Features1: "", Features2: "", Flavour: "", ShelfLife: "", image: [""]
  });

  const fetchProducts = async () => {
  };

  useEffect(() => {
  const fetchProducts = async () => {
        try {
      const res = await axios.get(`https://gcapp-server.onrender.com/${category}`);
      setProducts(res.data);
    } catch (err) {
      alert("Failed to load product");
    }

  };
  fetchProducts();
}, [category]);


  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://gcapp-server.onrender.com/${category}/${id}`);
      alert("Deleted");
      fetchProducts();
    } catch (err) {
      alert("Delete failed");
    }
  };

  const getOneProduct = (_id) => {
    const prod = products.find((p) => p._id === _id);
    if (prod) setSelected(prod);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://gcapp-server.onrender.com/${category}/${selected._id}`, selected);
      alert("Updated successfully");
      fetchProducts();
    } catch (err) {
      alert("Update failed");
    }
  };

  const handleChange = (e) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };

  return (
    <div className='container p-3'>
      <h4 className=' display-6'>Products in Category</h4>
      <select  onChange={(e) => setCategory(e.target.value)} className='form-select mb-4 text-primary'>
        {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
      </select>

    <div style={{maxWidth: "1000px", margin:"auto", height:"70vh", overflowY:"auto", border: "1px solid #ccc",borderRadius:"8px", backgroundColor:"#fff"}}>
              <table className='table table-bordered ' >
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Offer</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.Product}</td>
              <td>{p.title}</td>
              <td>{p.Offer}</td>
              <td>{p.Size}</td>
              <td>
                <button className='btn btn-primary w-50 ' data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => getOneProduct(p._id)}>Edit</button>
                <button className='btn btn-danger w-50' onClick={() => deleteProduct(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

      {/* Edit Modal */}
      <div className="modal fade" id="editModal">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={updateProduct}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input name="Product" value={selected.Product} onChange={handleChange} className='form-control mb-2' placeholder='Product Name' />
              <input name="title" value={selected.title} onChange={handleChange} className='form-control mb-2' placeholder='Title' />
              <input name="Offer" value={selected.Offer} onChange={handleChange} className='form-control mb-2' placeholder='Offer' />
              <input name="Size" value={selected.Size} onChange={handleChange} className='form-control mb-2' placeholder='Size' />
              {/* Add other fields as needed */}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;