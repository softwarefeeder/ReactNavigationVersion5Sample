import { Alert, BackHandler } from 'react-native';

const onBackPress = () => {
    Alert.alert(
        'Confirm exit',
        'Do you want to close the app?'
        [
        { text: 'CANCEL', style: 'cancel' },
        { text: 'OK', onPress: () => BackHandler.exitApp() }
        ]
    );
};
export { onBackPress };