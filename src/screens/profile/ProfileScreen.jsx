import { StyleSheet, View, Pressable, Image, ActivityIndicator } from "react-native";
import { colors } from "../../global/colors";
import { useSelector, useDispatch } from "react-redux";
import CameraIcon from "../../components/CameraIcon";
import CyberText from "../../components/CyberTextComponent";
import * as ImagePicker from "expo-image-picker";
import { usePutProfilePictureMutation } from "../../services/profileAPI";
import { setProfilePicture } from "../../store/slices/userSlice";

const ProfileScreen = () => {
  const profilePicture = useSelector((state) => state.userReducer.profilePicture);
  const user = useSelector((state) => state.userReducer.email);
  const localId = useSelector((state) => state.userReducer.localId);
  const [triggerPutProfilePicture, result] = usePutProfilePictureMutation();
  const dispatch = useDispatch();

  const location = null;
  const locationLoaded = null;
  const address = null;

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
      base64: true,
    });
    console.log("Desde ProfileScreen - Resultado de imagen: ", result); //!LOG Resultado de la imagen
    if (!result.canceled) {
      const imgBase64 = `data:image/jpeg;base64,${result.assets[0].base64}`;
      dispatch(setProfilePicture(imgBase64));
      triggerPutProfilePicture({ localId: localId, profilePicture: imgBase64 });
    }
  };

  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageProfileContainer}>
        {profilePicture ? (
          <Image
            source={{ uri: profilePicture }}
            resizeMode="cover"
            style={styles.profileImage}
          />
        ) : (
          <CyberText style={styles.textProfilePlaceHolder}>
            {user.charAt(0).toUpperCase()}
          </CyberText>
        )}
        <Pressable onPress={pickImage} style={styles.cameraIcon}>
          <CameraIcon />
        </Pressable>
      </View>
      <CyberText style={styles.profileData}>Email: {user}</CyberText>
      {/* <View style={styles.titleContainer}>
        <CyberText>Mi ubicación:</CyberText>
      </View>
      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title={"Lugar Geek"}
            />
          </MapView>
        ) : locationLoaded ? (
          <CyberText>Hubo un problema al obtener la ubicación</CyberText>
        ) : (
          <ActivityIndicator />
        )}
      </View> 
      <View style={styles.placeDescriptionContainer}>
        <View style={styles.addressContainer}>
          <CyberText style={styles.address}>{address || ""}</CyberText>
        </View>
      </View>
      */}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  imageProfileContainer: {
    width: 128,
    height: 128,
    borderRadius: 128,
    backgroundColor: colors.darkGray,
    justifyContent: "center",
    alignItems: "center",
  },
  textProfilePlaceHolder: {
    color: colors.lightGray,
    fontSize: 48,
  },
  profileData: {
    paddingVertical: 16,
    fontSize: 16,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 128,
  },
  mapContainer: {
    width: "100%",
    height: 240,
    overflow: "hidden",
    elevation: 5,
    marginBottom: 16,
  },
  map: {
    height: 240,
  },
  mapTitle: {
    fontWeight: "700",
  },
  placeDescriptionContainer: {
    flexDirection: "row",
    gap: 16,
  },
});
