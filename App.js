import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Content} from "./components/Content";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="orange" barStyle="light-content"/>
            <Content/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
