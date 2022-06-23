import * as React from "react";
import { Provider } from "react-redux";
import store from "./src/store/Store";
import { StatusBar } from "expo-status-bar";
import AppWrapper from "./AppWrapper";
import { StripeProvider } from "@stripe/stripe-react-native";

function App() {
  return (
    <Provider store={store}>
      <StripeProvider
        merchantIdentifier="merchant.com.jaysworld"
        publishableKey="pk_test_51IaNZlCILXbg6WUSGDz5uOCrk6AgKamms3Lpa8DtMAdyakKzcelFTqPzbYDU8H9F21ZJimiH55WOROIUp2hae6sa00G0olzXE0"
      >
        <AppWrapper></AppWrapper>
      </StripeProvider>
      <StatusBar style="light"></StatusBar>
    </Provider>
  );
}

export default App;
