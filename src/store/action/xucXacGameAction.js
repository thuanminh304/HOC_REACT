import { CHON_TAI_XIU, DAT_CUOC } from "../constants/xucXacGameConst";

export const actChonTaiXiu = (taiXiu) => {
  return {
    type: CHON_TAI_XIU,
    payload: taiXiu,
  };
};

export const actDatCuoc = ()=>{
    return{
        type:DAT_CUOC,
        
    }
}