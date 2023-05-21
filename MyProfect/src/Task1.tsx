import React, { useRef } from 'react';
import { View,TouchableOpacity,Text} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const Task1 = () => {
  const animation = useSharedValue(0);
  const viewWidth = useSharedValue(100);
  const viewRef = useRef(null);

  const uzat = () => {
    const uzunluk = Math.floor(Math.random() * 201) + 100; // Rastgele uzunluk seçimi (100 ile 300 arasında)

    animation.value = withTiming(uzunluk, { duration: 500 });
    viewWidth.value = withTiming(uzunluk, { duration: 500 }, () => {
      // Animasyon tamamlandığında yapılacak işlemler
      console.log('Animasyon tamamlandı!');
    });
  };

  const viewStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'blue',
      width: viewWidth.value,
      height: 100,
    };
  });

  return (
    <View>
     
      <Animated.View ref={viewRef} style={viewStyle} />
      <TouchableOpacity style={{alignItems:"center",marginTop:30}} onPress={uzat} >
        <Text style={{fontSize:20, color:"blue"}}>RANDOMWIDTH</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task1;
