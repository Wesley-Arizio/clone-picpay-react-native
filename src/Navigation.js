import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/Home/index";
import WalletScreen from "./screens/Wallet/index";
import PayScreen from "./screens/Pay/index";
import Notification from "./screens/Notification/index";
import Settings from "./screens/Settings/index";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: "Carteira" }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{ title: "Pagamento" }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{ title: "Notificações" }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Ajustes" }}
      />
    </Tab.Navigator>
  );
}
