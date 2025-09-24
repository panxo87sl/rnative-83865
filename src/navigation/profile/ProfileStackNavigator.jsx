import { ProfileScreen } from "../../screens";
import Header from "../../components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{
        animation: "fade",
        header: ({ route }) => (
          <Header title={"Guarida de Mario"} subTitle={"Perfil de Usuario"} />
        ),
      }}
    >
      <Stack.Screen name="Perfil" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
