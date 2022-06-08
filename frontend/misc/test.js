import instance from "./api";
const { useState } = require("react");
const { View, Text, Button, StyleSheet } = require("react-native");

const TestApi = () => {
  const [message, setMessage] = useState("This is a message");
  const fetchMessage = async () => {
    // const message = await instance.post("/api/test");
    const message = await instance.get("/hi").then((msg) => {console.log(msg);});;
    console.log(message)
    setMessage(message.data);
  };
  return (
    <>
      <View style={styles.container}>
        <Text>We got back: {message}</Text>
      </View>
      <Button title="fetch" onPress={fetchMessage} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TestApi;
