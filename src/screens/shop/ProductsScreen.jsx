import { StyleSheet, View, FlatList, Pressable } from "react-native";
import products from "../../data/products.json";
import { useEffect, useState } from "react";
import CyberText from "../../components/CyberTextComponent";

const ProductsScreen = ({ navigation, route }) => {
  const [itemsFiltered, setItemsFiltered] = useState([]);

  const { filterCategory } = route.params;
  useEffect(() => {
    const itemsFilteredByCategory = products.filter(
      (auxItem) => auxItem.category.toLowerCase() === filterCategory.toLowerCase()
    );
    setItemsFiltered(itemsFilteredByCategory);
  }, []);
  return (
    <View>
      <FlatList
        data={itemsFiltered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Pressable onPress={() => navigation.navigate("Descripcion")}>
              <CyberText style={styles.styleFont}>{item.title}</CyberText>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  styleFont: {
    fontSize: 20,
  },
});
