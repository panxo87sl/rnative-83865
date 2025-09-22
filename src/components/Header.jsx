import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

const Header = ({ title, subTitle }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {canGoBack && (
        <View style={styles.goBackContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={25} color={colors.white} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    height: 130,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 45,
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
  goBackContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
});
