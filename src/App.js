import React from 'react'
import { View, StyleSheet } from 'react-native'

import MinMax from './components/MinMax'
// import CompOfficial, { Comp1, Comp2, Comp3} from './components/Multi'
// import FirstComponent from './components/First'

export default () => (
  <View style={style.App}>
    <MinMax min={3} max={20} />
    {/* <CompOfficial />
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <FirstComponent /> */}
  </View>
)

const style = StyleSheet.create({
  App: {
    backgroundColor: '#8a05be',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  }
})
