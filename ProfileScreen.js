import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({ navigation }) => {
  const navigateToSettings = () => {
    navigation.navigate('Nastroi');
  };

  
    const navigateToKart = () => {
      navigation.navigate('Kart'); 
    };
    const navigateToPut = () => {
      navigation.navigate('Put'); 
    };
    const navigateToAnal = () => {
      navigation.navigate('Anal'); 
    };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image 
          source={{uri: 'https://phonoteka.org/uploads/posts/2021-06/1624488210_50-phonoteka_org-p-yezhik-oboi-krasivo-50.jpg'}}
          style={styles.profileImage}
        />
        <View style={styles.nameAndStatus}>
          <Text style={styles.profileName}>Иванов Иван</Text>
          <Text style={styles.profileStatus}>Путешественник</Text>
        </View>
        <TouchableOpacity onPress={navigateToSettings} style={styles.settingsIcon}>
          <Icon name="cog" size={30} color="#333" />
        </TouchableOpacity>
      </View>
<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.customButton} onPress={navigateToPut}>
          <Icon name="plane" size={20} color="#333" style={styles.buttonIcon} />
          <Text>Мои путешествия</Text>
        </TouchableOpacity>
        {renderButton("Мои попутчики", "users")}
        <TouchableOpacity style={styles.customButton} onPress={navigateToKart}>
          <Icon name="credit-card" size={20} color="#333" style={styles.buttonIcon} />
          <Text>Привязанные карты</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton} onPress={navigateToAnal}>
          <Icon name="bar-chart" size={20} color="#333" style={styles.buttonIcon} />
          <Text>Проведенная аналитика</Text>
        </TouchableOpacity>
        
        {renderButton("Избранное", "heart")}
      </View>
    </View>
  );
}

ProfileScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Профиль',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
      <Icon name="arrow-left" size={25} color="#333" />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity onPress={() => console.log("Сохранено")} style={{ marginRight: 10 }}>
      <Text style={{ fontSize: 16, color: "#333" }}>Сохранить</Text>
    </TouchableOpacity>
  )
});

const renderButton = (title, iconName) => (
  <TouchableOpacity style={styles.customButton} onPress={() => console.log(`${title} было нажато`)}>
    <Icon name={iconName} size={20} color="#333" style={styles.buttonIcon} />
    <Text>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  nameAndStatus: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileStatus: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  customButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#A4DDFF',
  },
  buttonIcon: {
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  settingsIcon: {
    padding: 10,
  }
});


export default ProfileScreen;


