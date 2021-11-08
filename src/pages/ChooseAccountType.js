import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ChooseAccountType({ navigation }) {
    Icon.loadFont();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainTextContainer}>
                <Text styles={styles.title}>Qual será o seu tipo de conta?</Text>
            </View>
            <TouchableOpacity style={[styles.card, styles.shadow]} onPress={() => navigation.navigate('RegisterMarket')}>
                <Icon name="shopping-cart" size={100} color="#999" />
                <Text>Mercado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, styles.shadow]} onPress={() => navigation.navigate('RegisterUser')}>
                <Icon name="user" size={100} color="#999" />
                <Text>Pessoa</Text>
            </TouchableOpacity>
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
    mainTextContainer: {
        marginTop: 30,
        marginBottom: 30,
    },
    title: {
        color: 'red'
    },
    card: {
        backgroundColor: 'white',
        width: 300,
        height: 200,
        marginBottom: 50,
        borderRadius: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
});
