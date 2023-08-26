import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'
const BestTime = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const [result, setResult] = useState('');

  const calculate = () => {
    if (city && date) {
      const datePattern = /^\d{8}$/;
      if (datePattern.test(date)) {
        const day = date.slice(0, 2);
        const month = date.slice(2, 4);
        const year = date.slice(4);

        const parsedDate = new Date(`${year}-${month}-${day}`);
        if (
          parsedDate &&
          parsedDate.getDate() === Number(day) &&
          parsedDate.getMonth() + 1 === Number(month) &&
          parsedDate.getFullYear() === Number(year) &&
          parsedDate <= new Date()
        ) {
          const formattedDate = parsedDate.toISOString().slice(0, 10);
          const temperature = 25; // градусы Цельсия
          const population = 1000000; // человек

          const coefficient = 1 / (1 + Math.log10(population / 1000000));
          const score = temperature * coefficient;

          const resultText = `Оценка для посещения ${city} в ${formattedDate} равна ${score.toFixed(
            2
          )}. Температура в этот день составляла ${temperature} °C, а население города - ${population} человек.`;

          setResult(resultText);
        } else {
          setResult('Пожалуйста, введите корректную дату.');
        }
      } else {
        setResult('Пожалуйста, введите дату в виде 8 цифр без разделителей.');
      }
    } else {
      setResult('Пожалуйста, заполните все поля.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Лучшее время для путешествия</Text>
      <Text style={styles.instruction}>
        Выберите город и дату, чтобы узнать, насколько хорошо было посетить этот
        город в это время.
      </Text>
      <Picker
        style={styles.picker}
        selectedValue={city}
        onValueChange={setCity}
        mode="dropdown"
      >
        <Picker.Item label="Выберите город" value="" />
        <Picker.Item label="Москва" value="Москва" />
        <Picker.Item label="Париж" value="Париж" />
        <Picker.Item label="Лондон" value="Лондон" />
        <Picker.Item label="Нью-Йорк" value="Нью-Йорк" />
        <Picker.Item label="Токио" value="Токио" />
      </Picker>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Дата дата месяц год"
      />
      <Button title="Оценить" onPress={calculate} />
      <Text style={styles.result}>{result}</Text>
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
  instruction: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  picker: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default BestTime;

