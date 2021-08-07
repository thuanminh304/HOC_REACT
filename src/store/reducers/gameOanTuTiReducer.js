import { CHON_OTT, PLAY_GAME } from "../constants/gameOanTuTiConst";

const initialState = {
  mangOanTuTi: [
    {
      hinhAnh: "./images/imageOTT/keo.png",
    }
    
  ],
  imgPlayer: "./images/imageOTT/player.png",
  imgPlayerC: "./images/imageOTT/playerComputer.png",
  luaChon: "keo",
  soBanThang: 0,
  soBanChoi: 0,
};

const gameOanTuTiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHON_OTT: {
      debugger
      console.log(payload);
      let thayDoi = document.getElementById("thayDoi");
      if (state.luaChon === "keo") {
        thayDoi.src = "./images/keo.png";
      } else if (state.luaChon === "bua") {
        thayDoi.src = "./images/bua.png";
      } else if (state.luaChon === "bao") {
        thayDoi.src = "./images/bao.png";
      }

      return {
        ...state,
        luaChon: payload,
      };
    }
    case PLAY_GAME: {
      const mangOTTrandom = [];
      state.soBanChoi++;
      let randomOTT = Math.floor(Math.random() * 3) + 1;

      let OTTrandom = {};
      if (randomOTT === 1) {
        OTTrandom = {
          hinhAnh: "./images/keo.png",
        };
      } else if (randomOTT === 2) {
        OTTrandom = {
          hinhAnh: "./images/bua.png",
        };
      } else if (randomOTT === 3) {
        OTTrandom = {
          hinhAnh: "./images/bao.png",
        };
      }

      mangOTTrandom.push(OTTrandom);

      // tính thắng thua
      if (
        (state.luaChon === "keo" && randomOTT === 3) ||
        (state.luaChon === "bua" && randomOTT === 1) ||
        (state.luaChon === "bao" && randomOTT === 2)
      ) {
        state.soBanThang++;
      }

      return { ...state, mangOanTuTi: mangOTTrandom };
    }
    default:
      return state;
  }
};

export default gameOanTuTiReducer;
