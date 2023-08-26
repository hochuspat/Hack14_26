import React, { useState } from 'react';
import { View, Text, Button, Image, FlatList, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PhotoCard = ({ photo }) => (
    <View style={styles.photoCardContainer}>
      <Image source={{ uri: photo.url }} style={styles.photo} />
    </View>
  ); 
const PhotoPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const silhouettes = [
    'https://catherineasquithgallery.com/uploads/posts/2021-02/1614289550_95-p-chernii-chelovek-bez-fona-106.png',
    'https://catherineasquithgallery.com/uploads/posts/2021-02/1614289550_95-p-chernii-chelovek-bez-fona-106.png',
  ];

  const getRandomSilhouette = () => {
    return silhouettes[Math.floor(Math.random() * silhouettes.length)];
  };

  const pickPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedPhoto(result.uri);
    }
  };

  const popularPhotos = [
    {
      id: '1',
      url: 'https://demotivation.ru/wp-content/uploads/2020/03/2019Girls___Beautyful_Girls_Beautiful_girl_in_a_white_dress_sitting_on_a_stone_in_the_water_135982_-2048x1365.jpg',
      title: 'Силуэт человека на фоне заката',
    },
    {
      id: '2',
      url: 'https://sportishka.com/uploads/posts/2022-03/1646330829_3-sportishka-com-p-devushka-na-beregu-morya-turizm-krasivo-fo-9.jpg',
      title: 'Силуэт человека на фоне города',
    },
 
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Страница Фото</Text>
      <Text style={styles.description}>
        Здесь вы можете загрузить свою фотографию и добавить к ней силуэт человека.
      </Text>
      <Button title="Загрузить фотографию" onPress={pickPhoto} color="#841584" />
      {selectedPhoto && (
        <View style={styles.selectedPhotoContainer}>
          <Image source={{ uri: selectedPhoto }} style={styles.selectedPhoto} />
          <Image source={{ uri: getRandomSilhouette() }} style={styles.silhouette} />
        </View>
      )}
      <Text style={styles.popularText}>Сейчас популярно</Text>
      <FlatList
        data={popularPhotos}
        renderItem={({ item }) => <PhotoCard photo={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,

    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  selectedPhotoContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  selectedPhoto: {
    width: 300,
    height: 300,
  },
  silhouette: {
    width: '70%',
    height: '50%',
    position: 'absolute',
    top: 100,
  },
  popularText: {
    fontSize: 16,
    marginVertical: 10,
  },

  photoImage: {
    width: 200,
    height: 200,
  },
  photoTitle: {
    padding: 10,
  },
  photoCardContainer: {
    margin: 10,
    borderRadius: 15,  
    elevation: 8,  
    height:200
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 15,  
  },
});

export default PhotoPage;
