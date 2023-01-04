import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { ScrollView } from 'react-native'
import { Button, Box, HStack, Input, useToast, Text } from 'native-base'
import { getRandom } from '../../helper/randomPick'
import styles from '../../commonStyle'
import GetHighScore from '../../helper/getHighScore'
import { checkIfAnyMatched, checkIfAllMatched } from '../../helper/utilities'

const GameScreen = () => {
  const toast = useToast()

  const [input, setInput] = useState('')
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(7)
  const [letter, setLetter] = useState(getRandom()) //[{value:'c',match:false},{value:"a",match:false}]
  const [highScored, storeData] = GetHighScore()

  useEffect(() => {
    if (lives == 0) {
      setScore(0)
      reInitialize()
    }
  }, [lives])

  useEffect(() => {
    if (highScored < score) {
      storeData(score)
      reInitialize()
    } else {
      reInitialize()
      setLives(7)
    }
  }, [score])

  //on input change
  function onInput(text) {
    //taking only alphabets
    let regx = /^[a-zA-Z]*$/
    if (regx.test(text)) {
      setInput(text)
    }
    return
  }

  //for resetting states
  function reInitialize() {
    let random = getRandom()
    setLetter(random)
  }

  //on clicking on submit button
  function onSubmit() {
    const [tempLetter, ifAnyMatched] = checkIfAnyMatched(letter, input)
    let ifAllMatchIndex = checkIfAllMatched(tempLetter)
    setLetter([...tempLetter])
    //if all character matched
    if (ifAllMatchIndex === -1) {
      toast.show({
        description: 'Great! match',
      })
      setScore(score + 1)
      // if any character mot matched and lives value is 0 then reset lives to 7 again and if lives value is other than 0 then decrease 1 lives
    } else if (!ifAnyMatched) {
      if (lives - 1 === -1) {
        setLives(7)
      } else setLives(lives - 1)
    }
    setInput('')
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <HStack
        space={2}
        alignItems={'center'}
        justifyContent="center"
        marginBottom={10}
      >
        {letter.map((item, index) => {
          return (
            <Text key={index} fontSize="2xl">
              {item.match ? item.value : '_'}
            </Text>
          )
        })}
      </HStack>
      <Input
        size="xl"
        placeholder="enter character"
        maxLength={1}
        autoCapitalize={'none'}
        autoComplete={'off'}
        autoCorrect={false}
        keyboardType={'ascii-capable'}
        value={input}
        onChangeText={onInput}
        marginBottom={10}
      />
      <Box alignItems="center" marginBottom={10}>
        <Button
          size="lg"
          disabled={!input.length ? true : false}
          onPress={onSubmit}
          backgroundColor={!input.length ? 'grey' : 'rgb(26,146,177)'}
        >
          Submit
        </Button>
      </Box>
      <Text fontSize="md" marginBottom={10} bold>
        Score: {score}
      </Text>
      <Text fontSize="md" marginBottom={10} bold>
        Live: {lives}
      </Text>
      <Text fontSize="md" marginBottom={10} bold>
        High score: {highScored}
      </Text>
    </ScrollView>
  )
}

export default GameScreen
