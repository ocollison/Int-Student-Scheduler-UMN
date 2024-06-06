//normal landing page
import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
  } from 'react-native';
 // const navigation = useNavigation();
 export default function WelcomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
<SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={require('../assets/images/int.png')}
          //style={styles.heroImage}
          style={{ width: 325, height: 450 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Plan this semester with
            <View style={styles.appName}>
              <Text style={styles.appNameText}> Beyond Borders </Text>
            </View>
          </Text>
        </View>
        <TouchableOpacity
          // onPress={() => navigation.navigate("Signup")}
          onPress={() => navigation.navigate("Home")}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </View>
  );
};

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
