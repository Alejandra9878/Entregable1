import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onClick, style }) => {
    return (
        <TouchableOpacity style={[styles.card, style]} onPress={onClick}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 5,
        textAlign: 'center',
    },
    price: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: 16,
    },
});

export default ProductCard;
