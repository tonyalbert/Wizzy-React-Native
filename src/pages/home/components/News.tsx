import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import NewsImage from '../../../../assets/home/news.png';

export const News = () => {
    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>News</Text>

            <TouchableOpacity style={styles.news}>
                <Image style={styles.image} width={128} height={75} source={NewsImage} />
                <Text style={styles.titleNews}>Global CoinMarketCap Conference!</Text>
            </TouchableOpacity >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161730',
        marginTop: 20,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    title: {
        color: 'white',     
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    news: {
      flexDirection: 'row',  
    },
    image: {
      borderRadius: 10,  
    },
    titleNews: {
        color: 'white',
        marginLeft: 10,
    }
})