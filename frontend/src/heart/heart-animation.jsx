import * as Animatable from "react-native-animatable";
import { Text, Divider, Box } from "native-base";

const HeartAnimation = (props) => {
  return (
    <Box alignItems="center">
      <Box w="200">
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{ fontSize: 75, textAlign: "center" }}
        >
          ❤ 💔
        </Animatable.Text>
        <Divider
          orientation="horizontal"
          thickness="3"
          my="3"
          _dark={{ bg: "rose.300" }}
          _light={{ bg: "rose.900" }}
        />
      </Box>
      <Text>From our analysis, you are completely fine!</Text>
      <Text>From our analysis, you should get checked out by a doctor</Text>
    </Box>
  );
};

export default HeartAnimation;
