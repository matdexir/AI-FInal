import { HStack, Switch, Text, useColorMode } from "native-base";
import React from "react";

const ThemeToggle = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={1} alignItems="center">
      <Text>🌙</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
      ></Switch>
      <Text>🌞</Text>
    </HStack>
  );
};

export default ThemeToggle;
