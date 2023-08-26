import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TravelCalculator = () => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('');

  const [result, setResult] = useState('');

  const calculate = () => {
    if (destination && days && budget) {
      const daysNum = Number(days);
      const budgetNum = Number(budget);

      const dailyCost = budgetNum / daysNum;

      const resultText = `Для поездки в ${destination} на ${daysNum} дней вам нужно ${budgetNum.toFixed(2)} рублей. В среднем вы будете тратить ${dailyCost.toFixed(2)} рублей в день.`;

      setResult(resultText);
    } else {
      setResult('Пожалуйста, заполните все поля.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Калькулятор средств на путешествие</Text>
      <Text style={styles.label}>Куда вы хотите поехать?</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
        placeholder="Например, Париж"
      />
      <Text style={styles.label}>На сколько дней вы хотите поехать?</Text>
      <TextInput
        style={styles.input}
        value={days}
        onChangeText={setDays}
        placeholder="Например, 7"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Какой у вас бюджет на поездку?</Text>
      <TextInput
        style={styles.input}
        value={budget}
        onChangeText={setBudget}
        placeholder="Например, 50000"
        keyboardType="numeric"
      />
      <Button title="Рассчитать" onPress={calculate} />
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
  label: {
    fontSize: 18,
    marginVertical: 5,
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

export default TravelCalculator;


