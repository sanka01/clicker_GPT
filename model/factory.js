
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

const factoryImage = require('../assets/factory.png')

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    factoryContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: '#f2f2f2',
    },
    coinsText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    clickValueText: {
        fontSize: 16,
        marginTop: 10,
    },
    autoClicksText: {
        fontSize: 16,
        marginTop: 10,
    },
    upgradeButton: {
        alignItems: 'center',
        backgroundColor: '#ff9f43',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    upgradeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

const Factory = () => {
    const [coins, setCoins] = React.useState(0);
    const [clickValue, setClickValue] = React.useState(1);
    const [autoClicks, setAutoClicks] = React.useState(0);

    const addCoins = (value) => {
        setCoins(coins + value);
    };

    const handleClick = () => {
        addCoins(clickValue);
    };

    const buyUpgrade = (upgradeType) => {
        if (upgradeType === 'click') {
            if (coins >= 10) {
                setClickValue(clickValue + 1);
                setCoins(coins - 10);
            }
        } else if (upgradeType === 'auto') {
            if (coins >= 50) {
                setAutoClicks(autoClicks + 1);
                setCoins(coins - 50);
            }
        }
    };
    React.useEffect(() => {
        if (autoClicks > 0) {
          const autoClick = () => {
            setCoins(coins => coins + autoClicks);
            setTimeout(autoClick, 1000);
          };
          autoClick();
        }
      }, [autoClicks]);
      
      
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.factoryContainer} onPress={handleClick}>
                <Image source={factoryImage} style={{ height: 100, width: 100 }} />
            </TouchableOpacity>
            <Text style={styles.coinsText}>Coins: {coins}</Text>
            <Text style={styles.clickValueText}>Click Value: {clickValue}</Text>
            <Text style={styles.autoClicksText}>Auto Clicks: {autoClicks}</Text>
            <TouchableOpacity style={styles.upgradeButton} onPress={() => buyUpgrade('click')}>
                <Text>Upgrade Click</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upgradeButton} onPress={() => buyUpgrade('auto')}>
                <Text>Upgrade Auto Click</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Factory;