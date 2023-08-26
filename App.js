import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import PhotoScreen from './PhotoScreen';
import CardScreen from './CardScreen';
import LoginScreen from './LoginScreen';
import Slider from './LoginScreen'; 
import MainPage from './MainPage'; 
import MapScreen from './MapScreen';
import Nastroi from './Nastroi';
import Kart from './Kart';
import Put from './Put';
import Anal from './Anal';
import Poisk from './Poisk';
import FormScreen from './FormScreen';
import Ackmsr from './Ackmsr'
import CardDetailsScreen from './CardDetailsScreen'; 
import Luch from './Luch'; 
import Git from './Git'; 
import Cho from './Cho'; 
import S from './S'; 
import Heart from './HeardScreen'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabsComponent() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Map') {
                        iconName = 'home';
                    } else if (route.name === 'Card') {
                        iconName = 'road';
                    } else if (route.name === 'Photo') {
                        iconName = 'comment';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    }

                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
                tabBarLabel: () => null,
                tabBarStyle: [
                    {
                        display: "flex",
                        height: 70  
                    },
                    null
                ]
            })}
        >
            <Tab.Screen name="Map" component={MainPage} />
            <Tab.Screen name="Card" component={CardScreen} />
<Tab.Screen name="Photo" component={PhotoScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />

        </Tab.Navigator>
    );
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showSlider, setShowSlider] = React.useState(true);

  if (!isLoggedIn) {
    if (showSlider) {
      return <Slider onFinish={() => setShowSlider(false)} setIsLoggedIn={setIsLoggedIn} />;
    } else {
      return <LoginScreen setIsLoggedIn={setIsLoggedIn} />;
    }
  }

  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>  
<Stack.Screen name="MainTabs" component={BottomTabsComponent} />
  <Stack.Screen name="MapScreen" component={MapScreen} />
  <Stack.Screen name="ChatScreen" component={ChatScreen} />  
  <Stack.Screen name="Nastroi" component={Nastroi} options={{ headerShown: false }}/>
  <Stack.Screen name="Kart" component={Kart} options={{ headerShown: false }}/>
  <Stack.Screen name="Put" component={Put} options={{ headerShown: false }}/>
<Stack.Screen name='Anal' component={Anal} options={{ headerShown: false}}/>
<Stack.Screen name='Poisk' component={Poisk} options={{ headerShown: false}}/>
<Stack.Screen name='FormScreen' component={FormScreen} options={{headerShown:false}}/>
<Stack.Screen name='Ackmsr' component={Ackmsr} options={{ headerShown:false}} />
<Stack.Screen name='CardDetailsScreen' component={CardDetailsScreen} options={{ headerShown:false}} />
<Stack.Screen name='Luch' component={Luch} options={{ headerShown:false}} />
<Stack.Screen name='Git' component={Git} options={{ headerShown:false}} />
<Stack.Screen name='Cho' component={Cho} options={{ headerShown:false}} />
<Stack.Screen name='S' component={S} options={{ headerShown:false}} />
<Stack.Screen name='Heart' component={Heart} options={{ headerShown:false}} />
</Stack.Navigator>
 </NavigationContainer>
  );
}

export default App;
