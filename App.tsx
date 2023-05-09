/*import { useState } from 'react';
//import {useState} from 'react';

import {
  SafeAreaView,
  ScrollView, 
  StatusBar,
  StyleSheet,
  Text, 
  useColorScheme,
  View,
} from 'react-native';

const[modalVisible,setModalVisible]=useState(false); // asi se declara un humm 

const App = () => {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
      Administracion de citas{''} 
      <Text style={styles.tituloBold}>Veeterinaria</Text>
      </Text>

       <Pressable style = {styles.btnNuevaCita}>
         onpress={()=>setModaVisible(true)}

       <Text style = {styles.btnTextoNuevaCiata}>Nueva cita</Text>
       </Pressable>
    </SafeAreaView>
  );
}
//------------
 //const nuevaCitaHandler = () => {
  //console.log('Presionastes el boton');
  
  }

const styles= StyleSheet.create({
   titulo:{
    textAlign:"center",
    fontSize:20,
    fontWeight:'900',
    color:'280E09',

   },
   tituloBold:{
    textAlign:"center",
    fontSize:20,
    fontWeight:'600',
    color:'#148305',
   },
   btnNuevaCita:{
    backgroudColor:'#6D29D9',
    Padding:15,
    marginTop:30,
    marginHorizontal:20,
    borderRadius:10
   },
   btnTextoNuevaCita:{}
   contenedor:{

   }

});

*/
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const HomeScreen = ({ navigation }) => {
  const goToNextPage = () => {
    navigation.navigate('NextScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>¡Academia de Baile A.S!</Text>
      <TouchableOpacity style={styles.button} onPress={goToNextPage}>
        <Text style={styles.buttonText}>Conocesnos con un click </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

