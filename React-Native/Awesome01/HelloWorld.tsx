import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    useColorScheme
} from 'react-native';

function HelloWorld(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
            <Text style={styles.headingText}>Hello World</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'black'

    },
});

export default HelloWorld;