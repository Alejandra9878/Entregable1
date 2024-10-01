import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = ({ title, style }) => {
    return (
        <View style={styles.header}>
            <Text style={[styles.headerTitle, style]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6200EE',
        padding: 20,
        alignItems: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HeaderComponent;
