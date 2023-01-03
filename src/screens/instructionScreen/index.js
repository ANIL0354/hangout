import { ScrollView } from 'native-base'
import React from 'react'
import styles from '../../commonStyle'
import { VStack, Text } from 'native-base'

const InstructionScreen = () => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainerStyle}
  >
    <VStack space={2} alignItems="center">
      <Text fontSize="2xl">player starts with 7 lives</Text>
      <Text fontSize="2xl">
        When the player presses the button, if the letter is NOT present in the
        word, the player loses a life and starts with a score of 0
      </Text>
      <Text fontSize="2xl">
        When the player reveals every letter in the word, their score is
        increased by one. Their number of lives is reset to 7 and they have to
        guess a new word
      </Text>
      <Text fontSize="2xl">
        When the player has no more lives, their score is reset to 0 and a new
        game begin
      </Text>
    </VStack>
  </ScrollView>
)

export default InstructionScreen
