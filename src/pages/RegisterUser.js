import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export default function RegisterMarket({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Registro de Usuário</Text>
            </View>
            <View style={styles.scrollviewContainer}>
                <ScrollView style={styles.scrollable} showsHorizontalScrollIndicator={false}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome do Usuário</Text>
                        <TextInput style={[styles.input, styles.shadow]} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={[styles.input, styles.shadow]} type="email" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput style={[styles.input, styles.shadow]} secureTextEntry={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirmação da Senha</Text>
                        <TextInput style={[styles.input, styles.shadow]} secureTextEntry={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>CEP</Text>
                        <TextInput style={[styles.input, styles.shadow]} secureTextEntry={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Endereço</Text>
                        <TextInput style={[styles.input, styles.shadow]} secureTextEntry={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Número</Text>
                        <TextInput style={[styles.input, styles.shadow]} secureTextEntry={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>URL da Foto de Perfil</Text>
                        <TextInput style={[styles.input, styles.shadow]} secureTextEntry={true} />
                    </View>
                    <View style={[styles.buttonContainer, styles.shadow, styles.continueButton]}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>REGISTRAR</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollviewContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        fontWeight: 'bold',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputContainer: {
        // marginBottom: 20
    },
    label: {
        // marginBottom: 15,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 15
    },
    input: {
        backgroundColor: 'white',
        width: 300,
        height: 45,
        borderRadius: 5,
        padding: 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    buttonContainer: {
        borderRadius: 5,
        height: 50,
        marginBottom: 30,
        marginTop: 40
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold'
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    continueButton: {
        backgroundColor: '#69c09a'
    },
});
