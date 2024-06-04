import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  ex: {
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#222',
    fontSize: 24,
    fontWeight: 'bold'
  },
  bigText: {
    fontSize: 32
  },
  Text: {
    fontSize: 30,
    color: '#000000'
  },
  ImgBackground: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Box1: {
    alignContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000000',
    fontSize: 20,
    width: width * 0.75
  },
  testView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  clock: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hand: {
    position: 'absolute',
    bottom: '50%',
    backgroundColor: 'black',
    borderRadius: 5,
  },
  hourHand: {
    width: 10,
    height: '35%',
  },
  minuteHand: {
    width: 8,
    height: '40%',
  },
  secondHand: {
    width: 4,
    height: '45%',
    backgroundColor: 'rgb(0, 225, 255)',
  }
})