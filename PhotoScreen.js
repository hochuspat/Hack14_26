import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

const contacts = [
  {
    name: "Иван Иванов",
    avatar: 'https://placekitten.com/50/50',
    lastMessage: "Привет! Как дела?",
    messages: [
      { text: "Привет!" },
      { text: "Как дела?" }
    ]
  },
];

const PhotoScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState(''); 

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Поиск контактов..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.contactContainer} 
            onPress={() => navigation.navigate('ChatScreen', { contact: item })}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactMessage}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  contactMessage: {
    color: '#777',
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInput: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
});

export default PhotoScreen;
