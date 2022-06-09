import * as Animatable from "react-native-animatable";
import { Text, Divider, Box } from "native-base";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const HeartAnimation = (props) => {
  console.log(props);
  const playing = props.playing;
  const feedback = props.feedback === "normal";
  const key = props.start;
  return (
    <Box alignItems="center">
      <Box w="200">
        <CountdownCircleTimer
          key={key}
          isPlaying={playing}
          duration={15}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => (
            <Animatable.Text
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={{ fontSize: 75, textAlign: "center" }}
            >
              ❤
            </Animatable.Text>
          )}
        </CountdownCircleTimer>
        {feedback && (
          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={{ fontSize: 75, textAlign: "center" }}
          >
            {feedback ? "❤" : "💔"}
          </Animatable.Text>
        )}
        <Divider
          orientation="horizontal"
          thickness="3"
          my="3"
          _dark={{ bg: "rose.300" }}
          _light={{ bg: "rose.900" }}
        />
      </Box>
      {feedback && (
        <Text fontSize={20}>From our analysis, you are completely fine!</Text>
      )}
      {!feedback && (
        <Text fontSize={20}>
          From our analysis, you SHOULD get checked out by a doctor
        </Text>
      )}
    </Box>
  );
};

export default HeartAnimation;
