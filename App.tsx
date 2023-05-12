import React, {useState} from 'react';

import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Formulario from './src/componente/Formulario';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () =>{
  const[modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <Text style={styles.titulo}>
        Administración de citas {''}
      <Text style={styles.tituloBold}>Veterinaria </Text>
      </Text>
      
      <Pressable style={styles.btnNuevaCita} 
          onPress={()=>setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>

      <Formulario  
      modalVisible={modalVisible}
      setModalVisible = {setModalVisible} 

      />

    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  titulo:{
  textAlign: 'center',
  fontSize: 20,
  fontWeight: '900',
  color: '#000000',
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#148305',
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 1
  },

  btnTextoNuevaCita: {
    textAlign: 'center',
    color: "#FFF",
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});


export default App;

/*import React from 'react';
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
*/
