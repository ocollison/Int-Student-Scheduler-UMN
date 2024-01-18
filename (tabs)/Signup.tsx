
import { StyleSheet } from 'react-native';

//import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';


export default function SignupScreen({navigation}: {navigation: any}) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['']);
  const [items, setItems] = useState([
    { label: 'Soccer', value: 'soccer' },
    { label: 'Basketball', value: 'basketball' },
    { label: 'Football', value: 'football' },
    { label: 'Hackathons', value: 'hackathons' },
    { label: 'SUA', value: 'SUA' },
    { label: 'ISS', value: 'ISS' },
    { label: 'Jobs', value: 'Jobs' },
  ]);
  const storeData = async (firstName) => {
    try {
      await AsyncStorage.setItem('@firstName', firstName);
    } catch (e) {
      console.log("i dont know")
    }
  } 
  function isButtonDisabled() {
    return form.firstName.length === 0 || form.lastName.length === 0; 
  }
  const signup = () => {
    storeData(form.firstName);
    navigation.navigate('HomeTabs');
  }
  return (
   // <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={require('../assets/images/umn.jpg')}
          />

          <Text style={styles.title}>
            <Text style={{ color: '#A61D3F' }}>Welcome</Text>
          </Text>

        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>First Name</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={firstName => setForm({ ...form, firstName })}
              placeholder="Your first name here"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Last Name</Text>

            <TextInput
              autoCorrect={false}
              onChangeText={lastName => setForm({ ...form, lastName })}
              placeholder="Your last name here"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Interest</Text>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}

            theme="DARK"
            multiple={true}
            mode="BADGE"
            badgeDotColors={["red", "blue", "green", "yellow", "purple", "orange", "pink"]}
            dropDownDirection="TOP"
            style={styles.inputControl}
            placeholder="Select your interests at UMN"
            searchable
            searchPlaceholder="Search..."
            placeholderStyle={{
                color: "#6b7280",
                fontSize: 15,
                fontWeight: '500',
              }}
      />

          </View>


          <View style={styles.formAction}>
            <TouchableOpacity
            //onPress={() => navigation.navigate("HomeTabs")}
            disabled={isButtonDisabled()}
            style={isButtonDisabled() ? styles.disabledButton : null}
            onPress={signup}  
           // onPress={signup}
            //disabled={true}
           // style={styles.disabledButton}
            >    
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    //</SafeAreaView>
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
    color: 'black',
    marginBottom: 8,
  },
  inputControl: {
    height: 54,
    backgroundColor: 'lightgrey',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderColor: 'transparent',
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
  disabledButton: {
    opacity: 0.5, // Adjust the opacity to make it transparent
  },

});