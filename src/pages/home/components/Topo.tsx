import { Text, View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import Notification from '../../../../assets/home/notification.png'
import { Link } from '@react-navigation/native';

export const Topo = () => {
    const createTwoButtonAlert = () =>
    Alert.alert('Notification', 'No notifications yet', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    return (
    <View style={styles.topo}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
                <Image style={styles.image} source={{ uri: 'https://f.i.uol.com.br/fotografia/2021/06/18/162403806560ccdab129dfe_1624038065_3x2_md.jpg'}}/>
            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
                <Text style={{color: 'white', fontSize: 16}}>Hi, Pericles</Text>
                <Text style={{color: '#838C9E'}}>Welcome to Wizzy</Text>
            </View>
        </View>
        <TouchableOpacity onPress={createTwoButtonAlert}>
            <Image style={{width: 35, height: 35}} source={Notification}/>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161730',
    },
    topo: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40

    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 100
    }
})