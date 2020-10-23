import React from 'react'
import { Text } from 'react-native'
import FirstStyle from './firstStyle'

export default function (){
  return <Text style={FirstStyle.fontH1}>Comp #Official</Text>
}

function Comp1(){
  return <Text style={FirstStyle.fontH1}>Comp #1</Text>
}

function Comp2(){
  return <Text style={FirstStyle.fontH1}>Comp #2</Text>
}

export function Comp3(){
  return <Text style={FirstStyle.fontH1}>Comp #3</Text>
}

export {Comp1, Comp2}
/* export default CompDefault */
