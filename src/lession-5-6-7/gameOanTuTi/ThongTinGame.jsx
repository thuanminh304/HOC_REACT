import React, { Component } from "react";
import { connect } from "react-redux";
import { actChonOTT, actPlayGame } from "../../store/action/gameOanTuTiAction";
class ThongTinGame extends Component {
  render() {
    const {
      luaChon,
    //   luaChonBua,
    //   luaChonKeo,
      soBanChoi,
      soBanThang,
      mangOanTuTi,
      chonOTT,
      playGame,
      imgPlayer,
      imgPlayerC
    } = this.props;
    return (
      <div className="container ">
        <div className="row ">
          <div className="col-4">
            <div>
              <img id="thayDoi"
                src={`./images/keo.png`}
                width="70px"
                height="70px"
                alt=""
              />
            </div>
            <img
              src={imgPlayer}
              width="50px"
              height="50px"
              alt=""
            />
            <div className="div d-flex justify-content-center">
              <img
                onClick={() => {
                  chonOTT("keo");
                }}
                src={`${"./images/keo.png"}`}
                width="30px"
                height="30px"
                alt=""
              />
              <img
                onClick={() => {
                  chonOTT("bua");
                }}
                src={`./images/bua.png`}
                width="30px"
                height="30px"
                alt=""
              />
              <img
                onClick={() => {
                  chonOTT("bao");
                }}
                src={`./images/bao.png`}
                width="30px"
                height="30px"
                alt=""
              />
            </div>
          </div>
          <div className="col-4">
            <h3>I'm iron man, i love you 3000 !!</h3>
            <h1>
              Số bàn thăng : <span>{soBanThang}</span>
            </h1>
            <h1>
              Số bàn chơi: <span>{soBanChoi}</span>
            </h1>
          </div>
          <div className="col-4">
            <div>
              <img src={mangOanTuTi[0].hinhAnh} width="70px" height="70px" alt="" />
            </div>
            <img
              src={imgPlayerC}
              width="50px"
              height="50px"
              alt=""
            />
          </div>
        </div>
        <button
          onClick={() => {
            playGame();
          }}
        >
          PLAY GAME
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangOanTuTi: state.gameOanTuTiReducer.mangOanTuTi,
  imgPlayer:state.gameOanTuTiReducer.imgPlayer,
  imgPlayerC:state.gameOanTuTiReducer.imgPlayerC,
  soBanThang: state.gameOanTuTiReducer.soBanThang,
  soBanChoi: state.gameOanTuTiReducer.soBanChoi,
  luaChon: state.gameOanTuTiReducer.luaChon
//   luaChonBao: state.gameOanTuTiReducer.luaChonBao,
//   luaChonBua: state.gameOanTuTiReducer.luaChonBua,
});

const mapDispatchToProps = (dispatch) => ({
  chonOTT: (luaChon) => {
    dispatch(actChonOTT(luaChon));
  },
  playGame: () => {
    dispatch(actPlayGame());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGame);
