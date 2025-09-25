import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../global/colors";

const LibraryIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <Icon name="photo-library" size={24} color={colors.lightGray} />
    </View>
  );
};

export default LibraryIcon;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
    width: 40,
    height: 40,
    borderRadius: 30,
  },
});
