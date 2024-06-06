
import { StyleSheet } from 'react-native';

//import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
//import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput, Button, Appearance } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//other
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import {
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

const getName = async () => {
  try {
    const firstName = await AsyncStorage.getItem('@firstName');
    return firstName;
  } catch(e) {
    return null;
  }
}



export default function TabOneScreen({navigation}: {navigation: any}) {
  const focused = useIsFocused();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
  });
  useEffect(() => {
    // Call the getName function and update the state if the first name exists
    getName().then((firstName) => {
      if (firstName) {
        setForm((prevForm) => ({ ...prevForm, firstName }));
      }
    });
  }, [focused]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={require('../assets/images/umn.jpg')}
          />
           <Text style={styles.title}>
            {form.firstName ? (
              <Text style={{ color: '#A61D3F' }}>
                Welcome `${form.firstName}` `${form.lastName}`
              </Text>
            ) : (
              <Text style={{ color: '#A61D3F' }}>Welcome</Text>
            )}
          </Text>
        </View>
        <View style={styles.formAction}>
            <TouchableOpacity
           // onPress={() => navigation.navigate("Signup")}
>

              <View style={styles.btn}>
                <Text style={styles.btnText}>Import From Mail</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
           // onPress={() => navigation.navigate("Signup")}
>

              <View style={styles.btn}>
                <Text style={styles.btnText}>Import From Canvas</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
           // onPress={() => navigation.navigate("Signup")}
>

              <View style={styles.btn}>
                <Text style={styles.btnText}>Add Event</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
           // onPress={() => navigation.navigate("Signup")}
>

              <View style={styles.btn}>
                <Text style={styles.btnText}>Export Calendar</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#E0E0E0',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#E0E0E0',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#A61D3F',
    borderColor: '#A61D3F',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#FFCC00',
  },
});