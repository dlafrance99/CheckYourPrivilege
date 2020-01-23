import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import ReceiptContext from '../Context/ReceiptContext';

const NavButtons = ({ navigation, screen, next, back }) => {
    const { reset } = useContext(ReceiptContext);

    const restart = () => {
        reset()
        navigation.navigate('Receipt')
    }

    return (
        <View style={styles.ButtRow}>
            {screen !== 'Receipt' ?
                <View style={styles.button}>
                    <Button
                        title='back'
                        type='solid'
                        onPress={() => navigation.navigate(back)}
                        buttonStyle={{ height: 50 }}
                        titleStyle={{ fontSize: 25 }}
                    />
                </View>
                :
                null
            }

            {screen !== 'Split' ?
                <View style={styles.button}>
                    <Button
                        title='next'
                        type='solid'
                        onPress={() => navigation.navigate(next)}
                        buttonStyle={{ height: 50 }}
                        titleStyle={{ fontSize: 25 }}
                    />
                </View>
                :
                null
            }

            {screen === 'Split' ?
                <View style={styles.button}>
                    <Button
                        title='Restart'
                        type='solid'
                        onPress={() => restart()}
                        buttonStyle={{ height: 50 }}
                        titleStyle={{ fontSize: 25 }}
                    />
                </View>
                :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    ButtRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginTop: 60,
        marginHorizontal: 10,
        width: 150
    }
})

export default withNavigation(NavButtons);