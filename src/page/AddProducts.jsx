import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../services/firebase'

const initialdata = {
  title: "",
  price: 0,
  image: "",
  category: "",
  description: ""
}

const AddProduct = () => {

  const [formdata, setformdata] = useState(initialdata)

  const { title, price, description, image, category } = formdata

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    addDoc(collection(db, "products"), formdata)
      .then((res) => {
        console.log(res)
        alert("Data Added...")
        setformdata(initialdata) // Reset form data after submission
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  }

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  }

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    margin: "20px 0",
    backgroundColor: "#646cff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 200ms ease-in-out",
  }

  const buttonHoverStyle = {
    backgroundColor: "#515bb5",
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Add Product Page</h1>
      <form onSubmit={handlesubmit}>
        <input
          style={inputStyle}
          name="image"
          value={image}
          onChange={handlechange}
          type="text"
          placeholder="Image URL"
        />
        <input
          style={inputStyle}
          name="title"
          value={title}
          onChange={handlechange}
          type="text"
          placeholder="Product Title"
        />
        <select
          style={inputStyle}
          name="category"
          value={category}
          onChange={handlechange}
        >
          <option value="">Select Category</option>
          <option value="Men's Cloths">Men's Clothing</option>
          <option value="Women's Cloths">Women's Clothing</option>
          <option value="Jwelery">Jewelry</option>
          <option value="Electronics">Electronics</option>
        </select>
        <input
          style={inputStyle}
          name="price"
          value={price}
          onChange={handlechange}
          type="number"
          placeholder="Price"
        />
        <input
          style={inputStyle}
          name="description"
          value={description}
          onChange={handlechange}
          type="text"
          placeholder="Description"
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#515bb5")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#646cff")}
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
