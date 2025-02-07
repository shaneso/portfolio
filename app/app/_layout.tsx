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
            title: 'Menu',
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('menu')}>
                <Image
                  source={require('../assets/images/navbar-toggle.png')}
                  style={styles.navbartoggle}
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
  navbartoggle: {
    width: 20,
    resizeMode: 'contain',
    marginRight: 20,
  },
});