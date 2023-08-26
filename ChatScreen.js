import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, Image } from 'react-native';

const ChatScreen = ({ route }) => {
  const { contact } = route.params;
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState(contact.messages);

  const sendMessage = () => {
    if (messageText.trim().length > 0) {
      setMessages(prevMessages => [{ type: 'sent', text: messageText }, ...prevMessages]);
      setMessageText('');
    }
  };

  return (
 
        <View style={styles.container}>
          <View style={styles.navbar}>
            <Image source={{ uri: contact.avatar }} style={styles.avatar} />
            <Text style={styles.contactName}>{contact.name}</Text>
          </View>
      <FlatList
        inverted
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={[styles.message, item.type === 'sent' ? styles.sentMessage : {}]}>{item.text}</Text>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Введите ваше сообщение..."
        />
        <Button title="Отправить" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 10,
      },
      navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10, 
        paddingHorizontal: 15, 
        backgroundColor: '#E9E9E9', 
        borderBottomWidth: 1, 
        borderBottomColor: '#C4C4C4', 
        marginBottom: 10, 
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 50,  
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      contactName: {
        fontSize: 18,
        fontWeight: '600',
      },
        message: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#E8E8E8',
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '70%',
  },
  sentMessage: {
    backgroundColor: '#4A90E2',  
    alignSelf: 'flex-end',  
    color: '#FFFFFF',  
  },
   inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 10,
  },
});

export default ChatScreen;



