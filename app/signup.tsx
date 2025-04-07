import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

const Signup = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });
    const router = useRouter();

    const handleInputChange = (field: string, value: string) => {
        setForm({ ...form, [field]: value });
        setErrors({ ...errors, [field]: '' }); // Clear error on input change
    };

    const validateForm = () => {
        const newErrors: any = {};
        if (!form.name) newErrors.name = 'Name is required';
        if (!form.email) newErrors.email = 'Email is required';
        if (!form.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSignup = () => {
        if (!validateForm()) return;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            Alert.alert('Success', `Welcome, ${form.name}!`);
            router.push('/'); // Navigate to home or login page
        }, 2000); // Simulate API call
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an Account</Text>
            <TextInput
                style={[styles.input, errors.name && styles.inputError]}
                placeholder="Full Name"
                value={form.name}
                onChangeText={(text) => handleInputChange('name', text)}
            />
            {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
            <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="Email"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(text) => handleInputChange('email', text)}
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
            <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Password"
                secureTextEntry
                value={form.password}
                onChangeText={(text) => handleInputChange('password', text)}
            />
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Sign Up</Text>}
            </TouchableOpacity>
            <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text style={styles.link} onPress={() => router.push('/')}>
                    Log In
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    inputError: {
        borderColor: '#ff4d4d',
    },
    errorText: {
        color: '#ff4d4d',
        fontSize: 12,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerText: {
        marginTop: 20,
        color: '#666',
    },
    link: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
});

export default Signup;