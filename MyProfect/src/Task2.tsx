import React, { useState } from 'react';
import { View, Text, Animated, Dimensions,TouchableOpacity } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const App = () => {
  const [position1] = useState(new Animated.Value(0));
  const [position2] = useState(new Animated.Value(0));
  const [direction, setDirection] = useState<'right' | 'center' | 'left'>('right');

  const moveRight = () => {
    Animated.parallel([
      Animated.timing(position1, {
        toValue: windowWidth - 100,
        duration: 300, // İlk tablo daha hızlı
        useNativeDriver: false,
      }),
      Animated.timing(position2, {
        toValue: windowWidth - 100,
        duration: 500, // İkinci tablo daha yavaş
        useNativeDriver: false,
      }),
    ]).start(() => setDirection('center'));
  };

  const moveCenter = () => {
    Animated.parallel([
      Animated.timing(position1, {
        toValue: (windowWidth - 100) / 2,
        duration: 300, // İlk tablo daha hızlı
        useNativeDriver: false,
      }),
      Animated.timing(position2, {
        toValue: (windowWidth - 100) / 2,
        duration: 500, // İkinci tablo daha yavaş
        useNativeDriver: false,
      }),
    ]).start(() => setDirection('left'));
  };

  const moveLeft = () => {
    Animated.parallel([
      Animated.timing(position1, {
        toValue: 0,
        duration: 300, // İlk tablo daha hızlı
        useNativeDriver: false,
      }),
      Animated.timing(position2, {
        toValue: 0,
        duration: 500, // İkinci tablo daha yavaş
        useNativeDriver: false,
      }),
    ]).start(() => setDirection('right'));
  };

  return (
    <View>
    

      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          position: 'absolute',
          left: position1,
        }}
      />

      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          position: 'absolute',
          left: position2,
          top: 130,
        }}
      />
       <TouchableOpacity style={{marginTop:300,alignItems:"center"}} onPress={() => {
          if (direction === 'right') {
            moveRight();
          } else if (direction === 'center') {
            moveCenter();
          } else if (direction === 'left') {
            moveLeft();
          }
        }}>
        <Text style={{fontSize:20,color:"blue"}}>Move</Text>
       </TouchableOpacity>
      
    </View>
    
    
  );
};

export default App;
