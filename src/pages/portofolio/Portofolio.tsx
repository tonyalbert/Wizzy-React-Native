import { Text, View, StyleSheet } from 'react-native';

export default function Portofolio() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Desenvoldido por</Text>
            <Text style={styles.text}>Tony Albert</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161730',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})