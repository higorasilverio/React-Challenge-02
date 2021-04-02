import React from "react";
import Table from "react-bootstrap/Table";

import products from "../../data/products";

import "./ProductsTable.css";

const ProductsTable = () => {
  const prod = products.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>U$ {product.price.toFixed(2)}</td>
      </tr>
    );
  });
  return (
    <div className="ProductsTable">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{prod}</tbody>
      </Table>
    </div>
  );
};

export default ProductsTable;
