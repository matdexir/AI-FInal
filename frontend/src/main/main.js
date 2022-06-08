import {
  Box,
  Button,
  Center,
  Text,
  VStack,
  useTheme,
  themeTools,
  useColorMode,
  useColorValue,
} from "native-base";
import React, { useState } from "react";
import ThemeToggle from "../theme/theme-toggle";
import HeartAnimation from "../heart/heart-animation";
import Disclaimer from "../disclaimer/disclaimer";
import axios from "axios";

const Main = () => {
  const [feedback, setFeedback] = useState("");

    const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      // This was the most annoying bug that I have ever encountered in my life
      // Lessons to be learned
      // The android device itself is a VM, henceforth it's localhost points to 127.0.0.1
      // Now the localhost of the dev machine is also 127.0.0.1
      // Hence to axios we're sending requests to the VM not to the dev machine who's ip is 10.0.2.2
      // So yeah hopefully you don't reproduce that mistake anymore
      const response = await axios.get(
        'http://10.0.2.2:8000/hi',
      );
      console.log(response)
      setFeedback(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Center
      _dark={{ bg: "darkBlue.900" }}
      _light={{ bg: "darkBlue.50" }}
      px="6"
      flex={1}
    >
      <VStack space={7} alignItems="center">
        <HeartAnimation />
        <Box>
          <Text>{feedback}</Text>
          <Button variant="solid" colorScheme="primary" onPress={getDataUsingAsyncAwaitGetCall}>
            Fetch
          </Button>
        </Box>
        <ThemeToggle />
        <Disclaimer />
      </VStack>
    </Center>
  );
};

export default Main;
