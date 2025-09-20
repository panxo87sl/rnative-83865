import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";

//Wrapper
const FlatCard = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default FlatCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.mediumGray,
    padding: 30,
    marginVertical: 5,
    marginHorizontal: 10,
    elevation: 10,
    shadowOffset: { width: 10, height: 10 }, //ios
    shadowOpacity: 0.7, //ios
    shadowColor: colors.lightGray, //ios
  },
});
