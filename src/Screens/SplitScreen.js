import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ReceiptContext from '../Context/ReceiptContext';
import NavButtons from '../Components/NavButtons';
import Header from '../Components/Header';
import Instructions from '../Components/Instructions';
import Owed from '../Components/Owed';

const SplitScreen = () => {

    const { Bill, split, Advanced, FemaleOwe, MaleOwe, WhiteFemaleOwe, WhiteMaleOwe, BlackFemaleOwe, BlackMaleOwe, HispanicFemaleOwe, HispanicMaleOwe, AsianFemaleOwe, AsianMaleOwe, IndigenousFemaleOwe, IndigenousMaleOwe, HawaiianFemaleOwe, HawaiianMaleOwe } = useContext(ReceiptContext);

    useEffect(() => {
        split()
    })

    const usedAdvanced = () => {
        if (Advanced) {
            return (
                <>
                    {WhiteFemaleOwe > 0 || WhiteMaleOwe > 0 ?
                        <Owed
                            WomenOwe={WhiteFemaleOwe}
                            MenOwe={WhiteMaleOwe}
                            Ethnicity='White'
                        />
                        :
                        null
                    }

                    {BlackFemaleOwe > 0 || BlackMaleOwe > 0 ?
                        <Owed
                            WomenOwe={BlackFemaleOwe}
                            MenOwe={BlackMaleOwe}
                            Ethnicity='Black or African American'
                        />
                        :
                        null
                    }

                    {HispanicFemaleOwe > 0 || HispanicMaleOwe > 0 ?
                        <Owed
                            WomenOwe={HispanicFemaleOwe}
                            MenOwe={HispanicMaleOwe}
                            Ethnicity='Hispanic'
                        />
                        :
                        null
                    }

                    {AsianFemaleOwe > 0 || AsianMaleOwe > 0 ?
                        <Owed
                            WomenOwe={AsianFemaleOwe}
                            MenOwe={AsianMaleOwe}
                            Ethnicity='Asian'
                        />
                        :
                        null
                    }

                    {IndigenousFemaleOwe > 0 || IndigenousMaleOwe > 0 ?
                        <Owed
                            WomenOwe={IndigenousFemaleOwe}
                            MenOwe={IndigenousMaleOwe}
                            Ethnicity='American Indian and Alaska Native'
                        />
                        :
                        null
                    }

                    {HawaiianFemaleOwe > 0 || HawaiianMaleOwe > 0 ?
                        <Owed
                            WomenOwe={HawaiianFemaleOwe}
                            MenOwe={HawaiianMaleOwe}
                            Ethnicity='Native Hawaiian and other Pacific Islanders'
                        />
                        :
                        null
                    }
                </>
            )
        } else {
            return (
                <View>
                    <Owed
                        WomenOwe={FemaleOwe}
                        MenOwe={MaleOwe}
                    />
                </View>
            )
        }
    }

    return (
        <>
            <Header />
            <Instructions
                note='This is what people owe'
            />
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>Total: </Text>
                    <Text style={styles.textAmount}> ${Bill}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {usedAdvanced()}
                    <NavButtons
                        screen='Split'
                        back='People'
                    />
                    <View style={styles.margin} />
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textLabel: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 90
    },
    textAmount: {
        fontSize: 40,
        fontWeight: 'bold',
        marginRight: 100
    },
    label: {
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },
    margin: {
        height: 30
    }
})

export default SplitScreen;