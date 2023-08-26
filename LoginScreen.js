import React from 'react';
import Swiper from 'react-native-swiper';
import { Image, View, StyleSheet, Dimensions, Button } from 'react-native';
const LoginScreen = ({ onFinish, setIsLoggedIn }) => {
  const [showButton, setShowButton] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Swiper 
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => {
          if(index === 2) setShowButton(true);
        }}
        
      >
        <View style={styles.slide}>
          <Image style={styles.image} source={require('./public/images/unnamed.png')} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require('./public/images/1.png')} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require('./public/images/2.png')} />
        </View>
      </Swiper>
      {showButton && (
        <View style={styles.buttonContainer}>
          <Button title="Войти" onPress={() => {
            onFinish();
            setIsLoggedIn(true);
          }} />       
          </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;

