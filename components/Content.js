import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Menu} from "./Menu";

export const Content = () => {
    const [menuVisible, setMenuVisibility] = useState(false);
    const toggleMenu = () => {
        setMenuVisibility(!menuVisible);
    }

    return (
        <View style={styles.container}>
            <Menu visible={menuVisible}/>
            <View style={styles.content}>
                <Text>Content</Text>
                <Button title="Toggle menu" onPress={toggleMenu}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});
