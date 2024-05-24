import React from 'react'; 
import { View, ImageBackground, Text, Button } from 'react-native';
import Default from '../../styles/Default';

export default function WelcomeScreen({ navigation }: any) { 

  const secScreen = () => {
    navigation.navigate('Login')
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}]
    })
  }
  
  return (
    <ImageBackground 
      source={require('../../assets/images/4964195.jpg')} 
      style={Default.ImgBackground}
      resizeMode='cover'
    >
      <View style={Default.testView}>
        <Text style={Default.Text}> Olá mundo! {"\n"} </Text>
        <Button
          title='Get Started'
          onPress={secScreen}
        />
      </View>
    </ImageBackground>
  )
}