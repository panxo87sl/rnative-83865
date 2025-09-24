import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth/AuthStackNavigator";
import TabsNavigator from "../navigation/tabs/TabsNavigator";
import { setLocalId, setProfilePicture, setUserEmail } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetProfilePictureQuery } from "../services/profileAPI";
import { initSessionTable, getSession } from "../db";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../global/colors";
import CyberText from "../components/CyberTextComponent";

const MainNavigator = () => {
  const email = useSelector((state) => state.userReducer.email);
  const localId = useSelector((state) => state.userReducer.localId);
  const [checkingSession, setCheckingSession] = useState(true);
  const dispatch = useDispatch();

  const {
    data: profilePicture,
    isLoading,
    error,
  } = useGetProfilePictureQuery(localId, {
    skip: !localId,
  });

  useEffect(() => {
    const bootstrap = async () => {
      await initSessionTable();
      const session = await getSession();
      if (session) {
        console.log("Desde MainNavigator - Datos de Session:", session); //!LOG Datos de session
        dispatch(setUserEmail(session.email));
        dispatch(setLocalId(session.localId));
      }
      setCheckingSession(false);
    };

    bootstrap();
  }, []);

  useEffect(() => {
    if (profilePicture) {
      dispatch(setProfilePicture(profilePicture.image));
    }
  }, [localId, profilePicture]);

  // prettier-ignore
  console.log("Desde MainNavigator - Email: ", email, "localId: ", localId, " profilePicture: ", profilePicture); //!LOG datos de usuario

  if (checkingSession) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="small" color={colors.red} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {email ? <TabsNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
