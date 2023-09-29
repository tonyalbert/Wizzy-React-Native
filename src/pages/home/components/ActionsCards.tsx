import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DepositIcon from '../../../../assets/home/deposit.png';
import Withdraw from '../../../../assets/home/withdraw.png';
import Transfer from '../../../../assets/home/transfer.png';
import Exchange from '../../../../assets/home/exchange.png';


export const ActionsCards = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image style={styles.image} source={DepositIcon} />
                <Text style={styles.title}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Image style={styles.image} source={Withdraw} />
                <Text style={styles.title}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Image style={styles.image} source={Transfer} />
                <Text style={styles.title}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <Image style={styles.image} source={Exchange} />
                <Text style={styles.title}>Exchange</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    card: {
        backgroundColor: '#212246',
        width: 75,
        height: 75,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 30,
        height: 30,
    },
    title: {
        color: 'white',
        fontSize: 12,
    }
})