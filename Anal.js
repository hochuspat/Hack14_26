import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
  const [activeGraph, setActiveGraph] = useState('visits');
  const [showReport, setShowReport] = useState(false);

  const graphData = [
    {
      id: 'visits',
      title: 'Визиты',
      data: [0, 10, 5, 20, 12, 15, 10],
    },
    {
      id: 'visitors',
      title: 'Посетители',
      data: [5, 15, 8, 25, 18, 22, 17],
    },
  
  ];

  const renderGraph = (graphType) => {
    const graph = graphData.find((g) => g.id === graphType);
    if (graph) {
      return (
        <VictoryChart
          domainPadding={{ x: 20, y: 20 }}
          animate={{ duration: 1000, easing: 'bounce', delay: 500 }}
          vertical
          style={styles.victoryChart}
        >
          <VictoryLine
            data={graph.data.map((y, x) => ({ x: graph.data.length - 1 - x, y }))}
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

  return (
    <ScrollView>
      <NavBar />
      <View style={styles.graphContainer}>
        <View style={styles.graphButtons}>
          {graphData.map((graph) => (
            <TouchableOpacity
              key={graph.id}
              onPress={() => {
                setActiveGraph(graph.id);
                setShowReport(graph.id === 'reports');
              }}
              style={[
                styles.button,
                { backgroundColor: activeGraph === graph.id ? '#2E8CE0' : '#FFFFFF' },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: activeGraph === graph.id ? '#FFFFFF' : 'black',
                }}
              >
                {graph.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.graphContent}>
          {graphData.map((graph) => (
            activeGraph === graph.id && (
              <React.Fragment key={graph.id}>
                {showReport && <View style={styles.reportContainer}>
                  <Text style={styles.graphTitle}>Отчеты</Text>
                  <Text>Детализация графика по дням</Text>
                </View>}
                <Text style={styles.graphTitle}>{graph.title}</Text>
                {renderGraph(graph.id)}
              </React.Fragment>
            )
          ))}
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({

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

