import React from 'react'
import { Text } from 'react-native'
import FirstStyle from './firstStyle'

export default (props) =>{
  /*console.warn(props)*/
  return (
    <Text style={FirstStyle.fontH1}>
      The value of {props.max} is greater than the value of {props.min}!
    </Text>
  )
}
