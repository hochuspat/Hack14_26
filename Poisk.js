import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, description, imageSource, navigation }) => ( // Добавили navigation как аргумент
  <TouchableOpacity
    style={styles.card}
    onPress={() => {
      if (title === "Создать свой") {
        navigation.navigate('FormScreen');
      } else if (title === "Готовые маршруты") {
        navigation.navigate('Ackmsr')
      }
    }}
  >   
   <Image source={imageSource} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </TouchableOpacity>
);

const App = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Card
          title="Готовые маршруты"
          description="Выберите один из актуальных маршрутов для путешествия в одиночку или со своими друзьями! "
          imageSource={require('./public/images/rectangle-27.png')}
          navigation={navigation} 
        />
        <Card
          title="Создать свой"
          description="Создайте свой собственный маршрут, выбирая место, ценовую политику и так далее!"
          imageSource={require('./public/images/rectangle-27.png')}
          navigation={navigation} 
        />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: 300,
    height: 251,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 2,
    padding: 10,
  },
  image: {
    width: 283,
    height: 100,
    flexShrink: 0,
    borderRadius: 10,
  },
  title: {
    color: '#2E8CE0',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21.45,
    marginTop: 10,
  },
  description: {
    textAlign: 'center',
    marginTop: 5,
  },
});

export default App;
