import { StyleSheet, Text, Image, FlatList, Pressable } from "react-native";
import FlatCard from "../components/FlatCard";
import categories from "../data/categories.json";

const CategoriesScreen = ({ setCategorySelectedEvent }) => {
  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable onPress={() => setCategorySelectedEvent(item.title)}>
        <FlatCard>
          <Image width={100} height={50} source={{ uri: item.image }} resizeMode="contain" />
          <Text>{item.title}</Text>
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

const styles = StyleSheet.create({});
