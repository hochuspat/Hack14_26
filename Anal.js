import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [0, 10, 5, 20, 12, 15, 10];
const color1 = 'hsl(200, 80%, 50%)';

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

const GraphsPage = ({ navigation }) => {
  const [activeGraph, setActiveGraph] = useState('visits'); // Default active graph
  const [showReport, setShowReport] = useState(false); // State to control report visibility

  return (
    <ScrollView>
      <NavBar />
      <View style={styles.graphContainer}>
        <View style={styles.graphButtons}>
          <TouchableOpacity
            onPress={() => {
              setActiveGraph('visits');
              setShowReport(false); // Hide the report when switching to "Метрика"
            }}
            style={[
              styles.button,
              { backgroundColor: activeGraph === 'visits' ? '#2E8CE0' : '#FFFFFF' },
            ]}
          >
            <Text
              style={{
                fontSize: 16,
                color: activeGraph === 'visits' ? '#FFFFFF' : 'black',
              }}
            >
              Метрика
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveGraph('reports');
              setShowReport(true); // Show the report when switching to "Отчеты"
            }}
            style={[
              styles.button,
              { backgroundColor: activeGraph === 'reports' ? '#2E8CE0' : '#FFFFFF' },
            ]}
          >
            <Text
              style={{
                fontSize: 16,
                color: activeGraph === 'reports' ? '#FFFFFF' : 'black',
              }}
            >
              Отчеты
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.graphContent}>
          {/* Conditionally render graph or report based on activeGraph */}
          {activeGraph === 'visits' && (
            <React.Fragment>
              <Text style={styles.graphTitle}>Визиты</Text>
              {renderGraph('visits')}
            </React.Fragment>
          )}
                    {activeGraph === 'visits' && (
            <React.Fragment>
              <Text style={styles.graphTitle}>Поситители</Text>
              {renderGraph('visits')}
            </React.Fragment>
          )}
          {activeGraph === 'reports' && showReport && (
            <React.Fragment>
              <View style={styles.reportContainer}>
                <Text style={styles.graphTitle}>Отчеты</Text>
                <Text>Детализация графика по дням</Text>
              </View>
              <Text style={styles.graphTitle}>График для отчетов</Text>
              {renderGraph('reports')}
            </React.Fragment>
          )}
        </View>
      </View>
    </ScrollView>
  );
};


const renderGraph = (graphType) => {
  if (graphType === 'visits' || graphType === 'reports') {
    return (
      <VictoryChart
        domainPadding={{ x: 20, y: 20 }}
        animate={{ duration: 1000, easing: 'bounce', delay: 500 }}
        vertical
        style={styles.victoryChart}
      >
        <VictoryLine
          data={data.map((y, x) => ({ x: data.length - 1 - x, y }))}
          style={{
            data: { stroke: color1 },
            parent: { transform: 'scaleY(-1)' },
          }}
        />
        <VictoryAxis
          dependentAxis
          orientation="right"
          style={{
            axis: { stroke: color1 },
            tickLabels: { fill: color1 },
          }}
        />
      </VictoryChart>
    );
  }
};


const styles = StyleSheet.create({
  // Стили для компонентов

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
  graphContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  graphButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  graphContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: color1,
    marginBottom: 10,
  },
  victoryChart: {
    // Стили для VictoryChart
  },
  reportContainer: {
    padding: 20,
    backgroundColor: '#f7f7f7',
    margin: 10,
    borderRadius: 8,
  },
  button: {
    width: 150,
    height: 40,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#2E8CE0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GraphsPage;

