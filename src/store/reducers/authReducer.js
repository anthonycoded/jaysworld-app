const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const AUTH_FAILED = " AUTH_FAILED";
const CLEAR_STATE = "CLEAR_STATE";

//SET INITIAL STATE
const initialState = {
  loading: false,
  message: null,
  error: null,
  status: undefined,
  admin: false,
  user: undefined,
  id: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return {
        loading: false,
        message: null,
        error: null,
        status: false,
        admin: false,
        user: undefined,
        id: undefined,
      };
    case USER_LOGIN_SUCCESS:
      let { admin, success, user, token, id } = action.payload;

      return {
        ...state,
        admin,
        success,
        user,
        token,
        id,
      };

    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: false,
        status: action.payload.status,
      };

    case REGISTER_SUCCESS: {
      return {
        ...state,
        status: "Success",
        success: true,
        user: user,
        admin: false,
      };
    }

    default:
      return state;
  }
};
