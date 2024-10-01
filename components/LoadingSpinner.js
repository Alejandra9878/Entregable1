import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingSpinner = ({ color = '#6200EE' }) => {
    return (
        <View style={styles.loadingSpinner}>
            <ActivityIndicator size="large" color={color} />
        </View>
    );
};

const styles = StyleSheet.create({
    loadingSpinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingSpinner;
