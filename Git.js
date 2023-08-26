import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,  Image, TouchableOpacity } from 'react-native';
import SoundPlayer from 'react-native-sound-player'; 
import { Picker } from '@react-native-picker/picker'

const cardsData = [
  {
    city: 'Москва',
    cards: [
      {
        id: 1,
        name: 'Красная площадь',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Moscow_July_2011-4a.jpg/800px-Moscow_July_2011-4a.jpg',
        audio: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ru-%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C.ogg',
        duration: 2,
      },
      {
        id: 2,
        name: 'Московский Кремль',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Moscow_Kremlin_from_the_Bolshoy_Kamenny_Bridge.jpg/800px-Moscow_Kremlin_from_the_Bolshoy_Kamenny_Bridge.jpg',
        audio: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Ru-%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D1%8C.ogg',
        duration: 3,
      },
      {
        id: 3,
        name: 'Собор Василия Блаженного',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Saint_Basil_Cathedral_Moscow_May_2016-2a.jpg/800px-Saint_Basil_Cathedral_Moscow_May_2016-2a.jpg',
        audio: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Ru-%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D1%8F_%D0%91%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE.ogg',
        duration: 4,
      },
    ],
  },
  {
    city: 'Париж',
    cards: [
      {
        id: 4,
        name: 'Эйфелева башня',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/800px-Tour_Eiffel_Wikimedia_Commons.jpg',
        audio: 'https://dl.dropbox.com/s/oswkgcw749xc8xs/The-Noisy-Freaks.mp3?dl=1',
        duration: 2,
      },
      {
        id: 5,
        name: 'Луврвввввввввв',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/800px-Tour_Eiffel_Wikimedia_Commons.jpg',
        audio: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Fr-Louvre.ogg',
        duration: 3,
      },
 
    ],
  },
];

const AudioGuide = () => {
  const [city, setCity] = useState('');

  const [cards, setCards] = useState([]);

  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = async (url) => {
    try {
      if (currentAudio) {
        await SoundPlayer.stop();
      }
      await SoundPlayer.playUrl(url);
                setCurrentAudio(url);
    } catch (e) {
      console.error(e);
      alert('Не удалось воспроизвести аудио.');
    }
  };

  useEffect(() => {
    const cityData = cardsData.find((item) => item.city === city);
    if (cityData) {
      setCards(cityData.cards);
    } else {
      setCards([]);
    }
  }, [city]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Аудиогид по городам</Text>
      <Text style={styles.description}>
        Выберите город из списка и прослушайте интересные факты о его
        достопримечательностях.
      </Text>
      <Picker
        style={styles.picker}
        selectedValue={city}
        onValueChange={setCity}
        mode="dropdown"
      >
        <Picker.Item label="Выберите город" value="" />
        <Picker.Item label="Москва" value="Москва" />
        <Picker.Item label="Париж" value="Париж" />
        <Picker.Item label="Лондон" value="Лондон" />
        <Picker.Item label="Нью-Йорк" value="Нью-Йорк" />
        <Picker.Item label="Токио" value="Токио" />
      </Picker>
      <View style={styles.cards}>
        {cards.map((card) => (
          <TouchableOpacity key={card.id} onPress={() => playAudio(card.audio)}>
            <View style={styles.card}>
              <Image
                style={styles.image}
                source={{ uri: card.image }}
                resizeMode="cover"
              />
              <View style={styles.info}>
                <Text style={styles.name}>{card.name}</Text>
                <Text style={styles.duration}>{card.duration} минут</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  picker: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  card: {
    width: 180,
    height: 200,
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  info: {
    width: '100%',
    height: '20%',
    backgroundColor: '#eee',
    padding: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 14,
    color: '#999',
  },
});

export default AudioGuide;
