import { Button, Center, Text, VStack } from "native-base";
import React, { useState, useRef } from "react";
import ThemeToggle from "../theme/theme-toggle";
import HeartAnimation from "../heart/heart-animation";
import Disclaimer from "../disclaimer/disclaimer";
import { AkayaKanadaka_400Regular } from "@expo-google-fonts/akaya-kanadaka";
// import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useFonts } from "expo-font";
import axios from "axios";
import { Platform } from "react-native";

const Main = () => {
  const [feedback, setFeedback] = useState("");
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fontLoaded] = useFonts({
    AkayaKanadaka_400Regular,
  });

  const handleFetch = async () => {
    try {
      // This was the most annoying bug that I have ever encountered in my life
      // Lessons to be learned
      // The android device itself is a VM, henceforth it's localhost points to 127.0.0.1
      // Now the localhost of the dev machine is also 127.0.0.1
      // Hence to axios we're sending requests to the VM not to the dev machine who's ip is 10.0.2.2
      // So yeah hopefully you don't reproduce that mistake anymore
      //
      let response;
      if (Platform.OS === "web") {
        response = await axios.get(
          "http://127.0.0.1:8000/hi"
          // do not change
        );
      } else if (Platform.OS === "android") {
        response = await axios.get(
          "http://10.0.2.2:8000/hi"
          // do not change
        );
      } else {
        throw "Platform not supported! I cannot afford it T_T.";
      }

      // console.log(response);
      setFeedback(response.data);
    } catch (error) {
      alert(error.message);
    }
  };
  if (!fontLoaded) {
    return null;
  }

  return (
    <Center
      _dark={{ bg: "rose.900" }}
      _light={{ bg: "rose.300" }}
      px="6"
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <HeartAnimation
          /* feedback={feedback} */ start={key}
          playing={isPlaying}
          setPlaying={setIsPlaying}
        />
        <Text fontSize="40">{feedback}</Text>
        <Button
          variant="solid"
          colorScheme="primary"
          onPress={() => {
            setKey(key + 1);
            setIsPlaying(true);
          }}
        >
          {!isPlaying ? "Start" : "Restart"}
        </Button>
        {isPlaying && (
          <Button
            variant="solid"
            colorScheme="secondary"
            onPress={() => {
              setIsPlaying(false);
            }}
          >
          Cancel
          </Button>
        )}

        <ThemeToggle />
        <Disclaimer />
      </VStack>
    </Center>
  );
};

export default Main;
