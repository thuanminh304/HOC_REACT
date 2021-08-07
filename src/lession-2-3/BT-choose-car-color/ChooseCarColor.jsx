import React, { Component } from "react";

export default class ChooseCarColor extends Component {
  state = {
    imgName: "black-car.jpg",
    imgWheels: "icon-wheel-1.jpg",
  };

  handleChangCarColor = (imgName) => {
    this.setState({
      imgName, //imgName:imgName
    });
  };
  handleChangeWheels = (imgWheels) => {
    this.setState({
      imgWheels,
    });
    console.log(imgWheels);
  };

  render() {
    const { imgName,imgWheels } = this.state;

    return (
      <div>
        <div className="container-fuild">
          <div className="row">
            <div className="col-4">
              <img
                src={`./images/${this.state.imgName}`}
                className="w-100"
                alt=""
              />
            </div>
            <div className="col-4">
              <img src={`./images/${this.state.imgWheels}`} alt="" 
              className="w-50"/>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-header">
                  Exterior Color
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item"
                      onClick={() => {
                        this.handleChangCarColor("black-car.jpg");
                      }}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="./images/icon-black.jpg"
                            width="60px"
                            alt=""
                          />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                          Crystal Black
                        </div>
                      </div>
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => {
                        this.handleChangCarColor("steel-car.jpg");
                      }}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="./images/icon-steel.jpg"
                            width="60px"
                            alt=""
                          />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                          Modern Steel
                        </div>
                      </div>
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => {
                        this.handleChangCarColor("silver-car.jpg");
                      }}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="./images/icon-silver.jpg"
                            width="60px"
                            alt=""
                          />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                          Lunar Silver
                        </div>
                      </div>
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => {
                        this.handleChangCarColor("red-car.jpg");
                      }}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="./images/icon-red.jpg"
                            width="60px"
                            alt=""
                          />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                          Rallye Red
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-header">
                  Exterior Wheels
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item"
                      onClick={() => {
                        this.handleChangeWheels("icon-wheel-1.jpg");
                      }}
                    >
                      <div className="row">
                        <div className="col-10 d-flex align-items-center">
                          Wheel 1
                        </div>
                      </div>
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => {
                        this.handleChangeWheels("icon-wheel-2.jpg");
                      }}
                    >
                      <div className="row">
                        <div className="col-10 d-flex align-items-center">
                          Wheel 2
                        </div>
                      </div>
                    </li>
                    <li
                      className="list-group-item"
                      onClick={() => {
                        this.handleChangeWheels("icon-wheel-3.jpg");
                      }}
                    >
                      <div className="row">
                        <div className="col-10 d-flex align-items-center">
                          Wheel 3
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
