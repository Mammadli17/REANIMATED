import { View, Text } from 'react-native'
import React from 'react'
import Task1 from './src/Task1'
import Task2 from './src/Task2'

const App = () => {
  return (
    <View style={{flexDirection:"column",gap:50}}>
      <Task1/>
      <Task2/>
    </View>
  )
}

export default App