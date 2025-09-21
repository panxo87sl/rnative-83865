import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/global/colors";
import Header from "./src/components/Header";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <View style={appStyles.container}>
      <StatusBar style="auto" />
      {categorySelected ? (
        <>
          <Header title={"Guarida de Mario"} />
          <ProductsScreen filterCategory={categorySelected} />
        </>
      ) : (
        <>
          <Header title={"Guarida de Mario"} />
          <CategoriesScreen setCategorySelectedEvent={setCategorySelected} />
        </>
      )}
    </View>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    // alignItems: "center",
    // justifyContent: "center",
    // "justifyContent:" Alinea los componente en vertical (por que el eje por defecto en movil es vertical (flexdirection) contrario a WEB que es horizontal por defecto)
  },
});
