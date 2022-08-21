import axios from "axios";
import { HandleAuthError } from "../../utils/HandleAuthError";
const Global = require("../../utils/Global");
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const CLEAR_STATE = "CLEAR_STATE";

axios.defaults.withCredentials = true;
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

/////////////////////////////////LOGIN ACTIONs///////////////////////////////////////////////
export const userLoginMain = (user) => async (dispatch) => {
  const { email, password } = user;

  try {
    const requestData = {
      username: "testUser",
      email: "admin@email.com",
      password: "password",
    };

    let response = await axios.post(
      "https://jaysworld-cb39f.uc.r.appspot.com/auth/login",
      requestData
      // {
      //   headers: { "Content-type": "application/json; charset=utf-8" },
      //   withCredentials: true,
      // }
    );

    if (response.status == 200) {
      //Login success = add response msg to state then navigate to homestack
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
    }
    wait(50).then(() => dispatch({ type: CLEAR_STATE }));
  } catch (error) {
    HandleAuthError(error, dispatch);
  }
};

export const newUser = (payload) => async (dispatch) => {
  try {
    let response = await axios.post(Global.Register, payload, {
      withCredentials: false,
    });
    if (response.status == 201) {
      //Login success
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    }
    wait(50).then(() => dispatch({ type: CLEAR_STATE }));
  } catch (error) {
    HandleAuthError(error, dispatch);
  }
};

export const clearState = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_STATE });
  } catch (error) {
    HandleAuthError(error, dispatch);
  }
};
// ///////////////////////////////////Update PASSWORD ///////////////////////////////////////////////////////////////
// export const updatePassword = (payload) => async (dispatch) => {
//   const { oldPassword, newPassword, confirmPassword } = payload;

//   try {
//     const requestData = {
//       channel: "mTeller",
//       oldPassword: "Demos1234",
//       password: "Demos1234",
//       newPassword: "",
//     };

//     let response = await axios.post("", requestData, {
//       headers: { "Content-type": "application/json; charset=utf-8" },
//       withCredentials: true,
//     });

//     if (response.status == 200) {
//       //Login success = add response msg to state then navigate to homestack
//       dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: true });
//       //await AsyncStorage.setItem("cookie", response.headers["set-cookie"][0]);
//     }
//   } catch (error) {
//     //Password incorrect
//     if (error.response.status == 401) {
//       dispatch({
//         type: UPDATE_PASSWORD_FAILED,
//         payload: {
//           error: "Password incorrect. Please try again",
//           status: 401,
//         },
//       });
//     } else {
//       //All other failed codes
//       dispatch({
//         type: UPDATE_PASSWORD_FAILED,
//         payload:
//           error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//       });
//     }
//   }
// };

// ///////////////////////////////////FORGOT PASSWORD ///////////////////////////////////////////////////////////////
// export const checkUsername = (payload) => async (dispatch) => {
//   const wait = (timeout) => {
//     return new Promise((resolve) => setTimeout(resolve, timeout));
//   };
//   try {
//     //Send request to API
//     // let response = await axios.post("backend/api/route", payload, {
//     //   headers: { "Content-type": "application/json; charset=utf-8" },
//     // });
//     dispatch({ type: CHECK_USERNAME_SUCCESS, payload: true });

//     // if (response.status == 200) {
//     //   dispatch({ type: "Call success Reducer" });
//     // } else if (response.status == 401) {
//     //   dispatch({ type: "Call failed reducer" });
//     // } else {
//     //   dispatch({ type: "Call failed reducer" });
//     // }
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const checkAnswer = (payload) => async (dispatch) => {
//   const wait = (timeout) => {
//     return new Promise((resolve) => setTimeout(resolve, timeout));
//   };
//   try {
//     //Send request to API
//     // let response = await axios.post("backend/api/route", payload, {
//     //   headers: { "Content-type": "application/json; charset=utf-8" },
//     // });
//     dispatch({ type: CHECK_ANSWER_SUCCESS, payload: true });

//     // if (response.status == 200) {
//     //   dispatch({ type: "Call success Reducer" });
//     // } else if (response.status == 401) {
//     //   dispatch({ type: "Call failed reducer" });
//     // } else {
//     //   dispatch({ type: "Call failed reducer" });
//     // }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const forgotPassword = (payload) => async (dispatch) => {
//   try {
//     dispatch({ type: CLEAR_LOGIN_STATE });
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
//////////////////////////////////////////////////////////////////////////////////////////////////
