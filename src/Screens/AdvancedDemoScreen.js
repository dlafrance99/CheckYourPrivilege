import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavButtons from '../Components/NavButtons';
import Demographics from '../Components/Demographics';
import ReceiptContext from '../Context/ReceiptContext';
import Header from '../Components/Header';
import Instructions from '../Components/Instructions';


const AdvancedDemoScreen = () => {
    const { WhiteMale, WhiteFemale, BlackMale, BlackFemale, HispanicMale, HispanicFemale, AsianMale, AsianFemale, IndigenousMale, IndigenousFemale, HawaiianMale, HawaiianFemale } = useContext(ReceiptContext);

    return (
        <ScrollView style={styles.scroll}>
            <Header />
            <Instructions
                note='Set Your Demographic'
            />
            <View style={styles.container}>
                <Text style={styles.label}>
                    White
                </Text>

                <Demographics
                    minus='minusWhiteFemale'
                    icon='female'
                    id={WhiteFemale}
                    plus='plusWhiteFemale'
                    text={styles.femaleText}
                    body={styles.female}
                />
                <Demographics
                    minus='minusWhiteMale'
                    icon='male'
                    id={WhiteMale}
                    plus='plusWhiteMale'
                    text={styles.maleText}
                    body={styles.male}
                />

            </View>

            <View style={styles.container}>
                <Text style={styles.label}>
                    Black or African American
                </Text>
                <Demographics
                    minus='minusBlackFemale'
                    icon='female'
                    id={BlackFemale}
                    plus='plusBlackFemale'
                    text={styles.femaleText}
                    body={styles.female}
                />
                <Demographics
                    minus='minusBlackMale'
                    icon='male'
                    id={BlackMale}
                    plus='plusBlackMale'
                    text={styles.maleText}
                    body={styles.male}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>
                    Hispanic
                </Text>
                <Demographics
                    minus='minusHispanicFemale'
                    icon='female'
                    id={HispanicFemale}
                    plus='plusHispanicFemale'
                    text={styles.femaleText}
                    body={styles.female}
                />
                <Demographics
                    minus='minusHispanicMale'
                    icon='male'
                    id={HispanicMale}
                    plus='plusHispanicMale'
                    text={styles.maleText}
                    body={styles.male}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>
                    Asian
                </Text>
                <Demographics
                    minus='minusAsianFemale'
                    icon='female'
                    id={AsianFemale}
                    plus='plusAsianFemale'
                    text={styles.femaleText}
                    body={styles.female}
                />
                <Demographics
                    minus='minusAsianMale'
                    icon='male'
                    id={AsianMale}
                    plus='plusAsianMale'
                    text={styles.maleText}
                    body={styles.male}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>
                    American Indian and Alaska Native
                </Text>
                <Demographics
                    minus='minusIndigenousFemale'
                    icon='female'
                    id={IndigenousFemale}
                    plus='plusIndigenousFemale'
                    text={styles.femaleText}
                    body={styles.female}
                />
                <Demographics
                    minus='minusIndigenousMale'
                    icon='male'
                    id={IndigenousMale}
                    plus='plusIndigenousMale'
                    text={styles.maleText}
                    body={styles.male}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.label}>
                    Native Hawaiian and other Pacific Islanders
                </Text>
                <Demographics
                    minus='minusHawaiianFemale'
                    icon='female'
                    id={HawaiianFemale}
                    plus='plusHawaiianFemale'
                    text={styles.femaleText}
                    body={styles.female}
                />
                <Demographics
                    minus='minusHawaiianMale'
                    icon='male'
                    id={HawaiianMale}
                    plus='plusHawaiianMale'
                    text={styles.maleText}
                    body={styles.male}
                />
            </View>

            <NavButtons
                screen='Advanced'
                next='Split'
                back='People'
            />
            <View
                style={{ height: 50 }}
            />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,

    },
    container: {
        justifyContent: 'center',
        bottom: -60,
        marginVertical: 10
    },
    label: {
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 10,
        fontWeight: 'bold'
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
    }
})

export default AdvancedDemoScreen;