import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ventures"
        options={{
          headerTitle: "Ventures",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="research"
        options={{
          headerTitle: "Research",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="essays"
        options={{
          headerTitle: "Essays",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
