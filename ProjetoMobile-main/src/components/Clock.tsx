import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

 

  const secondDegrees =(time.getSeconds() *6) ;
  const minuteDegrees = (time.getMinutes() *6) ;
  const hourDegrees = time.getMinutes() * 0.5 + (time.getHours() * 30 );
 


  return (
<>
<View style={styles.container}>
    <View style={styles.clock}>
      <View style={[styles.hand, styles.hourHand, { transform: [{ translateY: -clockSize/8.9 }, { rotate: `${hourDegrees}deg` }] }]} />
      <View style={[styles.hand, styles.minuteHand, { transform: [{ translateY: -clockSize/7.3  }, { rotate: `${minuteDegrees}deg` }] }]} />
      <View style={[styles.hand, styles.secondHand, { transform: [{ translateY: -clockSize/6  }, { rotate: `${secondDegrees}deg` }] }]} />
      <View style={styles.center}></View>
      {[...Array(12)].map((_, i) => (
        <View key={i} style={[styles.marker, { transform: [{ rotate: `${i * 30}deg` }, { translateY: clockSize/2.4  }] }]} />
      ))}
    </View>
  </View>
    </>
  );
};

const { width, height } = Dimensions.get('window');
const coeficienteClockSize = 400;
const clockSize = (width/height)*coeficienteClockSize;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  clock: {
    height:clockSize,
    width: clockSize,
    borderRadius: clockSize/2,
    borderColor: 'black',
    borderWidth: clockSize/40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hand: {
    position: 'absolute',
    backgroundColor: 'black',
  },
  hourHand: {
    position: 'absolute',
    width:  clockSize/55,
    height: clockSize/4,
    transformOrigin: `50% 100%`,
    
  },
  minuteHand: {
    position: 'absolute',
    width: clockSize/70,
    height: clockSize/3.5,
    transformOrigin: `50% 100%`,
  
  },
  secondHand: {
    position: 'absolute',
    width: 1,
    height: clockSize/3,
    backgroundColor: 'rgb(0, 225, 255)',
    transformOrigin: `50% 100%`,
   
  },
  marker: {
    position: 'absolute',
    width: clockSize/50,
    height: clockSize/7,
    backgroundColor: 'black',
  },
  center: {
    width: clockSize/30,
    height: clockSize/30,
    borderRadius: clockSize,
    backgroundColor:'#000000',
    position:'absolute',

    zIndex: 2
  },
});

export default Clock;
