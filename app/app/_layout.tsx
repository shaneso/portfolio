import { HapticTab } from "@/app-example/components/HapticTab";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function RootLayout() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        // headerShown: false,
        // tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="about"
        options={{ title: 'About' }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />
    </Tab.Navigator>
    
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>
  );
}
