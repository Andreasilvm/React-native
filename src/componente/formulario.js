import React, { useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput } from "react-native"

const Formulario = ({ modalVisible, setModalVisible }) => {// constructor

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
        const nuevoPaciente = { paciente, propietario, email, telefono, sintomas }
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setSintomas('')
        setModalVisible(!modalVisible)
        //setModalVisible(false)

    }
    return (
        <Modal
            animationType='slide'
            visible={modalVisible}>

            <SafeAreaView>
                <ScrollView>
                    <Text>Nueva Cita</Text>
                    <Pressable
                        style={styles.btnCancelarTexto}
                        onLongPress={() => setModalVisible(false)}// sirve para cerrar
                    >
                        <Text style={styles.btnCancelarTexto}> X Cancelar </Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text
                            style={StyleSheet.label}>
                            Nombre por paciente </Text>
                        <TextImput
                            styles={Styles.imput}
                            placeholder='Nombre del paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        > </TextImput>
                    </View>
                    <View>
                        <Text
                            style={StyleSheet.label}>
                            propietario </Text>
                        <TextImput
                            styles={Styles.imput}
                            placeholder='Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setpropietario}
                        > </TextImput>
                    </View>
                    <View>
                        <Text
                            style={StyleSheet.label}>
                            email </Text>
                        <TextImput
                            styles={Styles.imput}
                            placeholder='Email'
                            placeholderTextColor={'#666'}
                            value={emil}
                            onChangeText={setEmail}
                        > </TextImput>
                    </View>
                    <View>
                        <Text
                            style={StyleSheet.label}>
                            telefono </Text>
                        <TextImput
                            styles={Styles.imput}
                            placeholder='Telefono'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            maxLength={10}
                            value={telefono}
                            onChangeText={setTelefono}
                        > </TextImput>
                    </View>
                    <View>
                        <Text
                            style={StyleSheet.label}>
                            sintomas </Text>
                        <TextImput
                            styles={[Styles.imput, styles.sintomasInput]}
                            placeholder='Sintomas'
                            placeholderTextColor={'#666'}
                            multiline={true}
                            numberOfLines={S}
                            value={sintomas}
                            onChangeText={setSintomas}
                        > </TextImput>
                    </View>
                    <Pressable
                        style={styles.btnNuevaCita}

                        onPress={handleCita}
                    >
                        <Text style={styles.btnNuevaCitaTexto}> X Agregar paciente </Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal >// ventana
    )
}
const styles = StyleSheet.create({
    contenido: {
        backgroundColor: "#6D28D9"
    },

    tituloBold: {
        fontWeight: '900'
    },

    btnCancelar: {
        backgroundColor: "#5827A4",
        marginVertical: 39,
        marginHorizontal: 30,
        pedding: 15,
        borderRadius: 10
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
        color: '#FFF',
        marginBottom: '10',
        marginTop: '15',
        fontFont: '20',
        fontWeight: '500'
    },
    input: {
        backgroundColor: '#FFF',
        padding: '15',
        borderRadius: '10'
    },
    sintomasInput: {
        height: 100
    },
    btnNuevaCita: {
        marginVertical: 59,
        backgroundColor: "#F59e0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: "#5827A4",
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16
    }
});
export default Formulario;