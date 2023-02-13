
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
    const [clickUpgradePrice, setClickUpgradePrice] = React.useState(10);
    const [autoClickUpgradePrice, setAutoClickUpgradePrice] = React.useState(100);
    const [clickUpgrades, setClickUpgrades] = React.useState(0);
    const [autoClickUpgrades, setAutoClickUpgrades] = React.useState(0);

    const calculateUpgradePrice = (basePrice, upgrades) => basePrice * (1.1 ** upgrades);

    const upgradeClick = () => {
        if (coins >= clickUpgradePrice) {
            setCoins(coins - clickUpgradePrice);
            setClickUpgrades(clickUpgrades + 1);
            setClickValue(clickValue + 1);
            setClickUpgradePrice(calculateUpgradePrice(10, clickUpgrades + 1));
        }
    };

    const upgradeAutoClick = () => {
        if (coins >= autoClickUpgradePrice) {
            setCoins(coins - autoClickUpgradePrice);
            setAutoClickUpgrades(autoClickUpgrades + 1);
            setAutoClicks(autoClicks + 1);
            setAutoClickUpgradePrice(calculateUpgradePrice(100, autoClickUpgrades + 1));
        }
    };

    const addCoins = (value) => {
        setCoins(coins + value);
    };

    const handleClick = () => {
        addCoins(clickValue);
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
            <Text style={styles.coinsText}>Coins: {coins.toFixed(0)}</Text>
            <Text style={styles.clickValueText}>Click Value: {clickValue}</Text>
            <Text style={styles.autoClicksText}>Auto Clicks: {autoClicks}</Text>

            <TouchableOpacity style={styles.upgradeButton} onPress={() => upgradeClick()}>
                <Text>Upgrade Click: {clickUpgradePrice.toFixed(0)} coins</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upgradeButton} onPress={() => upgradeAutoClick()}>
                <Text>Upgrade Auto Click: {autoClickUpgradePrice.toFixed(0)} coins </Text>
            </TouchableOpacity>
        </View>
    );
};


export default Factory;