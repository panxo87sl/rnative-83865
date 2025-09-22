import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { CartScreen } from "../../screens";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={{
        animation: "fade",
        header: ({ route }) => <Header title={"Guarida de Mario"} subTitle={route.name} />,
      }}
    >
      <Stack.Screen name="Carrito" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;

const styles = StyleSheet.create({});
