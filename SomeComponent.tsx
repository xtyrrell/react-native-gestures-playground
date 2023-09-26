
import React from 'react'

import { Button, View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withSpring, useAnimatedStyle, withDecay } from 'react-native-reanimated';

const SIZE = 120;

export default function SomeComponent() {
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);
  const width = useSharedValue(0)

  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    }).onChange((event) => {
      offset.value += event.changeX;
    }).onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
      });
      pressed.value = false;
    })

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? 'pink' : 'red',
    transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }, { translateX: offset.value }],
  }))


  return (
    <View onLayout={onLayout} style={styles.container}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.circle, animatedStyles]} />
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
  },
});


