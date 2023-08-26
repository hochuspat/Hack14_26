import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity style={styles.accordionHeader} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>
      {isOpen && children}
    </View>
  );
};

const DropdownList = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const toggleItemCheck = index => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Стандартный список вещей</Text>
      <AccordionItem title="Документы">
        <View>
          {['Раздел 1', 'Раздел 2', 'Раздел 3'].map((item, index) => (
            <View key={index} style={styles.dropdownItem}>
              <Text style={styles.itemText}>{item}</Text>
              <Switch 
                value={checkedItems[index]} 
                onValueChange={() => toggleItemCheck(index)}
                trackColor={{ false: "#cccccc", true: "#81b0ff" }}
                thumbColor={checkedItems[index] ? "#1E62D0" : "#f4f3f4"}
              />
            </View>
          ))}
        </View>
      </AccordionItem>
      <AccordionItem title="Документы">
        <View>
          {['Раздел 1', 'Раздел 2', 'Раздел 3'].map((item, index) => (
            <View key={index} style={styles.dropdownItem}>
              <Text style={styles.itemText}>{item}</Text>
              <Switch 
                value={checkedItems[index]} 
                onValueChange={() => toggleItemCheck(index)}
                trackColor={{ false: "#cccccc", true: "#81b0ff" }}
                thumbColor={checkedItems[index] ? "#1E62D0" : "#f4f3f4"}
              />
            </View>
          ))}
        </View>
      </AccordionItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333'
  },
  accordionItem: {
    marginVertical: 5,
    borderRadius: 5,
    overflow: 'hidden'
  },
  accordionHeader: {
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444'
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff'
  },
  itemText: {
    fontSize: 16,
    color: '#555'
  }
});

export default DropdownList;

