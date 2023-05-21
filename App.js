import React, { useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

import Formulario from './src/componente/Formulario';
import Paciente from './src/componente/pacientes';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [editingPaciente, setEditingPaciente] = useState(null);

  const handleDeletePaciente = id => {
    const updatedPacientes = pacientes.filter(item => item.id !== id);
    setPacientes(updatedPacientes);
  };

  const handleEditPaciente = item => {
    setEditingPaciente(item);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administracion de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => {
          setEditingPaciente(null);
          setModalVisible(true);
        }}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>
      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No hay pacientes</Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={pacientes}
          renderItem={({ item }) => (
            <Paciente
              item={item}
              onDelete={handleDeletePaciente}
              onEdit={handleEditPaciente}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        editingPaciente={editingPaciente}
        setEditingPaciente={setEditingPaciente}
      />
      
      <Image // ponerle imagen 
        source={require('./imag/perro.gif')} // Ruta relativa del GIF
        style={styles.gif}
      
      /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101B68', // se cambia el fondo de la primera vista
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#1483D5',
  },
  btnNuevaCita: {
    backgroundColor: '#73B6EE',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  listado: {
    textAlign: 'center',
  },
  noPacientes: {
    textAlign: 'center',
  },
});

export default App;
