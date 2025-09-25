import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Dimensions,
  Switch,
  Image,
  ActivityIndicator,
} from "react-native";
import CyberText from "../../components/CyberTextComponent";
import { colors } from "../../global/colors";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../services/authAPI";
import { setLocalId, setUserEmail } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { saveSession, clearSession } from "../../db";

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
    (async () => {
      if (result.status === "fulfilled") {
        //!LOG Resultado del LOGIN
        console.log(
          "Desde LoginScreen - Resultado del Login: Email: ",
          result.originalArgs.email,
          " Estado: ",
          result.status
        );
        try {
          dispatch(setUserEmail(result.data.email));
          dispatch(setLocalId(result.data.localId));
          if (persistSession) {
            await saveSession(result.data.localId, result.data.email);
          } else {
            await clearSession();
          }
        } catch (error) {
          console.log("Desde LoginScreen - Error al guardar sesión:", error); //!LOG error de sesion
        }
      } else {
        //!LOG Resultado del LOGIN
        console.log(
          "Desde LoginScreen - Resultado del Login: Email: -",
          "Estado: ",
          result.status
        );
      }
    })();
  }, [result]);

  useEffect(() => {
    console.log("Desde LoginScreen - Estado de persistencia: ", persistSession); //!LOG Estado de persistencia
  }, [persistSession]);

  // useEffect(() => {
  //   const saveLoginSession = async () => {
  //     if (result.status === "fulfilled") {
  //       try {
  //         const { localId, email } = result.data;
  //         dispatch(setUserEmail({ localId, email }));
  //       } catch (error) {
  //         console.log("Desde LoginScreen - Error al guardar sesión:", error);
  //       }
  //     }
  //   };
  //   saveLoginSession();
  // }, [result]);

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

      <Pressable style={styles.btn} onPress={onsubmit}>
        <CyberText style={styles.btnText}>Iniciar sesión</CyberText>
      </Pressable>

      <View style={styles.rememberMe}>
        <CyberText style={{ color: colors.lightGray }}>¿Mantener sesión iniciada?</CyberText>
        <Switch
          value={persistSession}
          onValueChange={() => setPersistSession(!persistSession)}
          trackColor={{ true: colors.mediumGray, false: colors.white }}
          thumbColor={persistSession ? colors.red : colors.mediumGray}
        />
      </View>

      {result.status === "pending" && (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color={colors.red} />
        </View>
      )}

      <View style={styles.presentationContainer}>
        <View style={styles.presentation}>
          <CyberText style={styles.whiteText}>Creado por Francisco Orellana</CyberText>
          <CyberText style={styles.whiteText}>
            Aplicaciones Moviles - 83865 - CoderHouse
          </CyberText>
        </View>
      </View>
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
  presentationContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  presentation: {
    paddingTop: 50,
    flexDirection: "column",
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
