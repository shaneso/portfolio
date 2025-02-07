import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from 'expo-router';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Link href={'/menu'} style={styles.about}>About</Link>
      <Link href={'/menu'} style={styles.about}>Portfolio</Link>
      <Link href={'/menu'} style={styles.about}>Ventures</Link>
      <Link href={'/menu'} style={styles.about}>Research</Link>
      <Link href={'/menu'} style={styles.about}>Essays</Link>
      <Link href={'/menu'} style={styles.about}>Books</Link>
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