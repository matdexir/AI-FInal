import { NativeBaseProvider, Text, Box } from "native-base";
import AppContainer from "./src/container/app-container";
import Main from "./src/main/main";

export default function App() {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  );
}
