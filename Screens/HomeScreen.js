//NOTE - Imported libs from react
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//NOTE - Main body component for the home screen
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title='Go to Details'
                onPress={() => navigation.navigate('Details', { user: 'Guest' })}
            />
        </View>
    );
}

//NOTE - Main styles ref
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
});