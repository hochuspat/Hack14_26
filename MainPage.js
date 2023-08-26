import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  slider: {
    borderRadius: 10,
    height: 200,
    marginBottom: 20,
    backgroundColor: 'lightgray', 
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#A4DDFF',
    alignItems: 'center',
  },
  cardTitle: {
    marginLeft: 10,
  },
  sliderItem: {
    width: 290,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 45,
},
image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
},
placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 5,
},
eventCard: {
    width: '100%', 
    height: 150, 
    marginBottom: 40,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,  
},
eventsTitle: {
    color: '#2E8CE0',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 35.75,  
    marginBottom: 10,  
},

eventImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    position: 'absolute',
},

});

const cards = [
    { title: "Поиск маршрута", icon: "search" },
    { title: "Карта", icon: "map" },
    { title: "Расчет", icon: "calculator" },
    { title: "Что здесь было?", icon: "question" },
    { title: "Тех. поддержка", icon: "cog" },
    { title: "Аудиогид", icon: "headphones" },
    { title: "Фото", icon: "photo" },
    { title: "Лучшее время", icon: "clock-o" },
  ];
  const places = [
    { image: require('./public/images/rectangle-27.png'), name: "Место 1" },
    { image: require('./public/images/rectangle-27.png'), name: "Место 2" },
    { image: require('./public/images/rectangle-27.png'), name: "Место 3" },
];
const events = [
    { image: require('./public/images/rectangle-27.png'), name: "Событие 1" },
    { image: require('./public/images/Group24.png'), name: " " },
];

  const MainPage = () => {
    const navigation = useNavigation();    
    return (
        <View style={styles.container}>
            <ScrollView>
<FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    data={places}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
        <View style={styles.sliderItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.placeName}>{item.name}</Text>
        </View>
    )}
/>
          <View style={styles.cardContainer}>
          {cards.map((card, index) => (
            
            <TouchableOpacity key={index} onPress={() => {
              if (card.title === "Карта") {
                navigation.navigate('MapScreen'); 
              } else if (card.title === "Поиск маршрута") {
                navigation.navigate('Poisk');
              } else if (card.title === "Расчет") {
                navigation.navigate('CardDetailsScreen');
              } 
              else if (card.title === "Лучшее время") {
                navigation.navigate('Luch');
              } 
              else if (card.title === "Аудиогид") {
                navigation.navigate('Git');
              } 
              else if (card.title === "Что здесь было?") {
                navigation.navigate('Cho');
              } 
              else if (card.title === "Фото") {
                navigation.navigate('S');
              } 
            }}>
            
        <View style={styles.card}>
          <FontAwesome name={card.icon} size={24} color="black" />
          <Text style={styles.cardTitle}>{card.title}</Text>
        </View>
      </TouchableOpacity>
      
    ))}
          </View>

          <Text style={styles.eventsTitle}>Актуальные события</Text>

<FlatList 
    showsHorizontalScrollIndicator={false}
    data={events}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
        <View style={styles.eventCard}>
            <Image source={item.image} style={styles.eventImage} />
            <Text style={styles.eventName}>{item.name}</Text>
        </View>
    )}
/>
</ScrollView>
        </View>
      );
    }
export default MainPage;
