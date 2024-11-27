import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='home' color={color} />,
        }}
      />
      <Tabs.Screen
      name="transaction-insert"
      options={{
        title: 'Inserir Transação',
        tabBarIcon: ({ color }) => <Ionicons size={28} name='pulse' color={color} />,
      }}
    />
      <Tabs.Screen
        name="category"
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="list-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="payment-type"
        options={{
          title: 'Tipos de pagamento',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="list-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
