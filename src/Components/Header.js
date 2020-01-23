import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.Header}>
            <Text style={styles.text}>
                Check Your
            </Text>
            <Text style={styles.text}>
                Privilege
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        top: 50,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Header;