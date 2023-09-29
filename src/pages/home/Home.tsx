import { ScrollView, StyleSheet } from 'react-native';
import { Topo } from './components/Topo';
import { MyBalance } from './components/MyBalance';
import { ActionsCards } from './components/ActionsCards';
import { MyPortifolio} from './components/MyPortifolio';
import { News } from './components/News';

export default function Home() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Topo />
            <MyBalance />
            <ActionsCards />
            <MyPortifolio />
            <News />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161730',
        paddingBottom: 20
    }
})
