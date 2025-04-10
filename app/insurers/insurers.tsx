import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

interface Insurer {
    id: string;
    name: string;
    isRegistered: boolean;
}

const insurers: Insurer[] = [
    { id: '1', name: 'Insurer A', isRegistered: true },
    { id: '2', name: 'Insurer B', isRegistered: false },
    { id: '3', name: 'Insurer C', isRegistered: true },
    { id: '4', name: 'Insurer D', isRegistered: false },
];

const InsurersScreen: React.FC = () => {
    const renderInsurer = ({ item }: { item: Insurer }) => (
        <View style={styles.insurerItem}>
            <Text style={styles.insurerName}>{item.name}</Text>
            <Text style={item.isRegistered ? styles.registered : styles.notRegistered}>
                {item.isRegistered ? 'Registered' : 'Not Registered'}
            </Text>
            {!item.isRegistered && (
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Available Insurers</Text>
            <FlatList
                data={insurers}
                keyExtractor={(item) => item.id}
                renderItem={renderInsurer}
                contentContainerStyle={styles.list}
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    list: {
        paddingBottom: 16,
    },
    insurerItem: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    insurerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    registered: {
        color: 'green',
        marginTop: 8,
    },
    notRegistered: {
        color: 'red',
        marginTop: 8,
    },
    registerButton: {
        marginTop: 12,
        backgroundColor: '#007bff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    registerButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default InsurersScreen;