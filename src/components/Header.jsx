import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors.js";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import { clearSession } from "../db/index.js";
import { setUserEmail, setLocalId, setProfilePicture } from "../store/slices/userSlice";

const Header = ({ title, subTitle }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const canGoBack = navigation.canGoBack();

  const handleLogout = async () => {
    await clearSession();
    dispatch(setUserEmail(""));
    dispatch(setLocalId(""));
    dispatch(setProfilePicture(""));
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Root" }], // o tu stack raíz
    // });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={styles.buttonsContainer}>
        {canGoBack && (
          <View style={styles.goBackContainer}>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={25} color={colors.white} />
            </Pressable>
          </View>
        )}
        <View style={styles.logOutContainer}>
          <Pressable onPress={handleLogout}>
            <Icon name="log-out" size={25} color={colors.white} />
          </Pressable>
        </View>
      </View>
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
  buttonsContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  goBackContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  logOutContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
});
