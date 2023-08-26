import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
const Card = ({ card, onPress }) => {
    return (
      <View style={styles.card}> {/* Изменено на View */}
        <TouchableOpacity onPress={() => onPress(card)}>
          <Image source={card.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{card.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };
const HeardScreen = ({ route }) => {
  const { favoriteCards } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Избранное</Text>
      <ScrollView style={styles.cardContainer}>
        {favoriteCards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={card.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{card.text}</Text>
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
  cardContainer: {
    flex: 1,
  },

  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center', // Чтобы текст был по центру
  },
  card: {
    width: '100%',
    height:'100%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 2,
    marginTop: 20, // Добавлено для создания отступа между карточками
  },
});

export default HeardScreen;
