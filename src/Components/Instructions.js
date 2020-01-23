import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Instructions = ({ note }) => {
    return (
        <>
            <Text style={styles.text}>
                {note}
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        fontSize: 35,
        marginTop: 50
    }
})

export default Instructions;