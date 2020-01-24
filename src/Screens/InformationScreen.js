import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../Components/Header';
import Instructions from '../Components/Instructions';

const InformationScreen = ({ navigation }) => {
    return (
        <>
            <Header />
            <Instructions
                note='How this app works'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Receipt')}
            >
                <FontAwesome
                    name='arrow-left'
                    style={styles.icon}
                />
            </TouchableOpacity>

            <ScrollView>


                <Text style={styles.header}>
                    App Info:
                </Text>

                <Text style={styles.text}>
                    This app allows users to "even" the playing field, by splitting the bill based on privilege, not simply splitting evenly.
                </Text>

                <Text style={styles.header}>
                    How to Use 'Check Your Privilege':
                </Text>

                <Text style={styles.text}>
                    To Start: enter how much the bill was, then enter the tip percent and select next.
                </Text>

                <Text style={styles.text}>
                    Next: fill out the demographics. Click the + or - button to get the right amount of males or females. If you would like to know what you owe with the race gap included, simply click the advanced demographics button. Once you're in the advanced demographic section, select the amount of males and females beneath each race identifier. You do NOT have to fill out the original demographic page, if you intend on using the advanced demographic. Once you have your demographics filled out select next.
                </Text>

                <Text style={styles.text}>
                    The final page will split the bill "evenly" based on the patrons "privilege". If you would like to adjust your information, select the back button and change your information. If you would like to split another bill, simply hit the reset button.
                </Text>

                <Text style={styles.header}>
                    Data Used:
                </Text>

                <Text style={styles.text}>
                    White Male: $1 {"\n"}
                    White Female: 80¢ {"\n"}
                    Black or African American Male: 87¢{"\n"}
                    Black or African American Female: 74¢{"\n"}
                    Hispanic Male: 91¢{"\n"}
                    Hispanic Female: 74¢{"\n"}
                    Asian Male: $1.15{"\n"}
                    Asian Female: 93¢{"\n"}
                    American Indian and Alaska Native Male: .91¢{"\n"}
                    American Indian and Alaska Native Female: 74¢{"\n"}
                    Native Hawaiian and other Pacific Islanders Male: .95¢{"\n"}
                    Native Hawaiian and other Pacific Islanders Female: 79¢{"\n"}
                </Text>

                <Text style={styles.header}>
                    Explanation:
                </Text>

                <Text style={styles.text}>
                    Using the Uncontrolled data from PayScale.com the app will calculate how much you owe, based on a percentage of what your demographic gets paid compared to a White Male. This app uses the most recent data available (from 2019). If you check on our research (let us know if we're totally wrong, and we'll be happy to change our app, if you're correct), you'll find that PayScale offers both a "Controlled" and "Uncontrolled" data. On average women make 79¢ for every dollar a white male makes using the uncontrolled data, and 98¢ per dollar using the controlled data. The Uncontrolled data simply uses the median salary for all men and women, while the Controlled data measures median salary for men and women with the same jobs and qualifications.
                </Text>

                <Text style={styles.text}>
                    If you use the Controlled data, the difference between men and women (2¢), doesn't seem so bad. It does fail to take into account the Opportunity Gap, which essentially stateas that women tend to work in lower-level, lower-paid positions. The study by PayScale, suggests that there are barriers that prohibit women from attaining higher-level and higher-paid positions. Due to the Opportunity Gap, we decided to use the Uncontrolled data for this app.
                </Text>

                <Text style={styles.text}>
                    If you would like more information about this please visit PayScales report at: https://www.payscale.com/data/gender-pay-gap and https://www.payscale.com/data/racial-wage-gap-for-men
                </Text>

                <Text style={styles.text} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 40,
    },
    button: {
        position: 'absolute',
        top: 30,
        left: 15
    },
    text: {
        margin: 10,
    },
    header: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default withNavigation(InformationScreen);