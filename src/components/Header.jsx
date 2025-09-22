import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, subTitle }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {canGoBack && (
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Text>Atras</Text>
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
});
