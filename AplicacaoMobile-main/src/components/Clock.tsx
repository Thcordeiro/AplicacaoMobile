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
  const hourDegrees = ((time.getHours() / 12) * 360) - 90 + (0.5 * time.getMinutes());

  return (
    <View style={styles.clock}>
      <View style={[styles.hand, styles.hourHand, { transform: [{ translateY: -0.175 * clockSize / 2 }, { rotate: `${hourDegrees}deg` }] }]} />
      <View style={[styles.hand, styles.minuteHand, { transform: [{ translateY: -0.2 * clockSize / 2 }, { rotate: `${minuteDegrees}deg` }] }]} />
      <View style={[styles.hand, styles.secondHand, { transform: [{ translateY: -0.225 * clockSize / 2 }, { rotate: `${secondDegrees}deg` }] }]} />
      {[...Array(12)].map((_, i) => (
        <View key={i} style={[styles.marker, { transform: [{ rotate: `${i * 30}deg` }, { translateY: -0.45 * clockSize / 2 }] }]} />
      ))}
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const clockSize = Math.min(width, height) * 0.8;

const styles = StyleSheet.create({
  clock: {
    width: clockSize,
    height: clockSize,
    borderRadius: clockSize / 2,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hand: {
    position: 'absolute',
    bottom: '50%',
    backgroundColor: 'black',
  },
  hourHand: {
    width: 5,
    height: '35%',
    bottom: 0.35 * clockSize / 2,
  },
  minuteHand: {
    width: 5,
    height: '40%',
    bottom: 0.4 * clockSize / 2,
  },
  secondHand: {
    width: 4,
    height: '45%',
    bottom: 0.45 * clockSize / 2,
    backgroundColor: 'rgb(0, 225, 255)',
  },
  marker: {
    position: 'absolute',
    width: 4,
    height: '10%',
    bottom: '50%',
    backgroundColor: 'black',
  },
});

export default Clock;
