import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cards = [
  { image: require('./public/images/rectangle-27.png'), text: 'Карточка 1' },
  { image: require('./public/images/rectangle-27.png'), text: 'Карточка 2' },
  { image: require('./public/images/rectangle-27.png'), text: 'Карточка 3' },
];
const imageArray = [
    'https://phonoteka.org/uploads/posts/2021-06/1624488210_50-phonoteka_org-p-yezhik-oboi-krasivo-50.jpg', 
    'https://phonoteka.org/uploads/posts/2021-06/1624488210_50-phonoteka_org-p-yezhik-oboi-krasivo-50.jpg', 
    'https://phonoteka.org/uploads/posts/2021-06/1624488210_50-phonoteka_org-p-yezhik-oboi-krasivo-50.jpg', 
  ];
const Card = ({ card, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(card)}>
      <Image source={card.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{card.text}</Text>
    </TouchableOpacity>
  );
};

const CardModal = ({ isVisible, onClose, card }) => {
    return (
      <Modal visible={isVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={card.image} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{card.text}</Text>
            <Text style={styles.modalText}>Направление: Москва - Санкт-Петербург</Text>
            <Text style={styles.modalText}>Дата: 2023-08-26</Text>
            <Text style={styles.modalText}>Транспорт: Поезд</Text>
            <Text style={styles.modalText}>Стоимость: $100</Text>
            <Text style={styles.subTitle}>Попутчики</Text>
      <View style={styles.inputContainer}>
        {imageArray.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.icon} />
        ))}
        <View style={styles.grayCircle}>
          <Image
            source={require('./public/images/rectangle-242.png')} // Замените путем к изображению
            style={styles.plusIcon}
          />
        </View>
      </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredCards = cards.filter(card =>
    card.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const navigation = useNavigation();

  const openModal = card => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Поиск по названию"
        value={searchText}
        onChangeText={setSearchText}
      />
      <ScrollView style={styles.cardContainer}>
        {filteredCards.map((card, index) => (
          <Card key={index} card={card} onPress={openModal} />
        ))}
      </ScrollView>
      {selectedCard && (
        <CardModal isVisible={!!selectedCard} onClose={closeModal} card={selectedCard} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  cardContainer: {
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
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 5,
  },
  modalDescription: {
    marginTop: 5,
    color: '#888',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  grayCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  plusIcon: {
    width: 30,
    height: 30,
  },
});

export default HomeScreen;
