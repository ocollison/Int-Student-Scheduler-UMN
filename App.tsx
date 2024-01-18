//Landing page with Navigation Tabs
import React, {useState, useEffect} from 'react';
import { StyleSheet, useColorScheme} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { NavigationContainer, useFocusEffect, getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import Home from './(tabs)/Home'
import Calendar from './(tabs)/Calendar'
import Welcome from './(tabs)/Welcome'
import Signup from './(tabs)/Signup'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

//f
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const getName = async () => {
  try {
    const firstName = await AsyncStorage.getItem('@firstName');
    return firstName;
  } catch(e) {
    return null;
  }
}

export default function LandingPage() {
  const [form, setForm] = useState({
    firstName: '',
  });
  useEffect(() => {
    // Call the getName function and update the state if the first name exists
    getName().then((firstName) => {
      if (firstName) {
        setForm((prevForm) => ({ ...prevForm, firstName }));
      }
    });
  }, []);

  //navigating based on name

  return (
    <NavigationContainer>
{form.firstName ? (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
      <Stack.Screen name="HomeTabs" component={HomeTabs}  />  
    </Stack.Navigator>
            ) : (
    <Stack.Navigator>
	<Stack.Screen name="HomeTabs" component={HomeTabs}  /> 
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} /> 
    </Stack.Navigator>
            )}
    </NavigationContainer>
  );
};

function HomeTabs() {
  const colorScheme = useColorScheme();
  return (
    //<NavigationContainer>
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            activeTintColor: 'lightgray', // Color of the active tab
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            inactiveTintColor: 'gray', // Color of inactive tabs
            height: 80,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: 'rgba(34,36,40,1)',
            borderTopWidth: 0,
        },
      })}>
            <Tab.Screen 
            name='Home'
            component={Home}
            options={{
              tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            }}
            />
            <Tab.Screen 
            name='Calendar'
            component={Calendar}
            options={{
              tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
            }}
            />
        </Tab.Navigator>
    //</NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    //'#424242'
  },
  hero: {
    backgroundColor: 'rgba(255, 165, 0, 0.4)', 
    margin: 12,
    borderRadius: 16,
    padding: 16,
    
  },
  heroImage: {
    width: '100%',
    height: 400,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  appName: {
    backgroundColor: '#fff2dd',
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#281b52',
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    color: '#A61D3F',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A61D3F',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});

