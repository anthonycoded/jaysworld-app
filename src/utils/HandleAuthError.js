const AUTH_FAILED = AUTH_FAILED;
const CLEAR_STATE = "CLEAR_STATE";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function HandleAuthError(error, dispatch) {
  if (error?.response) {
    let status = error.response.status;
    switch (status) {
      case 400: ///App Error
        dispatch({
          type: AUTH_FAILED,
          payload: "Bad Request, Contact me on Instagram @jaysworld",
        });
        wait(50).then(() => dispatch({ type: CLEAR_STATE }));
        return;
      case 401: //   //Password incorrect
        dispatch({
          type: AUTH_FAILED,
          payload: {
            error: "Username or Password incorrect. Please try again",
            status: 401,
          },
        });
        wait(50).then(() => dispatch({ type: CLEAR_STATE }));
        return;

      case 404:
        dispatch({
          type: AUTH_FAILED,
          payload: {
            error:
              "Username did not match any account. If you do not have an account please create a new one ",
            status: 404,
          },
        });
        wait(50).then(() => dispatch({ type: CLEAR_STATE }));
        return;

      case 500:
        dispatch({
          type: AUTH_FAILED,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
        wait(50).then(() => dispatch({ type: CLEAR_STATE }));
        return;

      default:
        dispatch({
          type: AUTH_FAILED,
          payload:
            "Sorry, looks like our systems may be down.Please try again later.",
        });
        wait(50).then(() => dispatch({ type: CLEAR_STATE }));
        return;
    }
  }
}
export default HandleAuthError;
