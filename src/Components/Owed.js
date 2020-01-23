import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ReceiptContext from '../Context/ReceiptContext';

const Owed = ({ WomenOwe, MenOwe, Ethnicity }) => {

    return (
        <>
            <Text style={styles.label}>
                {Ethnicity}
            </Text>

            {WomenOwe > 0 ?
                <View style={styles.row}>
                    <FontAwesome
                        name='female'
                        style={styles.female}
                    />
                    {WomenOwe > 0 ? <Text style={styles.text}>${WomenOwe}</Text> : <Text style={styles.text}>$0</Text>}
                </View>
                :
                null
            }

            {MenOwe > 0 ?
                <View style={styles.row}>
                    <FontAwesome
                        name='male'
                        style={styles.male}
                    />
                    {MenOwe > 0 ? <Text style={styles.text}>${MenOwe}</Text> : <Text style={styles.text}>$0</Text>}
                </View>
                :
                null
            }
        </>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    male: {
        color: '#89cff0',
        fontSize: 150,
        margin: 20,
        marginLeft: 100
    },
    female: {
        color: '#f4c2c2',
        fontSize: 150,
        margin: 20,
        marginLeft: 80
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 100
    },
    label: {
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },
})

export default Owed;