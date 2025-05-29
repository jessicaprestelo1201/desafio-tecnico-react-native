import { Tabs } from "expo-router";
import { Feather, MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E60014", // Vermelho igual ao da imagem
        tabBarInactiveTintColor: "#777",  // Cinza para inativo
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#E60014',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categorias"
        options={{
          headerShown: false,
          tabBarLabel: "Categorias",
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cesta"
        options={{
          headerShown: false,
          tabBarLabel: "Cesta",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basket" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          headerShown: false,
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="conta"
        options={{
          headerShown: false,
          tabBarLabel: "Conta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
