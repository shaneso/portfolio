import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Button } from "react-native";
import { RootStackParamList } from "./types";

export default function Home() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Button title='Menu' onPress={() => navigation.navigate('menu')}></Button>
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