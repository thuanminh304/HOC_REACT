import { CHON_TAI_XIU, DAT_CUOC } from "../constants/xucXacGameConst";

const initialState = {
  mangXucXac: [
    {
      diem: 1,
      hinhAnh: "./images/imageXXG/1.png",
    },
    {
      diem: 2,
      hinhAnh: "./images/imageXXG/2.png",
    },
    {
      diem: 3,
      hinhAnh: "./images/imageXXG/3.png",
    },
  ],
  taiXiu: true, //true:tài(3-11) , false:xỉu(>=12)
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const xucXacGameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHON_TAI_XIU: {
      return { ...state, taiXiu: payload };
    }
    case DAT_CUOC: {
      state.tongSoBanChoi++;

      //tạo mảng xúc xắc random
      const mangXucXacRandmom = [];
      for (var i = 0; i < 3; i++) {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        const xucXacRanDom = {
          diem: randomNum,
          hinhAnh: `./images/imageXXG/${randomNum}.png`,
        };

        mangXucXacRandmom.push(xucXacRanDom);
      }
      //tính tổng điểm xúc xắc
      const tongDiem = mangXucXacRandmom.reduce((tongDiem, xucXac) => {
        return (tongDiem += xucXac.diem);
      }, 0);

      if (
        (tongDiem <= 11 && state.taiXiu === true) ||
        (tongDiem >= 12 && state.taiXiu === false)
      ) {
        state.soBanThang++;
      }

      return { ...state, mangXucXac: mangXucXacRandmom };
    }
    default:
      return state;
  }
};

export default xucXacGameReducer;
