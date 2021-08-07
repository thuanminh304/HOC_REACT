import React, { Component } from "react";

export default class DemoListsAndKeys extends Component {
  productList = [
    {
      id: 1,
      name: "Crystal Black",
      price: 2000,
      images: "./images/black-car.jpg",
    },
    {
      id: 2,
      name: "Modern Steel",
      price: 3000,
      images: "./images/steel-car.jpg",
    },
    {
      id: 3,
      name: "Lunar Silver",
      price: 4000,
      images: "./images/silver-car.jpg",
    },
    {
      id: 4,
      name: "Rallye Red",
      price: 5000,
      images: "./images/red-car.jpg",
    },
  ];

  renderProductList = () => {
    return this.productList.map((car, index) => {
      const { id, name, price, images } = car;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img src={images} width="68px" alt="" />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center my-4">LIST OF FASHION CAR</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.renderProductList()}
            {/* có thể viết trực tiếp vào đây  */}
            {this.productList.map((car, index) => {
              const { id, name, price, images } = car;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>
                    <img src={images} width="68px" alt="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
