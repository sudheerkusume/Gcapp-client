import React, { useState } from 'react'
import axios from 'axios';
const categories = [
    "Pharmacy",
    "Petcare",
    "babycare",
    "Eggs",
    "Snacks",
    "Drinks",
    "Candies",
];
const AddProduct = () => {
    const [category, setCategory ] = useState("Snacks")

    const [product, setProduct] = useState({
        id: "",
        Product : "",
        title : "",
        Offer : "",
        Size : "",
        Features : "",
        Features1: "",
        Features2: "",
        Flavour : "",
        ShelfLife: "",
        Unit : "",
        seller: "",
        seller_FSSAI: "",
        Description: "",
        Disclaimer : "",
        image : [""],
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct((prev) => ({...prev, [name]: value,}));
    };

    const handleImageChange = (index, value) => {
        const newImages = [...product.image];
        newImages[index] = value;
        setProduct({...product, image: newImages});
    };

    const addImageField = () => {
        setProduct({ ...product, image: [...product.image, ""]});
    };

    const handleSubmit = async (e) => {
  e.preventDefault();

  // 🚨 Add this validation
  if (!product.Product || !product.title) {
    alert("Please fill out required fields: Product and title");
    return;
  }

  try {
    await axios.post(`https://gcapp-server.onrender.com/${category}`, product);
    alert("Product added successfully");
    setProduct({
      id: "",
      Product: "",
      title: "",
      Offer: "",
      Size: "",
      Features: "",
      Features1: "",
      Features2: "",
      Flavour: "",
      ShelfLife: "",
      Unit: "",
      seller: "",
      seller_FSSAI: "",
      Description: "",
      Disclaimer: "",
      image: [""],
    });
  } catch (err) {
    alert("Error adding product");
    console.error(err);
  }
};
  return (
    <div style={{maxWidth: "700px", margin:"auto", height:"78vh", overflowY:"auto", padding:"20px", border: "1px solid #ccc",borderRadius:"8px", backgroundColor:"#fff"}}>
        <h2>AddProduct</h2>
        <label>category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}  style={{width:"100%", marginBottom: "20px", padding: "8px"}}>
        {
            categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))
        }
        </select>

        <form onSubmit={handleSubmit}>
            {Object.entries(product).map(([key, value]) => {
                if(key === "image") {
                    return(
                        <div key="images">
                            <label>images</label>
                            {
                                value.map((url, idx) => (
                                    <input key={idx} type="text" value={url} onChange={(e) => handleImageChange(idx, e.target.value)} placeholder={`Image URL ${idx + 1}`} style={{width:"100%", marginBottom: "10px"}}></input>
                                ))
                            }
                               <button type="button" onClick={addImageField}>Add Another Image</button>
                        </div>
                    );
                }
                return(
                    <input key={key} type="text" name={key} value={value} onChange={handleChange} placeholder={key} style={{width: "100%", marginBottom: "10px"}}>
                    </input>
                );
            })}
            <button type='submit' className='btn btn-success'>Add</button>
        </form>
    </div>
  )
}

export default AddProduct