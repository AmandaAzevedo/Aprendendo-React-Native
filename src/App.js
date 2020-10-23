import React from 'react'
import { View, Text } from 'react-native'

import CompOfficial, { Comp1, Comp2, Comp3} from './components/Multi'
import FirstComponent from './components/First'

export default () => (
  <View>
    <CompOfficial />
    <Comp1 />
    <Comp2 />
    <Comp3 />
    <FirstComponent />
  </View>
)
