import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import ReceiptContext from '../Context/ReceiptContext';


const ReceiptInput = ({ navigation, label, symbol, holder, currentState, action }) => {

    return (
        <View style={styles.Row}>
            <Text style={styles.Label}>
                {label}
            </Text>

            <View style={symbol === '$' ? styles.Money : styles.Percentage}>

                <Text style={styles.Dolla}>
                    {symbol === '$' ? symbol : null}
                </Text>

                <View style={styles.Input}>
                    <Input
                        placeholder={holder}
                        Value={currentState}
                        onChangeText={(text) => action(text)}
                        keyboardType='decimal-pad'
                        returnKeyType='done'
                        keyboardAppearance='dark'
                        inputStyle={{fontSize: 40, textAlign: 'right'}}
                    />

                </View>
                <Text style={styles.Dolla}>
                    {symbol === '%' ? symbol : null}
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    Input: {
        top: 8,
        width: 160,
    },
    Label: {
        fontSize: 40,
        marginLeft: 20,
        alignSelf: 'flex-end',
        marginVertical: 10
    },
    Dolla: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontSize: 40,
        marginVertical: 10
    },
    Money: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        right: 30
    },
    Percentage: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        right: 13
    },
    Row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ReceiptInput;