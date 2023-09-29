import { Text, View, Image, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const PortifolioValie = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Portofolio Value</Text>
            <Text style={styles.valor}>$ 4,562.52</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(123, 255, 178, 0.3)', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4}}>
                <Ionicons name="caret-up-outline" size={20} color="#7BFFB2" />
                <Text style={{color: '#7BFFB2', fontSize: 14, fontWeight: 'bold'}}>+28%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    valor: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 15
    },
    graph: {
        width: '100%',
        height: 116
    }
})