import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons'

export const MyBalance = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{color: 'white', fontSize: 16}}>My Balance</Text>
                <Text style={styles.valor}>$ 4,562.52</Text>
                <Text style={{color: 'white', fontSize: 16}}>Monthly profit</Text>
                <View style={styles.overview}>
                    <Text style={{color: '#7BFFB2', fontSize: 16, fontWeight: 'bold'}}>+ $ 1,262.5</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(123, 255, 178, 0.3)', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4}}>
                        <Ionicons name="caret-up-outline" size={20} color="#7BFFB2" />
                        <Text style={{color: '#7BFFB2', fontSize: 14, fontWeight: 'bold'}}>+28%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#0695FF',
        width: 350,
        height: 185,
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 25,
        elevation: 10
    },
    valor: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 15
    },
    overview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
})