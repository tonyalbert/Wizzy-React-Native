import { View, Text, StyleSheet, ScrollView, TextInput, FlatList } from "react-native";
import { Card } from "./components/Card";

import { data as cryptoData } from "./moc/CoinMoc";


export default function Market() {

    const renderCard = ({ item }) => (
        <Card data={item} />
    );

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Market</Text>
                <TextInput style={styles.input} placeholder=" Search Crypto" />
            </View>

            <View>
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
    input: {
        height: 40,
        width: '100%',
        marginVertical: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#838C9E',
        borderRadius: 10
    },

})