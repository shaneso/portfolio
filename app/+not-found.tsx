import { Text, View, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{title: ""}} />
      <View style={styles.container}>
        <Link href={"/"}>Go Back</Link>
      </View>
    </>
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