import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Paciente = ({ item, onDelete, onEdit }) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.paciente}>
           
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <Text style={styles.valor}>{item.paciente}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.valor}>{item.propietario}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{item.email}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={styles.valor}>{item.telefono}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Síntomas:</Text>
                    <Text style={styles.valor}>{item.sintomas}</Text>
                </View>
                <View style={styles.botones}>
                    <TouchableOpacity style={styles.btnEditar} onPress={() => onEdit(item)}>
                        <Text style={styles.btnTexto}>EDITAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnEliminar} onPress={() => onDelete(item.id)}>
                        <Text style={styles.btnTexto}>ELIMINAR</Text>

                        
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 5,
    },
    paciente: {
        backgroundColor: '#73B6EE',
        borderRadius: 3,
        padding: 3,
        marginBottom: 3,
    },
      label: {
        fontWeight: 'bold',
        marginBottom: 0,
    },
    valor: {
        marginBottom: 0,
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    btnEditar: {
        backgroundColor: '#A8ED92',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    btnEliminar: {
        backgroundColor: '#EC9B90',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    btnTexto: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Paciente;
