import React, { useState } from 'react'
import { Alert, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const Formulario = ({ modalVisible, setModalVisible }) => {

    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')

    const handleCita = () => {
        if ([paciente, propietario, telefono, sintomas].includes('')) {


            Alert.alert('Error', 'Todos los campos son obligatorios')
            return
        }
        const nuevoPaciente = { paciente, propietario, telefono, sintomas }

        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setSintomas('')
        setModalVisible(false)

    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible} >

            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva cita</Text>

                    <Pressable
                        style={styles.btnCancelar}
                        onLongPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.btnCancelarTexto}> X CANCELAR </Text>
                        
                    </Pressable>

                    <View
                        style={styles.label}>
                        <Text style={styles.label}

                        >Nombre Paciente</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Nombre del paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        ></TextInput>
                    </View>

                    <View>
                        <Text style={styles.label}

                        >Nombre Propietario</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Nombre del propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        ></TextInput>
                    </View>

                    <View>
                        <Text style={styles.label}

                        >Email</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#666'}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        ></TextInput>
                    </View>

                    <View>
                        <Text style={styles.label}

                        >Telefono</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Telefono'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            maxLength={10}
                            value={telefono}
                            onChangeText={setTelefono}
                        ></TextInput>
                    </View>

                    <View>
                        <Text style={styles.label}

                        >Sintomas</Text>

                        <TextInput
                            style={styles.input}
                            placeholder='Sintomas'
                            placeholderTextColor={'#666'}
                            multiline={true}
                            value={sintomas}
                            numberOfLines={2}
                            onChangeText={setSintomas}
                        ></TextInput>
                    </View>
                    <Pressable
                        style={styles.btnNuevaCita}
                        onPress={handleCita} >
                        <Text style={styles.btnCancelarTexto}>Nueva Cita</Text>

                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({

    contenido: {
        backgroundColor: '#6D28d9',
        flex: 1,
    },

    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },

    tituloBold: {
        fontWeight: '900'
    },

    btnCancelarTexto: {
        color: "#FFF",
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },

    campo: {
        marginTop: 10,
        marginHorizontal: 30
    },

    label: {
        color: "#FFF",
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },

    input: {
        backgroundColor:'#666',
        padding: 15,
        borderRadius: 10
    },

    sintomasInput: {
        height: 100
    },

    btnNuevaCita: {
        marginVertical: 60,
        backgroundColor: "F59E0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },

    btnCancelar: {
        marginVertical: 50,
        backgroundColor: "#F59E0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },

    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: "#5826A4",
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16

    }

})

export default Formulario