import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

const BankOperationsScreen = () => {
  const [selectedOperation, setSelectedOperation] = useState(null);

  const operations = [
    { id: '1', name: 'Все', icon: 'home' },
    { id: '2', name: 'Здоровье', icon: 'heart' },
    { id: '3', name: 'Дорога', icon: 'road' },
    { id: '4', name: 'Еда', icon: 'cutlery' },
  ];

  const cards = [
    require('./public/images/image-14.png'),
    require('./public/images/image-14.png'),
  ];
  const events = [
    { image: require('./public/images/rectangle-27.png'), name: "Событие 1" },
    { image: require('./public/images/Group24.png'), name: " " },
];
  return (
        <ScrollView style={styles.container}>
 <View style={styles.cardsContainer}>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Swiper style={styles.swiper} showsButtons={true} autoplay={true}>
        {cards.map((card, index) => (
          <View key={index} style={styles.cardSlide}>
            <Image source={card} style={styles.cardImage} />
          </View>
        ))}
      </Swiper>
    </View>

    <Text style={styles.title}>Популярные операции</Text>
    <ScrollView 
  horizontal={true} 
  showsHorizontalScrollIndicator={false} 
  contentContainerStyle={styles.operationsContainer}
>
  {operations.map(op => (        
    <TouchableOpacity
  key={op.id}
  style={[
    styles.operation,
    selectedOperation === op.id ? { borderWidth: 0 } : {}, // Уберите обводку, если кнопка выбрана
  ]}
  onPress={() => setSelectedOperation(op.id === selectedOperation ? null : op.id)}
>
  <View style={[styles.operationBackground, selectedOperation === op.id && styles.operationSelected]} />
  <View style={styles.iconContainer}>
    <FontAwesome name={op.icon} size={24} color="#3899E2" />
  </View>
  <Text style={selectedOperation === op.id ? {...styles.operationText, color: '#FFF'} : styles.operationText}>{op.name}</Text>
</TouchableOpacity>

      ))}
    </ScrollView>
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
);
        }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    cardSlide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardImage: {
      resizeMode: 'cover',
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
      },
      addButton: {
        marginRight: 15,  
        width: 60,
        height: 60,
        backgroundColor: 'gray',
        borderRadius: 10,  
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      
    swiper: {
        width: '85%',  
        height: 200,  
      },
    
  
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  operation: {
    width: 100,
    height:125,  // Увеличил высоту, чтобы сделать кнопку овальной по вертикали
    borderRadius: 50, // Это половина новой высоты
    borderWidth: 2,
    borderColor: '#3899E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    position: 'relative',
},
operationText: {
    color: '#3899E2',
    fontSize: 14, // Уменьшенный размер шрифта. Вы можете адаптировать это значение по своему усмотрению.
    position: 'absolute',
    bottom: 20,
},

operationBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 60, // Соответственно меняем и тут
    position: 'absolute',
    top: 0,
    left: 0,
},

  operationSelected: {
    backgroundColor: '#3899E2',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderWidth: 2,
    borderColor: '#3899E2',
    marginBottom: 30, 
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

export default BankOperationsScreen;
