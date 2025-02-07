import { NavigationProp, DarkTheme, DefaultTheme, ThemeProvider, useNavigation } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme, Platform, TouchableOpacity, Image } from "react-native";
import { RootStackParamList } from "./types";

export default function RootLayout() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          headerShown: true,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="menu"
          options={{
            title: 'Shane So',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('home')}>
                <Image
                  source={require('../assets/images/navbar-toggle-clicked.png')}
                  style={styles.navbarToggle}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: 'Shane So',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('menu')}>
                <Image
                  source={require('../assets/images/navbar-toggle.png')}
                  style={styles.navbarToggle}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  navbarToggle: {
    width: 16,
    resizeMode: 'contain',
    marginRight: 20,
  },
});