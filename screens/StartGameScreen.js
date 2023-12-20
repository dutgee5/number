import { StyleSheet, TextInput, View, Alert,Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onConfirmNumber }) {
  const [enteredValue, setEnteredValue] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredValue(enteredText);
  }

  function resetInputHandler() {
    setEnteredValue("");
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(enteredValue);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onConfirmNumber(choseNumber);
  }

  return (
    <View style={styles.screenContainer}>
      <Title >Guess My Number</Title>

      <Card >
        <InstructionText >Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton tikla={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton tikla={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
