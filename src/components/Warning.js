import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Warning(props) {
    if ('setWarning' in props && 'warning' in props) {
        setTimeout(() => {
            props.setWarning(undefined);
            
        }, 5000);

    } 


    return(
        <View style={styles.warningContainer}>
            <Text style={styles.warningText}>{props.warning}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    warningContainer: {
        marginTop: 5,
        marginBottom: 25
    },
    warningText: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold'
    }
});