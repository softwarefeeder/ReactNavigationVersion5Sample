import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, BackHandler, Alert } from 'react-native'
import styles from './styles';

const detailProps = {
  detailName: 'Software Feeder',
}

function Home(props) {
  const { navigation } = props
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () =>
        true
      )

  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('UserDetail', { item: detailProps })}>
        <Text style={styles.text}>Home Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home