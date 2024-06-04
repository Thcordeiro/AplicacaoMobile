import React, { useState } from 'react'; 
import {  ImageBackground,  Text, TextInput, View } from 'react-native';
import Default from '../../styles/Default';
import Clock from '../../components/Clock';
 
export default (props: any) => {

  const inputLogin = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
  }
  

  return (

    <ImageBackground
      source={require('../../assets/images/4964195.jpg')}
      style={Default.ImgBackground}
      resizeMode='cover'
    >
        <Clock />
    </ImageBackground>
    
  )
}