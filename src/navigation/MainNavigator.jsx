import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth/AuthStackNavigator";
import TabsNavigator from "../navigation/tabs/TabsNavigator";
import { useGetCategoriesQuery } from "../services/shopAPI";
import { setProfilePicture } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetProfilePictureQuery } from "../services/profileAPI";

const MainNavigator = () => {
  const email = useSelector((state) => state.userReducer.email);
  const localId = useSelector((state) => state.userReducer.localId);

  const dispatch = useDispatch();

  const {
    data: profilePicture,
    isLoading,
    error,
  } = useGetProfilePictureQuery(localId, {
    skip: !localId,
  });

  useEffect(() => {
    if (profilePicture) {
      dispatch(setProfilePicture(profilePicture.image));
    }
  }, [localId, profilePicture]);

  console.log(
    "Desde MainNavigator - Email: ",
    email,
    "localId: ",
    localId,
    " profilePicture: ",
    profilePicture
  ); //!LOG datos de usuario
  return (
    <NavigationContainer>
      {email ? <TabsNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
