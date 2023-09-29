import { Text, View, FlatList, StyleSheet } from 'react-native';
import { PortifolioValie } from './components/PortifolioValue';
import { Card } from '../market/components/Card';
import { data as cryptoData } from "../market/moc/CoinMoc";

export default function Wallet() {

    const renderCard = ({ item }) => (
        <Card data={item} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wallet</Text>
            <PortifolioValie />

            <View style={{marginTop: 20}}>
                <FlatList 
                data={cryptoData}
                renderItem={renderCard}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161730',
        paddingHorizontal: 20
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
    },
})