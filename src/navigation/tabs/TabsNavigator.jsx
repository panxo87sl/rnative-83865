import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStackNavigator from "../shop/ShopStackNavigator";
import CartStackNavigator from "../cart/CartStackNavigator";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../../global/colors";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name="Shop"
        component={ShopStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-bag"
              size={24}
              color={focused ? colors.red : colors.mediumGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-cart"
              size={24}
              color={focused ? colors.red : colors.mediumGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
