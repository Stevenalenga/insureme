import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

interface Product {
    id: string;
    name: string;
    insurer: string;
    isRegistered: boolean;
}

const products: Product[] = [
    { id: '1', name: 'Health Insurance', insurer: 'Insurer A', isRegistered: true },
    { id: '2', name: 'Car Insurance', insurer: 'Insurer B', isRegistered: false },
    { id: '3', name: 'Home Insurance', insurer: 'Insurer C', isRegistered: true },
    { id: '4', name: 'Travel Insurance', insurer: 'Insurer D', isRegistered: false },
];

const ProductsScreen: React.FC = () => {
    const handleRegister = (productId: string) => {
        console.log(`Registering for product with ID: ${productId}`);
        // Add registration logic here
    };

    const renderProduct = ({ item }: { item: Product }) => (
        <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productInsurer}>Insurer: {item.insurer}</Text>
            {item.isRegistered ? (
                <Text style={styles.registeredText}>Registered</Text>
            ) : (
                <Button title="Register to Sell" onPress={() => handleRegister(item.id)} />
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Products</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderProduct}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    productCard: {
        padding: 16,
        marginBottom: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productInsurer: {
        fontSize: 14,
        color: '#555',
        marginVertical: 4,
    },
    registeredText: {
        color: 'green',
        fontWeight: 'bold',
        marginTop: 8,
    },
});

export default ProductsScreen;