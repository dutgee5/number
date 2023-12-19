import { StyleSheet, TextInput, View,Alert} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onConfirmNumber}) {

  const [enteredValue,setEnteredValue]=useState('');

  function numberInputHandler(enteredText){
    setEnteredValue(enteredText);
  }

  function resetInputHandler(){
    setEnteredValue('');
  }

  function confirmInputHandler(){
    const choseNumber = parseInt(enteredValue);

    if(isNaN(choseNumber) || choseNumber<=0 || choseNumber>99){
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99.',
        [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
        )
      return;
    }
    onConfirmNumber(choseNumber);
  }

  return (
    <View style={styles.inputConteiner}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputConteiner: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black" /*IOS*/,
    shadowOffset: { width: 0, height: 2 } /*IOS*/,
    shadowRadius: 6 /*IOS*/,
    shadowRadius: 0.25 /*IOS*/,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer:{
    flex:1,
  }
});
