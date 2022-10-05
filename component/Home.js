import { useRef, useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
function Home({ navigation }) {
   return (
      <ImageBackground source={require('../background/background.png')} style={{ position: 'relative', flex: 1 }}>
         <View style={styles.container}>
            <View style={styles.viewItem}>
               <Image
                  style={styles.logo}
                  // source={require('./image/download.jpg')}
               />
            </View>
            <View style={styles.viewItem}>
               <Text style={styles.header}>grow your business</Text>
            </View>
            <View style={styles.viewItem}>
               <Text style={styles.des}>we will help you to grow your business using online server</Text>
            </View>
            <View style={styles.viewbtn}>
               <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                     navigation.navigate('ForgotPassword');
                  }}>
                  <Text style={{ textAlign: 'center' }}>login</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btn} color="#f2ddb1">
                  <Text style={{ textAlign: 'center' }}>sign up </Text>
               </TouchableOpacity>
            </View>
            <View style={styles.viewItem}>
               <Text style={styles.des}>how to work?</Text>
            </View>
         </View>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
   linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
   },
   container: {
      // flex: 1,
      paddingTop: 100,
   },
   header: {
      fontSize: 25,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: '700',
   },
   viewItem: {
      paddingTop: 50,
   },
   viewbtn: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
   },
   btn: {
      paddingTop: 5,
      borderRadius: 50,
      height: 30,
      width: 90,
      backgroundColor: '#f2dd1b',
      // marginRight: 100,
   },
   des: {
      fontSize: 15,
      textAlign: 'center',
   },
   logo: {
      position: 'relative',
      left: 90,
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 10,
      borderColor: '#000',
      objectFit: 'cover',
   },
});

export default Home;
