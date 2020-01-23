import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import ReceiptContext from '../Context/ReceiptContext';
import Header from '../Components/Header';
import Instructions from '../Components/Instructions';
import Demographics from '../Components/Demographics';
import NavButtons from '../Components/NavButtons';

const PeopleScreen = ({ navigation }) => {

    const { Male, Female } = useContext(ReceiptContext);


    return (
        <>
            <Header />
            <Instructions
                note='Set Your Demographic'
            />
            <View style={styles.container}>
                <Demographics
                    minus='minusFemale'
                    icon='female'
                    id={Female}
                    plus='plusFemale'
                    text={styles.femaleText}
                    body={styles.female}
                />
                <Demographics
                    minus='minusMale'
                    icon='male'
                    id={Male}
                    plus='plusMale'
                    text={styles.maleText}
                    body={styles.male}
                />
            </View>
            <NavButtons
                screen='People'
                next='Split'
                back='Receipt'
            />
            <View style={styles.button}>
                <Button
                    title='Advanced DemoGraphics'
                    type='clear'
                    onPress={() => navigation.navigate('Advanced')}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    male: {
        color: '#89cff0',
        fontSize: 200,
        margin: 20
    },
    maleText: {
        color: '#89cff0',
        fontSize: 80,
        margin: 20,
    },
    maleCount: {
        position: 'absolute',
        top: 100,
        fontSize: 30
    },
    female: {
        color: '#f4c2c2',
        fontSize: 200,
        margin: 20,
    },
    femaleText: {
        color: '#f4c2c2',
        fontSize: 80,
        margin: 20,
    },
    femaleCount: {
        position: 'absolute',
        top: 100,
        fontSize: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container: {
        justifyContent: 'center',
        bottom: -60,
    }
})

export default PeopleScreen;