import { DarkTheme, DefaultTheme, Link, ThemeProvider } from "@react-navigation/native";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, Platform, Button } from "react-native";

export default function RootLayout() {

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#000000',
          headerShown: false,
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
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
