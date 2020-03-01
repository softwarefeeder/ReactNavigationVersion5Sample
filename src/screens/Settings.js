import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';


function Settings(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>App Settings</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.popToTop()}>
                <Text style={styles.buttonText}>Go to Home Page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Settings