import React, { useState } from 'react'
import { Alert, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const Formulario = ({ modalVisible, setModalVisible, pacientes,setPacientes, editingPaciente,setEditingPaciente, }) => {

    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')

    const handleGuardar = () => {
        if ([paciente, propietario, email, telefono, sintomas].includes('')) {
          Alert.alert('Error', 'Todos los campos son obligatorios');
          return;
        }
    
        const nuevoPaciente = {
          id: editingPaciente ? editingPaciente.id : Date.now(),
          paciente,
          propietario,
          email,
          telefono,
          sintomas,
        };
    
        if (editingPaciente) {
          const index = pacientes.findIndex(item => item.id === editingPaciente.id);
          const updatedPacientes = [...pacientes];
          updatedPacientes[index] = nuevoPaciente;
          setPacientes(updatedPacientes);
          setEditingPaciente(null);
        } else {
          setPacientes([...pacientes, nuevoPaciente]);
        }
    
        setPaciente('');
        setPropietario('');
        setEmail('');
        setTelefono('');
        setSintomas('');
        setModalVisible(false);
      };
    
      return (
        <Modal animationType="slide" visible={modalVisible}>
          <SafeAreaView style={styles.container}>
            <ScrollView>
              <Text style={styles.tituloBold}>Nueva Cita</Text>
              <View>
                <Text style={styles.label}>Nombre Paciente</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre del paciente"
                  placeholderTextColor="#666"
                  value={paciente}
                  onChangeText={setPaciente}
                />
                <Text style={styles.label}>Nombre Propietario</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre Propietario"
                  placeholderTextColor="#666"
                  value={propietario}
                  onChangeText={setPropietario}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#666"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
                <Text style={styles.label}>Telefono</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Telefono"
                  placeholderTextColor="#666"
                  keyboardType="number-pad"
                  maxLength={10}
                  value={telefono}
                  onChangeText={setTelefono}
                />
                <Text style={styles.label}>Sintomas</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Sintomas"
                  placeholderTextColor="#666"
                  multiline={true}
                  numberOfLines={5}
                  value={sintomas}
                  onChangeText={setSintomas}
                />
              </View>
              <View>
                <Pressable style={styles.boton} onPress={handleGuardar}>
                  <Text style={styles.btnCancelarTexto}>
                    {editingPaciente ? 'Guardar cambios' : 'Nueva cita'}
                  </Text>
                </Pressable>
              </View>
              <View>
                <Pressable
                  style={styles.btnCancelar}
                  onLongPress={() => {
                    setEditingPaciente(null);
                    setModalVisible(false);
                  }}>
                  <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                </Pressable>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Modal>
      );
    };
    
    const styles = StyleSheet.create({
      label: { // letra de los preguntas para llenar
        color: '#FFFFFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 15,
        fontWeight: '500',
        left: 30,
      },
      btnCancelar: {
        backgroundColor: '#EC9B90',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginBottom: 20,
      },
      btnCancelarTexto: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      boton: {
        backgroundColor: '#97C3E5',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 40,
      },
      input: {
        fontSize: 18,
        color: '#666',
        backgroundColor: '#73B6EE',// color de fondo donde se va escribir
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: '#FBBF24',
        width: '80%',
        left: 50,
      },
      tituloBold: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      container: {
        backgroundColor: '#101B68',//  color fondo donde salen las preguntas 
        flex: 1,
      },
    });
    
    export default Formulario;