import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Actioncard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in React Native 0.64
                    </Text>
                </View>
                <Image source={{ uri: 'https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png' }} style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        React Native 0.64 was released on March 2021. This release brings a lot of new features and improvements. Some of the notable features are:
                        Hermes improvements to React Native apps in terms of three metrics: Time To Interactive (TTI), Application Size (APK), Memory consumption. The “magic” behind Hermes - “Bytecode Precompilation” a.k.a. AOT. The difference between AOT and JIT. JIT JS engine pipeline vs Hermes pipeline.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/blog/2021/03/12/version-0.64')}>
                        <Text style={styles.footerLink}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'black'

    },
    card: {
        width: 400,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },

    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',

    },
    cardImage: {
        height: 200,
        width: '100%',
    },
    bodyContainer: {
        padding: 10,

    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    footerLink: {
        fontSize: 16,
        color: 'black',
        backgroundColor: '#F2C94C',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,

    }
})