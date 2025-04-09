import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

export default function UserDetail() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>User ID: {id}</Text>
        </View>
    );
}