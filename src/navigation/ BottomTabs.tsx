// src/navigation/BottomTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../context/ThemeContext';
import HomePage from '../pages/HomePage';
import Home from '../assets/images/homeBottomBar.svg'; // ✅ your custom SVG icon

const Tab = createBottomTabNavigator();

// ✅ Move icon component outside render
const HomeIcon = () => (
  <Home width={40} height={40} />
);

const BottomTabs = () => {
  const { isDark } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#121212' : '#ffffff',
          borderTopColor: isDark ? '#333' : '#ccc',
        },
        tabBarActiveTintColor: isDark ? '#4da6ff' : '#0466c8',
        tabBarInactiveTintColor: isDark ? '#888' : '#aaa',
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: HomeIcon, // ✅ directly pass the component
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
