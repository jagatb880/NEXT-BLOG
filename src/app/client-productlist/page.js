"use client"
import { useEffect, useState } from "react";

//this is a client component
export default function ProductList() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Perform the fetch and wait for the response
                const response = await fetch("https://dummyjson.com/products");

                // Check if the response was successful (status code 200)
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                // Parse the JSON data
                const data = await response.json();

                // Log the data
                console.log(data.products);
                setProduct(data.products)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);
    return (
        <div>
            <h1>Product List</h1>
            {
                product.map((item) => (
                    <h5>Name: {item.title}, Price : {item.price}</h5>
                ))
            }
        </div>
    );
}
