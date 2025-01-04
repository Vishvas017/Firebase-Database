import axios from 'axios'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

import React, { useEffect, useState } from 'react'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setdata] = useState([])

    const Getdata = async () => {
        getDocs(collection(db, "products"))
            .then((res) => {
                const filterdata = res.docs.map((el) => ({ id: el.id, ...el.data() }))
                setdata(filterdata)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteproduct = (id) => {
        deleteDoc(doc(db, "products", id))
            .then((res) => {
                console.log(res)
                alert("Data Deleted...")
                Getdata()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        Getdata()
    }, [])

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        width: "95%",
        margin: "20px auto",
    }

    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
    }

    const cardHoverStyle = {
        transform: "scale(1.05)"
    }

    const buttonStyle = {
        backgroundColor: "#646cff",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
        textDecoration: "none",
        display: "inline-block",
    }

    const linkStyle = {
        textDecoration: "none",
        color: "white",
    }

    return (
        <div>
            <h1 style={{ textAlign: "center", margin: "20px 0", color: "#333" }}>Product Page</h1>
            <div style={containerStyle}>
                {data.map((el) => (
                    <div
                        key={el.id}
                        style={{ ...cardStyle }}
                        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img src={el.image} alt="" height={200} width={200} style={{ borderRadius: "8px" }} />
                        <h3 style={{ margin: "10px 0", color: "#444" }}>{el.title}</h3>
                        <h3 style={{ margin: "5px 0", color: "#888" }}>${el.price}</h3>
                        <h3 style={{ margin: "5px 0", color: "#888" }}>{el.category}</h3>
                        <p style={{ fontSize: "14px", color: "#666" }}>{el.description}</p>
                        <button style={buttonStyle}>
                            <Link to={`/editproduct/${el.id}`} style={linkStyle}>
                                EDIT
                            </Link>
                        </button>&nbsp;
                        <button
                            onClick={() => deleteproduct(el.id)}
                            style={{ ...buttonStyle, backgroundColor: "#ff4d4f" }}
                        >
                            DELETE
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
