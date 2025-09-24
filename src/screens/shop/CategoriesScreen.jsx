import { StyleSheet, Image, FlatList, Pressable, ActivityIndicator } from "react-native";
import FlatCard from "../../components/FlatCard";
import { View } from "react-native";
// import categories from "../../data/categories.json";
import CyberText from "../../components/CyberTextComponent";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../../store/slices/shopSlice";
import { useGetCategoriesQuery } from "../../services/shopAPI";
import { colors } from "../../global/colors";

const CategoriesScreen = ({ navigation }) => {
  //const categories = useSelector((state) => state.shopReducer.categories); //? Cambio de tecnologia para obtener datos

  const dispatch = useDispatch();
  const { data: categories, isLoading, error } = useGetCategoriesQuery();
  console.log("Datos traidos desdE FIREBASE CATEGORIAS: ", categories); //!LOG para ver categorias

  const handleSelectCategory = (filterCategory) => {
    dispatch(setCategorySelected(filterCategory));
    console.log("Desde CategoriesScreen - Categoria Seleccionada: ", filterCategory); //!LOG para ver categoria seleccionada
    navigation.navigate("Productos");
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable onPress={() => handleSelectCategory(item.title)}>
        <FlatCard>
          <Image width={110} height={55} source={{ uri: item.image }} resizeMode="contain" />
          <CyberText style={styles.styleFont}>{item.title}</CyberText>
        </FlatCard>
      </Pressable>
    );
  };
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="small" color={colors.red} />
      </View>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <View style={styles.centered}>
        <CyberText>No hay categorías disponibles</CyberText>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <CyberText>Error cargando categorías</CyberText>
      </View>
    );
  }

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  styleFont: {
    fontSize: 18,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
