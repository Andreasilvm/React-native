import React, { useState } from "react";
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput } from "react-native/types";

const Formulario = ({ ModalVisible }) => {

    const [paciente, setPaciente] = useState('')
    return (
        <Modal>
            animationType= 'slide'
            visible = {ModalVisible}

            <SafeAreaView>
                <ScrollView>
                    <Text>Nueva Cita</Text>
                    <View>
                        <Text style={StyleSheet.label}>

                            Nombre por paciente </Text>

                        <TextImput
                            styles={Styles.imput}
                            placeholder='Nombre del paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                            multilinea={true}>
                        </TextImput>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal >// ventana
    )
}
const styles = StyleSheet.create({

 label:{
     color:'#FFF',
     marginBottom:'10',
     marginTop:'15',
     fontFont:'20',
     fontWeight:'500'
},
imput:{
    backgroundColor:'#FFF',
    padding:'15',
    borderRadius:'10'
}

});

export default Formulario;