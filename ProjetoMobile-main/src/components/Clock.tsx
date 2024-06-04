import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

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

 

  const secondDegrees = ((time.getSeconds() / 60) * 360) - 90;
  const minuteDegrees = ((time.getMinutes() / 60) * 360) - 90;
  const hourDegrees = ((time.getHours() / 12) * 360) - 90 + (0.4 * time.getMinutes());

  return (
    <View style={styles.clock}>
      <View style={[styles.hand, styles.hourHand, { transform: [{ translateY: 10 }, { rotate: `${hourDegrees}deg` }] }]} />
      <View style={[styles.hand, styles.minuteHand, { transform: [{ translateY: 64 }, { rotate: `${minuteDegrees}deg` }] }]} />
      <View style={[styles.hand, styles.secondHand, { transform: [{ translateY: 70 }, { rotate: `${secondDegrees}deg` }] }]} />
      {[...Array(12)].map((_, i) => (
        <View key={i} style={[styles.marker, { transform: [{ rotate: `${i * 30}deg` }, { translateY: 145  }] }]} />
      ))}
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const clockSize = Math.min(width, height) * 0.4;

const styles = StyleSheet.create({
  clock: {
    width: clockSize,
    height: clockSize,
    borderRadius: clockSize,
    borderColor: 'black',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hand: {
    position: 'absolute',
    bottom: '10%',
    backgroundColor: 'black',
  },
  hourHand: {
    position: 'absolute',
    width:  5,
    height: '30%',
    bottom:  100,
    transformOrigin: `0% 0%`,
    
  },
  minuteHand: {
    position: 'absolute',
    width: 4,
    height: '30%',
    bottom:  150,
    transformOrigin: `0% 0%`,
  
  },
  secondHand: {
    position: 'absolute',
    width: 1,
    height: '35%',
    bottom: 140,
    backgroundColor: 'rgb(0, 225, 255)',
    transformOrigin: `0% 0%`,
   
  },
  marker: {
    position: 'absolute',
    width: 5,
    height: '11%',
    bottom: '45 %',
    backgroundColor: 'black',
  },
});

export default Clock;
