import React from 'react'
import { Text } from 'react-native'

export default function (){
  return <Text>Comp #Official</Text>
}

function Comp1(){
  return <Text>Comp #1</Text>
}

function Comp2(){
  return <Text>Comp #2</Text>
}

export function Comp3(){
  return <Text>Comp #3</Text>
}

export {Comp1, Comp2}
/* export default CompDefault */
