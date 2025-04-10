import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSearchParams } from 'expo-router';

const ProductDetails = () => {
    const { id } = useSearchParams(); // Access the dynamic id from the route

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product Details</Text>
            <Text style={styles.text}>Product ID: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default ProductDetails;