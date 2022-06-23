import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { GetBeats } from "./src/store/actions/beatActions";
import { GetSongs } from "./src/store/actions/songActions";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import AppNavigation from "./src/navigation/AppNavigation";

const AppWrapper = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        //await Font.loadAsync(Entypo.font);
        dispatch(GetBeats());
        dispatch(GetSongs());
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <GestureHandlerRootView
      style={{ flex: 1, justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <AppNavigation />
    </GestureHandlerRootView>
  );
};

export default AppWrapper;
