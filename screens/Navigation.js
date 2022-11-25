import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import Favorites from "./Favorites";
import Chats from "./Chats";
import Profile from "./Profile";
import Add from "./Add";
import colors from "../assets/colors";

const Tab = createBottomTabNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name == "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name == "Add") {
              iconName = "add-circle";
            } else if (route.name == "Chats") {
              iconName = focused ? "chatbubble" : "chatbubble-outline";
            } else if (route.name == "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
