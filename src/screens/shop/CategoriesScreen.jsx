import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import FlatCard from "../../components/FlatCard";
// import categories from "../../data/categories.json";
import CyberText from "../../components/CyberTextComponent";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../../store/slices/shopSlice";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.shopReducer.categories);
  const dispatch = useDispatch();

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
});
