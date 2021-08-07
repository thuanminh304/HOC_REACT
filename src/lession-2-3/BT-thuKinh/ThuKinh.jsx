import React, { Component } from "react";

export default class ThuKinh extends Component {
  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    ImgGlasses: "v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };
  handleChangeGlasses = (ImgGlasses) => {
    this.setState({
      ImgGlasses, //imgGlasses:imgGlasses
    });
    console.log(ImgGlasses);
  };
  styleH1 = {
    backgroundColor: "rgba(1,1,1,0.4)",
    color: "white",
    width: "65.8%",
    marginLeft: "145px",
  };
  styleImgGlasses = {
    position: "absolute",
    bottom: "109px",
    left: "51px",
    zIndex: "10",
  };

  styleMainRow = {
    position: "absolute",
    top: "0",
  };

  styleTabGlasses = {
    maxWidth: "64%",
    marginLeft: "161px",
    backgroundColor: "rgba(201, 76, 76, 0.3)",
    height: "50px",
  };
  render() {
    const { id, price, name, ImgGlasses, desc } = this.state;
    return (
      <div>
        <div className="container">
          <img src={`./images/background.jpg`} height="650px" alt="" />
          <div className="row m-0 " style={this.styleMainRow}>
            <div className="col-12">
              <h1 style={this.styleH1}>TRY GLASSES APP ONLINE</h1>
            </div>
            <div className="row m-auto ">
              <div className="col-6 mainTryGlasses ">
                <img
                  src={`./images/model.jpg`}
                  style={{ marginTop: "350px" }}
                  width="150px"
                  alt=""
                />
                <div className="renderMain">
                  <img
                    style={this.styleImgGlasses}
                    src={`./images/${this.state.ImgGlasses}`}
                    width="79px"
                    alt=""
                  />
                  <p>{this.state.price}</p>
                  <p>{this.state.name}</p>
                  <p>{this.state.desc}</p>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ marginTop: "350px" }}
                  src={`./images/model.jpg`}
                  width="150px"
                  alt=""
                />
              </div>
            </div>
            <div className="row col-12 " style={this.styleTabGlasses}>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v1.png");
                }}
              >
                <img src={`./images/v1.png`} width="40px" alt="" />
              </div>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v2.png");
                }}
              >
                <img src={`./images/v2.png`} width="40px" alt="" />
              </div>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v3.png");
                }}
              >
                <img src={`./images/v3.png`} width="40px" alt="" />
              </div>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v4.png");
                }}
              >
                <img src={`./images/v4.png`} width="40px" alt="" />
              </div>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v5.png");
                }}
              >
                <img src={`./images/v5.png`} width="40px" alt="" />
              </div>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v6.png");
                }}
              >
                <img src={`./images/v6.png`} width="40px" alt="" />
              </div>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v7.png");
                }}
              >
                <img src={`./images/v7.png`} width="40px" alt="" />
              </div>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v8.png");
                }}
              >
                <img src={`./images/v8.png`} width="40px" alt="" />
              </div>
              <div
                className="col-2"
                onClick={() => {
                  this.handleChangeGlasses("v9.png");
                }}
              >
                <img src={`./images/v9.png`} width="40px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
