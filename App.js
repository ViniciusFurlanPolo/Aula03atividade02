import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import Estilo from './src/Estilo';

export default function App() {
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)
  const [res, setRes] = useState('')

  const soma = () => parseInt(setRes(num1 + num2)) 
  const sub = () => parseInt(setRes(num1 - num2)) 
  const mult = () => parseInt(setRes(num1 * num2)) 
  // const div = () => parseInt(setRes(num1 / num2))
  function div () {
    if (num2 != 0){
      setRes(num1 / num2)
      
    }else{
      <Alert severity="error">Não existe divisão por 0</Alert>
    }
  } 


  return (
    <>
      <View style={styles.container}>
        <TextInput keyboardType= 'phone-pad'
        placeholder = "Digite um Numero Inteiro"
        style={Estilo.numpad1}
        onChangeText = {num1 => setnum1(parseInt(num1))}
        />
        <TextInput keyboardType= 'phone-pad'
        placeholder = "Digite um Numero Inteiro"
        style={Estilo.numpad1}
        onChangeText = {num2 => setnum2(parseInt(num2))}
        />
        <StatusBar style="auto" />
        <Text style={Estilo.numpad1}> {res} </Text>
    </View>
    <View style={Estilo.botoes}>
      <Button title = "Soma" 
          onPress =  {soma} ></Button>
      <Button title = "Subtração" 
          onPress =  {sub} ></Button>
      <Button title = "Multiplicação" 
          onPress =  {mult} ></Button>
      <Button title = "Divisaõ" 
          onPress =  {div} ></Button>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  
});