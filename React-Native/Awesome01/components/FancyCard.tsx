import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{ uri: 'https://media.istockphoto.com/id/815480194/photo/mumbai-summer.jpg?s=2048x2048&w=is&k=20&c=ng4ihNZQE6fbVf1kAQZwFV5E9e_MVgrQeVPxrK0Zf7A=' }} style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}> Mumbai</Text>
                    <Text style={styles.cardLabel}>City of Dreams</Text>
                    <Text style={styles.cardDescription}>Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924.</Text>
                    <Text style={styles.cardFooter}>2hr Away</Text>
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
        width: '92%',
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    cardImage: {
        width: '100%',
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: 'black',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,

    },
    cardFooter: {
        color: 'black',
    }

})