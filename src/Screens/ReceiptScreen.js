import React, { useContext } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import ReceiptContext from '../Context/ReceiptContext';
import ReceiptInput from '../Components/ReceiptInput';
import NavButtons from '../Components/NavButtons';
import Header from '../Components/Header';
import Instructions from '../Components/Instructions';
import InfoIcon from '../Components/InfoIcon';

const ReceiptScreen = ({ navigation }) => {

    const { Total, Tip, changeTotal, changeTip } = useContext(ReceiptContext);


    return (
        < >
            <Header />
            <Instructions
                note='Enter Amount and Tip %'
            />
            <View style={styles.container}>
                <ReceiptInput
                    label='Amount:'
                    symbol='$'
                    holder='Amount'
                    currentState={Total}
                    action={changeTotal}
                />
                <ReceiptInput
                    label='Tip:'
                    symbol='%'
                    holder='Tip'
                    currentState={Tip}
                    action={changeTip}
                />
                <NavButtons
                    screen='Receipt'
                    next='People'
                />
            </View>
            <InfoIcon />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        bottom: 30
    },
    Input: {
        top: 8,
        width: 125,
        marginRight: 20,
    },
    Label: {
        fontSize: 20,
        marginLeft: 20,
        alignSelf: 'flex-end',
    },
    Dolla: {
        width: 200,
        alignSelf: 'flex-end',
        textAlign: 'right',
        fontSize: 20,
    },
    Money: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    Row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        marginTop: 20
    }
})

export default ReceiptScreen;