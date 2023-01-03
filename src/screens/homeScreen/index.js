import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Box } from 'native-base'
import commonStyles from '../../commonStyle'
import styles from './styles'

const HomeScreen = (props) => {
  return (
    <ScrollView
      style={commonStyles.container}
      contentContainerStyle={[
        commonStyles.contentContainerStyle,
        styles.containerSreen,
      ]}
    >
      <Box alignItems="center" marginBottom={10}>
        <Button
          size="lg"
          variant="solid"
          onPress={() => props.navigation.navigate('Game')}
        >
          Start game
        </Button>
      </Box>
      <Box alignItems="center">
        <Button
          size="lg"
          variant="solid"
          onPress={() => {
            props.navigation.navigate('Instruction')
          }}
        >
          Instruction
        </Button>
      </Box>
    </ScrollView>
  )
}

export default HomeScreen
