import { StyleSheet, Text, View, FlatList } from "react-native";
import products from "../data/products.json";
import { useEffect, useState } from "react";

const ProductsScreen = ({ filterCategory }) => {
  const [itemsFiltered, setItemsFiltered] = useState([]);
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
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
