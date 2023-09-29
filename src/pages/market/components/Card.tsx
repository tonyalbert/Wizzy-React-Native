import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Bitcoin from '../../../../assets/home/bitcoin.png';
import { Ionicons } from '@expo/vector-icons'

export const Card = ({ data }) => {
    return (
            <TouchableOpacity style={styles.card}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{width: 24, height: 24}} source={{ uri: data.logoUrl}}/>
                    <View style={{flexDirection: 'column', marginLeft: 8}}>
                        <Text style={styles.coin}>{data.coin}</Text>
                        <Text style={styles.subtitle}>{data.subtitle}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.valor}>{data.valor}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Ionicons name="caret-up-outline" size={12} color="#7BFFB2" />
                        <Text style={{color: '#7BFFB2', fontSize: 10}}>+28%</Text>
                    </View>
                </View>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#212246',
        borderRadius: 10,
        width: '100%',
        height: 67,
        padding: 20,
        marginBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    coin: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#838C9E',
        fontSize: 10
    },
    valor: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})