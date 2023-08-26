import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 

const PhotoPage = () => {
  const [photo, setPhoto] = useState(null);

  const [cards, setCards] = useState([
    {
      id: 1,
      image: 'https://uprostim.com/wp-content/uploads/2021/02/image004-49.jpg',
      text: 'Красная площадь',
    },
    {
      id: 2,
      image: 'https://phonoteka.org/uploads/posts/2021-06/1624488210_50-phonoteka_org-p-yezhik-oboi-krasivo-50.jpg',
      text: 'Московский Кремль',
    },
    {
      id: 3,
      image: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663155867_60-mykaleidoscope-ru-p-yezhik-veselii-krasivo-61.jpg',
      text: 'Собор Василия Блаженного',
    },
  ]);

  const choosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Фотографии по городам</Text>
      <Text style={styles.description}>
        На этой странице вы можете посмотреть фотографии разных городов и загрузить свое фото.
      </Text>
      <TouchableOpacity style={styles.button} onPress={choosePhoto}>
        <Text style={styles.buttonText}>Выбрать фото</Text>
      </TouchableOpacity>
      {photo && (
        <Image
          style={styles.photo}
          source={{ uri: photo.uri }}
          resizeMode="cover"
        />
      )}
      <ScrollView style={styles.cards}>
        {cards.map((card) => (
          <View key={card.id} style={styles.card}>
            <Image
              style={styles.image}
              source={{ uri: card.image }}
              resizeMode="cover"
            />
            <Text style={styles.text}>{card.text}</Text>
          </View>
        ))}
      </ScrollView>
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
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cards: {
    flex: 1,
  },
  card: {
    width: '100%',
    height: 169,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PhotoPage;
