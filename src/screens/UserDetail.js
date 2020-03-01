import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';

function Detail(props) {
  const { route, navigation } = props
  const { item } = route.params
  const { detailName } = item
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Page</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Detail Name: {detailName}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Detail