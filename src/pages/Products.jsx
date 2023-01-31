import axios from "axios";
import React, { useEffect } from "react";

function Products() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=10`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="products-container">
      <div className="products__title-wrapper">
        <h1 className="products-title">Get products</h1>
        <p className="products-url">
          [GET] https://api.escuelajs.co/api/v1/products
        </p>
      </div>
      <div className="product-cards">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product__image-wrapper">
              <img className="card-img" src={product.category.image} alt="1" />
            </div>
            <div className="card-infos">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price ">
                <b>Price:</b> ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
