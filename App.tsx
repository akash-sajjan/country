import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./routes/Navigation";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
