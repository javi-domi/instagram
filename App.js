// import { StatusBar } from "expo-status-bar";
import React from "react";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxiubMFjjpI_yB35bzWsCu5UlUsyFn_G8",
  authDomain: "instagram-react-dev.firebaseapp.com",
  projectId: "instagram-react-dev",
  storageBucket: "instagram-react-dev.appspot.com",
  messagingSenderId: "492073167602",
  appId: "1:492073167602:web:cc963908410ea052793e6b",
  measurementId: "G-TJSBPGGBZ9",
};

if (firebase.app.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
