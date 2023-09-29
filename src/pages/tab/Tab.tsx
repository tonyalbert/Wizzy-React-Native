import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Image } from 'react-native';

import Home from '../home/Home';
import Market from '../market/Market';
import Wallet from '../wallet/Wallet';
import Portofolio from '../portofolio/Portofolio';

import HomeIcon from '../../../assets/tabIcons/home.png';
import HomeIconActive from '../../../assets/tabIcons/homeActive.png';
import MarketIcon from '../../../assets/tabIcons/market.png';
import MarketIconActive from '../../../assets/tabIcons/marketActive.png';
import WalletIcon from '../../../assets/tabIcons/Wallet.png';
import WalletIconActive from '../../../assets/tabIcons/WalletActive.png';

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={() => ({
            tabBarStyle: styles.tab,
            headerShown: false,
            tabBarLabelStyle: {
                margin: 0,
                fontSize: 13,
                paddingBottom: 15,
                color: '#5A7E9A',
            },
            tabBarLabelActiveStyle: {
                color: 'white',
            },
            tabBarHideOnKeyboard: true
        })}
        >
            <Tab.Screen options={{
                tabBarIcon: ({ color, size , focused}) => {
                    if (!focused) {
                        return (
                            <Image source={HomeIcon} style={{ width: 30, height: 30 }} />
                        );
                    } else {
                        return (
                            <Image source={HomeIconActive} />
                        );
                    }
                }
            }} name="Home" component={Home} />


            <Tab.Screen options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if (!focused) {
                        return (
                            <Image source={MarketIcon} />
                        );
                    } else {
                        return (
                            <Image source={MarketIconActive} />
                        );
                    }
                }
            }} name="Market" component={Market} />

            
            <Tab.Screen options={{
                tabBarIcon: ({ color, size, focused }) => {
                    if (!focused) {
                        return (
                            <Image source={WalletIcon} />
                        );
                    } else {
                        return (
                            <Image source={WalletIconActive} />
                        );
                    }
                }
            }} name="Wallet" component={Wallet} />

        </Tab.Navigator>
    );
} 

const styles = StyleSheet.create({
    tab: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#161730',
        height: 80,
        justifyContent: 'center',
        itemsAlign: 'center',
        borderColor: 'rgba(255, 255, 255, 0.1)',    
        borderTopWidth: 1
    }
})
