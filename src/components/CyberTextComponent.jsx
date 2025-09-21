import { Text } from "react-native";

const CyberTextComponent = ({ children, style }) => {
  return <Text style={{ fontFamily: "Cyber", ...style }}>{children}</Text>;
};

export default CyberTextComponent;
