//this is a server component

import Button from "./button";

async function prodList() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data.products
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default async function ProductList() {
    let products = await prodList();
    console.log(products)
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((item) => (
                    <div>
                        <h5>Name: {item.title}, Price : {item.price}</h5>
                        <Button price={item.price} />
                    </div>
                ))
            }
        </div>
    );
}

