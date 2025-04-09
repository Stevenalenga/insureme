import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Profile = () => {
    // Mock data for the agent
    const agentDetails = {
        name: 'John Doe',
        code: 'AGT12345',
        email: 'johndoe@example.com',
        totalSales: 120,
        insuranceTypes: [
            { type: 'Medical', count: 50 },
            { type: 'Motor', count: 40 },
            { type: 'Real Estate', count: 30 },
        ],
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Agent Profile</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{agentDetails.name}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Code:</Text>
                <Text style={styles.value}>{agentDetails.code}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{agentDetails.email}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Total Insurances Sold:</Text>
                <Text style={styles.value}>{agentDetails.totalSales}</Text>
            </View>
            <Text style={styles.subHeader}>Insurance Types Sold:</Text>
            {agentDetails.insuranceTypes.map((insurance, index) => (
                <View key={index} style={styles.insuranceContainer}>
                    <Text style={styles.insuranceType}>{insurance.type}:</Text>
                    <Text style={styles.insuranceCount}>{insurance.count}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
    },
    value: {
        fontSize: 16,
    },
    insuranceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    insuranceType: {
        fontSize: 16,
        fontWeight: '600',
    },
    insuranceCount: {
        fontSize: 16,
    },
});

export default Profile;