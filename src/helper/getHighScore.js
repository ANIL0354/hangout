import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const GetHighScore = () => {
  const [highScore, setHighScore] = useState()

  useEffect(() => {
    getData()
  }, [highScore])

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
      setHighScore(value)
      await AsyncStorage.setItem('@hight_score', value.toString())
    } catch (e) {
      console.log('error storeData', e)
      // saving error
    }
  }
  return [highScore, storeData]
}

export default GetHighScore
