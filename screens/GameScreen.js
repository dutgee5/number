import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function GameScreen({userNumber}) {
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  const initialGuess=generateRandomBetween(1,100,userNumber);
  const [currentGuess,setCurrentGuess]=useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title> Opponent' s Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
