import { CHON_OTT ,PLAY_GAME} from "../constants/gameOanTuTiConst";

export const actChonOTT = (luaChon) => {
  return {
    type: CHON_OTT,
    payload: luaChon,
  };
};


export const actPlayGame = ()=>{
  return {
    type:PLAY_GAME
  }
}