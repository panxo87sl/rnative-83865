import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { colors } from "./src/global/colors";
import Header from "./src/components/Header";
import { CategoriesScreen, ProductsScreen } from "./src/screens";
import { useState, useEffect } from "react";

// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [loaded, error] = useFonts({
    Comic: require("./assets/fonts/Bangers-Regular.ttf"),
    Pixel: require("./assets/fonts/PressStart2P-Regular.ttf"),
    Cyber: require("./assets/fonts/Oxanium-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hide();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={appStyles.container}>
      <StatusBar style="auto" />
      {categorySelected ? (
        <>
          <Header title={"Guarida de Mario"} subTitle={"Productos"} />
          <ProductsScreen filterCategory={categorySelected} />
        </>
      ) : (
        <>
          <Header title={"Guarida de Mario"} subTitle={"Categorias"} />
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
