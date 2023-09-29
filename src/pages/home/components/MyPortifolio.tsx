import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

import Bitcoin from '../../../../assets/home/bitcoin.png';
import Graph from '../../../../assets/home/graph.png';


export const MyPortifolio = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Portifolio</Text>
            <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>
                <View style={styles.card}>
                    <View style={styles.topoCard}>
                        <Image style={{width: 24, height: 24}} source={Bitcoin}/>
                        <View style={{flexDirection: 'column', marginLeft: 8}}>
                            <Text style={{color: '#838C9E', fontSize: 8}}>Bitcoin</Text>
                            <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>BTC/USD</Text>
                        </View>
                    </View>

                    <Image style={{marginTop: 10, marginBottom: 10}} source={Graph}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10}}>
                        <Text style={{color: 'white', fontSize: 10}}>$29,732.54</Text>
                        <Text style={{color: '#7BFFB2', fontSize: 10}}>16.38%</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.topoCard}>
                        <Image style={{width: 24, height: 24}} source={Bitcoin}/>
                        <View style={{flexDirection: 'column', marginLeft: 8}}>
                            <Text style={{color: '#838C9E', fontSize: 8}}>Bitcoin</Text>
                            <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>BTC/USD</Text>
                        </View>
                    </View>

                    <Image style={{marginTop: 10, marginBottom: 10}} source={Graph}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10}}>
                        <Text style={{color: 'white', fontSize: 10}}>$29,732.54</Text>
                        <Text style={{color: '#7BFFB2', fontSize: 10}}>16.38%</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.topoCard}>
                        <Image style={{width: 24, height: 24}} source={Bitcoin}/>
                        <View style={{flexDirection: 'column', marginLeft: 8}}>
                            <Text style={{color: '#838C9E', fontSize: 8}}>Bitcoin</Text>
                            <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>BTC/USD</Text>
                        </View>
                    </View>

                    <Image style={{marginTop: 10, marginBottom: 10}} source={Graph}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10}}>
                        <Text style={{color: 'white', fontSize: 10}}>$29,732.54</Text>
                        <Text style={{color: '#7BFFB2', fontSize: 10}}>16.38%</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.topoCard}>
                        <Image style={{width: 24, height: 24}} source={Bitcoin}/>
                        <View style={{flexDirection: 'column', marginLeft: 8}}>
                            <Text style={{color: '#838C9E', fontSize: 8}}>Bitcoin</Text>
                            <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>BTC/USD</Text>
                        </View>
                    </View>

                    <Image style={{marginTop: 10, marginBottom: 10}} source={Graph}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10}}>
                        <Text style={{color: 'white', fontSize: 10}}>$29,732.54</Text>
                        <Text style={{color: '#7BFFB2', fontSize: 10}}>16.38%</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
      color: 'white',     
      fontSize: 20,
      marginLeft: 20,
      fontWeight: 'bold',
      marginBottom: 10  
    },
    card: {
        backgroundColor: '#212246',
        width: 142,
        height: 140,
        borderRadius: 10,
        marginLeft: 20,
        alignItems: 'center',
    },
    topoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: '100%',
    }
})