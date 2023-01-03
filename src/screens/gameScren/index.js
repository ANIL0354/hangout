import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Box, HStack, Input, useToast, Text } from 'native-base'
import { getRandom } from '../../helper/randomPick'
import styles from '../../commonStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'

const GameScreen = () => {
  const toast = useToast()

  const [input, setInput] = useState('')
  const [allMatchedText, setAllMatchedText] = useState('')
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(7)
  const [letter, setLetter] = useState(getRandom())
  const [highScore, setHighScore] = useState('')

  useEffect(() => {
    getData()
  }, [])

  //to get stored high score
  async function getData() {
    try {
      const value = await AsyncStorage.getItem('@hight_score')
      if (value !== null) {
        setHighScore(parseInt(value))
        // value previously stored
      } else {
        setHighScore(0)
      }
    } catch (e) {
      console.log('error getData', e)
      // error reading value
    }
  }

  //for storing high score
  async function storeData(value) {
    try {
      await AsyncStorage.setItem('@hight_score', value.toString())
    } catch (e) {
      console.log('error storeData', e)
      // saving error
    }
  }

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
    setAllMatchedText('')
    let random = getRandom()
    setLetter(random)
  }

  //on clicking on submit button
  function onSubmit() {
    if (letter.indexOf(input) > -1) {
      let temp = allMatchedText

      setAllMatchedText(
        Array.from(new Set(temp.concat(input)))
          .sort()
          .join(''),
      )
      if (
        Array.from(new Set(letter)).sort().join('') ===
        Array.from(new Set(temp.concat(input)))
          .sort()
          .join('')
      ) {
        toast.show({
          description: 'Great! match',
        })
        if (highScore < score + 1) {
          storeData(score + 1)
          setHighScore(score + 1)
        }
        setScore(score + 1)
        reInitialize()
        setLives(7)
      }
    } else {
      if (lives - 1 == 0) {
        setScore(0)
        setLives(7)
        reInitialize()
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
        {letter
          .toString()
          .split('')
          .map((item, index) => {
            return (
              <Text key={index} fontSize="2xl">
                {allMatchedText.includes(item) ? item : '_'}
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
        High score: {highScore}
      </Text>
    </ScrollView>
  )
}

export default GameScreen
