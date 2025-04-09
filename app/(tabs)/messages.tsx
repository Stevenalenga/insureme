import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const messages = [
    { id: '1', sender: 'John Doe', message: 'Hello! How are you?' },
    { id: '2', sender: 'Jane Smith', message: 'Don’t forget our meeting tomorrow.' },
    { id: '3', sender: 'Mike Johnson', message: 'Can you send me the report?' },
];

const MessagesScreen = () => {
    const renderMessage = ({ item }: { item: { id: string; sender: string; message: string } }) => (
        <View style={styles.messageContainer}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text style={styles.message}>{item.message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Messages</Text>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={renderMessage}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    list: {
        paddingBottom: 16,
    },
    messageContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    sender: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        color: '#555',
    },
});

export default MessagesScreen;