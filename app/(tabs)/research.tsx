import { Text, View, StyleSheet } from "react-native";

export default function Research() {
  return (
    <View style={styles.container}>
      <Text>Research</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  }
})