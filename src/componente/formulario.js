import React from "react";
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native/types";

const Formulario = (ModalVisible) => {
    return (
        <Modal>
            animationType= 'slide'
            visible = {ModalVisible}
            <SafeAreaView>
                <ScrollView>
                    <Text>Nueva Cita</Text>
                    <View>
                        <Text style={StyleSheet.label}>Nombre</Text>
                        <TextImput style={Styles.imput}></TextImput> // preguntar por el imp
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>// ventana
    )
}
const styles = StyleSheet.create({
    label{
    color: '#FFF',
    marginBotton: 10,
    marginTop: 20,
    fontweight: '500'
},

    input: {
    backgroundColor: '#FFF',
    pedding: 15,


}
)

export default Formulario