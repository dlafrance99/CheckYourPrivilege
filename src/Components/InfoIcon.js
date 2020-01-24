import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

const InfoIcon = ({ navigation }) => {
    
    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('Info')}
            >
                <FontAwesome
                    name='info-circle'
                    style={styles.icon}
                />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 40,
        position: 'absolute',
        bottom: 30,
        left: 30
    }
})

export default withNavigation(InfoIcon);