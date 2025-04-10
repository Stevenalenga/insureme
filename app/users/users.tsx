import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const UsersPage: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Welcome to the Users Page</Text>
            <Text style={styles.description}>
                Here you can register with insurers, view various insurance products, and track how they are performing in the market. You can also complete KYC registration for different insurers.
            </Text>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Insurance Products</Text>
                <Text>Explore a variety of insurance products tailored to your needs.</Text>
                <Button title="View Products" onPress={() => {}} />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Register with Insurers</Text>
                <Text>Sign up with insurers to access their services and offers.</Text>
                <Button title="Register Now" onPress={() => {}} />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>KYC Registration</Text>
                <Text>Complete your KYC to unlock full access to insurer services.</Text>
                <Button title="Complete KYC" onPress={() => {}} />
            </View>
        </ScrollView>
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
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
        color: '#555',
    },
    section: {
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default UsersPage;