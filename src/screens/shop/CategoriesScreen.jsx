import { StyleSheet, Text, Image, FlatList, Pressable } from "react-native";
import FlatCard from "../../components/FlatCard";
import categories from "../../data/categories.json";
import CyberText from "../../components/CyberTextComponent";

const CategoriesScreen = ({ setCategorySelectedEvent }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable onPress={() => setCategorySelectedEvent(item.title)}>
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
