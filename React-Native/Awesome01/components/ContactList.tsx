import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'John Doe',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg',
        },
        {
            uid: 2,
            name: 'Hemant Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg',
        },
        {
            uid: 3,
            name: 'Bharat Pandey',
            status: 'Making your GPay smooth',
            imageUrl: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg',
        },
        {
            uid: 4,
            name: 'Brijesh Raj',
            status: 'Building secure Digital banks',
            imageUrl: 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
    container: {
        paddingHorizontal: 16,
        marginBottom: 4

    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})