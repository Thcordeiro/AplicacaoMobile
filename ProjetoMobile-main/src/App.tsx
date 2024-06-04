import React, {Component} from "react";
import MyNavigator from "./components/MyNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends Component {
  render(){

    return (

      <NavigationContainer>
        <MyNavigator></MyNavigator>
      </NavigationContainer>
      
    )
  }
}