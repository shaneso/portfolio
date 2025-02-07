import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={'/menu'} style={styles.about}>MENU</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    fontSize: 20,
    color: '#000000',
    textDecorationLine: 'none',
  },
});