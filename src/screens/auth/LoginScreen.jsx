import { StyleSheet, View, TextInput, Pressable, Dimensions, Switch, Image } from "react-native";

import { Feather } from "@expo/vector-icons";
import CyberText from "../../components/CyberTextComponent";
import { colors } from "../../global/colors";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../services/authAPI";
import { setUserEmail } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

const textInputWidth = Dimensions.get("window").width * 0.7;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [persistSession, setPersistSession] = useState(false);
  const [triggerLogin, result] = useLoginMutation();

  const dispatch = useDispatch();

  const onsubmit = () => {
    triggerLogin({ email, password });
  };

  useEffect(() => {
    const saveLoginSession = async () => {
      if (result.status === "fulfilled") {
        try {
          const { localId, email } = result.data;
          dispatch(setUserEmail({ localId, email }));
        } catch (error) {
          console.log("Desde LoginScreen - Error al guardar sesión:", error);
        }
      }
    };
    saveLoginSession();
  }, [result]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/mario.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <CyberText style={styles.subTitle}>Inicia sesión</CyberText>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.gray}
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.gray}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.textInput}
        />
      </View>

      <View style={styles.footTextContainer}>
        <CyberText style={styles.whiteText}>¿No tienes una cuenta?</CyberText>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <CyberText style={[styles.whiteText, styles.underLineText]}>Crea una</CyberText>
        </Pressable>
      </View>

      <Pressable style={styles.btn} onPress={onsubmit}>
        <CyberText style={styles.btnText}>Iniciar sesión</CyberText>
      </Pressable>

      <View style={styles.rememberMe}>
        <CyberText>¿Mantener sesión iniciada?</CyberText>
        <Switch
          value={persistSession}
          onValueChange={() => setPersistSession(!persistSession)}
          trackColor={{ false: colors.gray, true: colors.cyber }}
          thumbColor={persistSession ? colors.cyber : colors.gray}
        />
      </View>

      {result.status === "pending" && (
        <View style={styles.iconContainer}>
          <Feather name="loader" size={32} color={colors.cyber} />
        </View>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGray,
    gap: 24,
    paddingHorizontal: 16,
  },
  // title: {
  //   fontSize: 16,
  //   color: colors.red,
  //   fontFamily: "Pixel",
  // },
  subTitle: {
    fontSize: 20,
    color: colors.mediumGray,
    fontFamily: "Comic",
  },
  inputContainer: {
    gap: 16,
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: colors.mediumGray,
    color: colors.darkGray,
    width: textInputWidth,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  footTextContainer: {
    display: "none",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  whiteText: {
    color: colors.lightGray,
  },
  underLineText: {
    textDecorationLine: "underline",
  },
  btn: {
    backgroundColor: colors.red,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 16,
    color: colors.white,
  },
  rememberMe: {
    display: "none",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
  },
  iconContainer: {
    marginTop: 24,
    alignItems: "center",
  },
});
