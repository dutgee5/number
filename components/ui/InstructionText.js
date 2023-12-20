import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, stil }) {
  return <Text style={[styles.instructionText, stil]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily:'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
