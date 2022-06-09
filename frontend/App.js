// import { NativeBaseProvider, Text, Box } from "native-base";
import AppContainer from "./src/container/app-container";
import Main from "./src/main/main";
import React from 'react';

export default function App() {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  );
}
