import { StyleSheet, View, FlatList, Pressable } from "react-native";
import products from "../../data/products.json";
import { useEffect, useState } from "react";
import CyberText from "../../components/CyberTextComponent";
import { useSelector, useDispatch } from "react-redux";
import { setProductSelected } from "../../store/slices/shopSlice";
import FlatCard from "../../components/FlatCard";
import { Image } from "react-native";

const ProductsScreen = ({ navigation, route }) => {
  const [itemsFiltered, setItemsFiltered] = useState([]);

  //const { filterCategory } = route.params;
  const filterCategory = useSelector((state) => state.shopReducer.categorySelected);
  console.log("Desde ProductScreen Categoria Seleccionada: ", filterCategory); //!LOG para ver categoria seleccionada

  const dispatch = useDispatch();

  const handleSelectProduct = (product) => {
    dispatch(setProductSelected(product));
    console.log("Desde ProductScreen Producto Seleccionado: ", product.title); //!LOG para ver producto seleccionado
    navigation.navigate("Descripcion");
  };

  const renderProductItem = ({ item }) => (
    <View>
      <Pressable onPress={() => handleSelectProduct(item)}>
        <FlatCard>
          <CyberText style={styles.styleFont}>{item.title}</CyberText>
          <Image width={80} height={55} source={{ uri: item.mainImage }} resizeMode="contain" />
        </FlatCard>
      </Pressable>
    </View>
  );

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
        renderItem={renderProductItem}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  styleFont: {
    flex: 1,
    fontSize: 20,
    width: 50,
  },
});
