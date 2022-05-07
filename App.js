import * as React from "react";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import { StatusBar } from "expo-status-bar";
import AppWrapper from "./AppWrapper";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper></AppWrapper>
      <StatusBar style="light"></StatusBar>
    </Provider>
  );
}

export default App;
