import { Box, Text } from "native-base";

const Disclaimer = () => {
  return (
    <Box alignItems="center">
        <Text bold> Disclaimer!</Text>
        <Text italic>
          We are not medical professional. Please take our app as a cautionary
          advice and not a fully complete heart diagnostic.
        </Text>
    </Box>
  );
};

export default Disclaimer;
