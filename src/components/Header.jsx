import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";

const Header = ({ title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    height: 130,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontFamily: "Pixel",
  },
  subTitle: {
    fontSize: 20,
    color: colors.white,
    fontFamily: "Comic",
  },
});
