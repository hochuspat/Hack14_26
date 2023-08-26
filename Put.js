import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const TravelCard = ({ imageSource, title, description, groupButtonVisible }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
    <TouchableOpacity style={styles.moreButton}>
      <Text style={styles.moreButtonText}>Подробнее о путешествии</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.payButton}>
      <Text style={styles.payButtonText}>Оплатить онлайн</Text>
    </TouchableOpacity>
    {groupButtonVisible && (
      <TouchableOpacity style={styles.groupButton}>
        <Text style={styles.groupButtonText}>Группа путешествий</Text>
      </TouchableOpacity>
    )}
    <TouchableOpacity style={styles.link}>
      <Text style={styles.linkText}>Документы</Text>
    </TouchableOpacity>
  </View>
);
const NavBar = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.navBarBackButton}>
          <Icon name="arrow-back" size={28} color="#3899E2" /> 
          <Text style={styles.navBarText}>Назад</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
const TravelScreen = () => {
  const travels = [
    { id: 1, imageSource: require('./public/images/dsc-040581.png'), title: 'Заголовок 1', description: 'Краткое описание путешествия 1', isPast: false },
    { id: 2, imageSource: require('./public/images/dsc-040581.png'), title: 'Заголовок 2', description: 'Краткое описание путешествия 2', isPast: true },
  ];

  return (
    <ScrollView style={styles.container}>
      <NavBar /> 
      <Text style={styles.sectionTitle}>Запланированные путешествия</Text>      
      {travels
        .filter(travel => !travel.isPast)
        .map(travel => (
          <TravelCard
            key={travel.id}
            imageSource={travel.imageSource}
            title={travel.title}
            description={travel.description}
            groupButtonVisible={!travel.isPast}
          />
        ))}
      
      <Text style={styles.sectionTitle}>Прошедшие путешествия</Text>
      {travels
        .filter(travel => travel.isPast)
        .map(travel => (
          <TravelCard
            key={travel.id}
            imageSource={travel.imageSource}
            title={travel.title}
            description={travel.description}
            groupButtonVisible={false}
          />
        ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  moreButton: {
    borderColor: '#3899E2',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  moreButtonText: {
    color: '#3899E2',
  },
  payButton: {
    backgroundColor: '#3899E2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#FFFFFF',
  },
  groupButton: {
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navBar: {
    marginTop: 20,
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  navBarText: {
    fontSize: 18,
    color: '#3899E2',
  },
  navBarBackButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  
});

export default TravelScreen;

