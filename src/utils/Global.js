//const API_LINK = "http://localhost:8081/";
const API_LINK = "https://jaysworld-cb39f.uc.r.appspot.com/";
module.exports = {
  Register: API_LINK + "auth/register",
  Login: API_LINK + "auth/login",

  GetBeats: API_LINK + "beats/get-all",
};
