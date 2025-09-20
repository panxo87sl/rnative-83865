import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import Header from "./src/components/Header";
import FlatCard from "./src/components/FlatCard";
import categories from "./src/data/categories.json";
import { colors } from "./src/global/colors";

export default function App() {
  const renderCategoryItem = ({ item }) => (
    <FlatCard>
      <Image width={100} height={50} source={{ uri: item.image }} resizeMode="contain" />
      <Text>{item.title}</Text>
    </FlatCard>
  );

  return (
    <View style={appStyles.container}>
      <Header title={"Guarida de Mario"} />
      <FlatList data={categories} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} />
      <StatusBar style="auto" />
    </View>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 0.96,
    backgroundColor: colors.darkGray,
    // alignItems: "center",
    // justifyContent: "center",
    // "justifyContent:" Alinea los componente en vertical (por que el eje por defecto en movil es vertical (flexdirection) contrario a WEB que es horizontal por defecto)
  },
});
