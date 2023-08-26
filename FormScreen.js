import React, { useState } from 'react';
import { View,ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Switch,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
const imageArray = [
    'https://phonoteka.org/uploads/posts/2021-06/1624488210_50-phonoteka_org-p-yezhik-oboi-krasivo-50.jpg', // Замените путем к изображению
    'https://phonoteka.org/uploads/posts/2021-06/1624488210_50-phonoteka_org-p-yezhik-oboi-krasivo-50.jpg', // Замените путем к изображению
    'https://phonoteka.org/uploads/posts/2021-06/1624488210_50-phonoteka_org-p-yezhik-oboi-krasivo-50.jpg', 
  ];
const FormScreen = () => {
  const navigation = useNavigation();
  const [direction, setDirection] = useState('');
  const [date, setDate] = useState('');
  const [transport, setTransport] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [ecoRoute, setEcoRoute] = useState(false);
  const [bikeRoutes, setBikeRoutes] = useState(false);

  const handleSubmit = () => {
    const formData = {
      direction,
      date,
      transport,
      accommodation,
      ecoRoute,
      bikeRoutes,
    };
    console.log(formData);
  };

  return (
    
    <View style={styles.container}><ScrollView>
      <Text style={styles.title}>Форма создания маршрута</Text>
      <TextInput
        style={styles.input}
        placeholder="Направление"
        value={direction}
        onChangeText={setDirection}
      />
      <TextInput
        style={styles.input}
        placeholder="Дата"
        value={date}
        onChangeText={setDate}
      />
<Picker
  selectedValue={transport}
  style={styles.picker}
  onValueChange={(itemValue) => setTransport(itemValue)}
>
  <Picker.Item label="Транспорт" value="" />
  <Picker.Item label="Автомобиль" value="car" />
  <Picker.Item label="Поезд" value="train" />
  <Picker.Item label="Самолет" value="plane" />
</Picker>

      <Picker
        selectedValue={accommodation}
        style={styles.picker}
        onValueChange={(itemValue) => setAccommodation(itemValue)}
      >
        <Picker.Item label="Место проживания" value="" />
        <Picker.Item label="Отель" value="hotel" />
        <Picker.Item label="Апартаменты" value="apartment" />
        <Picker.Item label="Хостел" value="hostel" />
      </Picker>
      <View style={styles.toggleContainer}>
        <Text>Наличие Эко-маршрута</Text>
        <Switch
          value={ecoRoute}
          onValueChange={setEcoRoute}
        />
      </View>
      <View style={styles.toggleContainer}>
        <Text>Наличие маршрутов для велосипедистов</Text>
        <Switch
          value={bikeRoutes}
          onValueChange={setBikeRoutes}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Средняя цена"
        value={date}
        onChangeText={setDate}
      />
  <Text style={styles.subTitle}>Попутчики</Text>
      <View style={styles.inputContainer}>
        {imageArray.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.icon} />
        ))}
        <View style={styles.grayCircle}>
          <Image
            source={require('./public/images/rectangle-242.png')} 
            style={styles.plusIcon}
          />
        </View>
      </View>
      <Text style={styles.title}>Оценка</Text>
      <TextInput
        style={styles.input}
        placeholder="Предварительная сумма"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Расчет топлива"
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Отправить</Text>
      </TouchableOpacity>
</ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2E8CE0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  picker: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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

export default FormScreen;
