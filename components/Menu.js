import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, View, Text} from 'react-native';

export const Menu = ({ visible }) => {
    const FadeInView = ({ style, startValue, endValue, children }) => {
        const fadeAnim = useRef(new Animated.Value(startValue)).current

        useEffect(() => {
            Animated.timing(
                fadeAnim,
                {
                    toValue: endValue,
                    duration: 500,
                    useNativeDriver: false
                }
            ).start();
        }, [fadeAnim])

        console.log(fadeAnim)
        return (
            <Animated.View
                style={{
                    ...style,
                    left: fadeAnim,
                }}
            >
                {children}
            </Animated.View>
        );
    }

    return (
        <FadeInView
            style={styles.menu}
            startValue={visible ? -300 : 0}
            endValue={visible ? 0 : -300}
        >
            <Text>Menu</Text>
        </FadeInView>
    );
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .7,
        borderRightWidth: 1
    },
});
