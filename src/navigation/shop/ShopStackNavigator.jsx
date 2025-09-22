import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { CategoriesScreen, ProductsScreen, ProductsDescScreen } from "../../screens";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const ShopStackNavigator = () => {
  const CategorySelected = useSelector((state) => state.shopReducer.categorySelected);
  return (
    <Stack.Navigator
      initialRouteName="Categorias"
      screenOptions={{
        animation: "fade",
        header: ({ route }) => (
          <Header
            title={"Guarida de Mario"}
            subTitle={route.name === "Categorias" ? "Home" : CategorySelected}
          />
        ),
      }}
    >
      <Stack.Screen name="Categorias" component={CategoriesScreen} />
      <Stack.Screen name="Productos" component={ProductsScreen} />
      <Stack.Screen name="Descripcion" component={ProductsDescScreen} />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;

const styles = StyleSheet.create({});
