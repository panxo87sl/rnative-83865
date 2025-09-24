import { StyleSheet, View, FlatList, Pressable, ActivityIndicator } from "react-native";
// import products from "../../data/products.json";
// import { useEffect, useState } from "react";
import CyberText from "../../components/CyberTextComponent";
import { useSelector, useDispatch } from "react-redux";
import { setProductSelected } from "../../store/slices/shopSlice";
import FlatCard from "../../components/FlatCard";
import { Image } from "react-native";
import { useGetProductsByCategoryQuery } from "../../services/shopAPI";
import { colors } from "../../global/colors";

const ProductsScreen = ({ navigation, route }) => {
  // const [itemsFiltered, setItemsFiltered] = useState([]);
  // const [loading, setLoading] = useState(true);

  //const { filterCategory } = route.params;
  const filterCategory = useSelector((state) => state.shopReducer.categorySelected);
  console.log("Desde ProductScreen - Categoria Seleccionada: ", filterCategory); //!LOG para ver categoria seleccionada

  const {
    data: productFiltered,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(filterCategory.toLowerCase());
  console.log(
    "Desde ProductScreen - Datos traidos desde FIREBASE PRODUCTOS: ",
    productFiltered
  ); //!LOG para ver productos

  const dispatch = useDispatch();

  const handleSelectProduct = (product) => {
    dispatch(setProductSelected(product));
    console.log("Desde ProductScreen - Producto Seleccionado: ", product.title); //!LOG para ver producto seleccionado
    navigation.navigate("Descripcion");
  };

  const renderProductItem = ({ item }) => (
    <View>
      <Pressable onPress={() => handleSelectProduct(item)}>
        <FlatCard>
          <CyberText style={styles.styleFont}>{item.title}</CyberText>
          <Image
            width={100}
            height={40}
            source={{ uri: item.mainImage }}
            resizeMode="contain"
          />
        </FlatCard>
      </Pressable>
    </View>
  );

  // useEffect(() => {
  //   const itemsFilteredByCategory = products.filter(
  //     (auxItem) => auxItem.category.toLowerCase() === filterCategory.toLowerCase()
  //   );
  //   setItemsFiltered(itemsFilteredByCategory);
  // }, []);
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="small" color={colors.red} />
      </View>
    );
  }

  if (!productFiltered || productFiltered.length === 0) {
    return (
      <View style={styles.centered}>
        <CyberText>No hay productos en esta categoría</CyberText>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <CyberText>Error cargando productos</CyberText>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        // data={itemsFiltered} //? Se cambia de fuente a Firebase
        data={productFiltered}
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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
