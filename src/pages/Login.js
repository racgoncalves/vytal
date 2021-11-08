import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Warning from '../components/Warning';
import { getUser } from '../api/getUser';


export default function Login({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [warning, setWarning] = useState(undefined);

    async function handleLogin() {
        if (email && password) {
            const [getUserResponse, getUserContent] = await getUser(email, password);


        } else {
            setWarning('Informe login e senha antes de continuar!');

        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('/Users/victorparisi/Desktop/vytal/public/images/logo.png')} style={styles.logo} />
            <View style={styles.loginInputsContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail de Acesso</Text>
                    <TextInput style={[styles.input, styles.shadow]} onChangeText={(text) => setEmail(text)} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={[styles.input, styles.shadow]} secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                </View>
                {
                    warning != undefined
                        ?
                        <Warning warning={warning} setWarning={setWarning} />
                        :
                        null
                }
                <View style={[styles.buttonContainer, styles.shadow, styles.continueButton]}>
                    <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                        <Text style={styles.buttonText}>CONTINUAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttonContainer, styles.shadow, styles.google]}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CONTINUAR COM GMAIL</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.noAccount}>
                    <TouchableOpacity onPress={() => navigation.navigate('ChooseAccountType')}>
                        <Text style={styles.noAccountText}>Não tem conta? Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    logo: {
        width: 350,
        resizeMode: 'contain',
    },
    loginInputsContainer: {
        marginBottom: 10,
    },
    inputContainer: {
        marginBottom: 30
    },
    label: {
        marginBottom: 15,
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
        marginBottom: 30
    },
    continueButton: {
        backgroundColor: '#69c09a'
    },
    google: {
        backgroundColor: '#e23e2f'
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
    noAccount: {
        alignItems: "center",
    },
    noAccountText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});
