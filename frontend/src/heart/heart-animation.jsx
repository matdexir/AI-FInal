import * as Animatable from "react-native-animatable";
import { Text, Divider, Box } from "native-base";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useState } from "react";

const HeartAnimation = (props) => {
  // console.log(props);
  const [running, setRunning] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const playing = props.playing;
  // const feedback = props.feedback === "normal";
  const key = props.start;
  const setPlaying = props.setPlaying;
  return (
    <Box alignItems="center">
      <Box w="200">
        {/* I should change it but I am not too sure I want to*/}
        {true && (
          <CountdownCircleTimer
            key={key}
            isPlaying={playing}
            duration={20}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {
              setPlaying(false);
              setFeedback(Math.random() % 2 === 1);
            }}
          >
            {({ remainingTime }) => (
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{ fontSize: 75, textAlign: "center" }}
              >
                🖤
              </Animatable.Text>
            )}
          </CountdownCircleTimer>
        )}
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
      {!playing && feedback != null && (
        <Box>
          {feedback && (
            <Text fontSize={20}>
              From our analysis, you are completely fine!
            </Text>
          )}
          {!feedback && (
            <Text fontSize={20}>
              From our analysis, you SHOULD get checked out by a doctor
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};

export default HeartAnimation;
