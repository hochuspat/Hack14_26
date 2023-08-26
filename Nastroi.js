import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, Button,TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {  
  const [inviteEnabled, setInviteEnabled] = useState(false);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  return (
    <View style={styles.container}>

<View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <FontAwesome name="arrow-left" size={24} color="black" />
  </TouchableOpacity>
  <Text style={styles.headerTitle}>Настройки</Text>
</View>
      <View style={styles.setting}>
        <Text>Приглашать меня в поездки:</Text>
        <Switch value={inviteEnabled} onValueChange={setInviteEnabled} />
      </View>

      <Button title="Изменить аватар" onPress={() => {/* логика для изменения аватара */}} />

      <TextInput style={styles.textInput} placeholder="Фамилия" value={lastName} onChangeText={setLastName} />
      <TextInput style={styles.textInput} placeholder="Имя" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.textInput} placeholder="Отчество" value={middleName} onChangeText={setMiddleName} />
      <TextInput style={styles.textInput} placeholder="Телефон" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.textInput} placeholder="Почта" value={email} onChangeText={setEmail} keyboardType="email-address" />
      
      <View style={styles.picker}>
        <Picker selectedValue={country} onValueChange={itemValue => setCountry(itemValue)}>
          <Picker.Item label="Россия" value="ru" />
          <Picker.Item label="США" value="us" />
        </Picker>
      </View>

      <View style={styles.picker}>
        <Picker selectedValue={city} onValueChange={itemValue => setCity(itemValue)}>
          <Picker.Item label="Москва" value="moscow" />
          <Picker.Item label="Нью-Йорк" value="newYork" />
        </Picker>
      </View>

      <TextInput style={[styles.textInput, { height: 80 }]} placeholder="О себе" value={aboutMe} onChangeText={setAboutMe} multiline />
      <View style={styles.saveButtonContainer}>
        <Button title="Сохранить" onPress={() => {/* логика сохранения настроек */}} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
  },
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,   
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: 10,  
  },
    saveButtonContainer: {
    alignSelf: 'center',
    width: '100%',
  },  backButton: {
    alignSelf: 'flex-start', 
    marginBottom: 20,
  },
  saveButtonContainer: {
    alignSelf: 'center',
    width: '100%', 
  },  
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 15,
  },
  textInput: {
    height: 40,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
});

export default SettingsScreen;