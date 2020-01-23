import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ReceiptContext from '../Context/ReceiptContext';

const Demographics = ({ minus, icon, id, plus, text, body }) => {
    const { Male, Female, changePeople } = useContext(ReceiptContext);

    return (
        <>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => changePeople(minus)}
                    style={styles.button}
                >
                    <FontAwesome
                        name='minus'
                        style={text}
                    />
                </TouchableOpacity>
                <FontAwesome
                    name={icon}
                    style={body}
                />
                <Text style={styles.Count}>
                    {id}
                </Text>
                <TouchableOpacity
                    onPress={() => changePeople(plus)}
                    style={styles.button}
                >
                    <FontAwesome
                        name='plus'
                        style={text}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        alignSelf: 'center'
    },
    femaleText: {
        color: '#f4c2c2',
        fontSize: 80,
        margin: 20,
    },
    female: {
        color: '#f4c2c2',
        fontSize: 200,
        margin: 20,
    },
    Count: {
        position: 'absolute',
        top: 100,
        fontSize: 30
    },
    male: {
        color: '#89cff0',
        fontSize: 200,
        margin: 20
    },
    maleText: {
        color: '#89cff0',
        fontSize: 80,
        margin: 20,
    }
})

export default Demographics;