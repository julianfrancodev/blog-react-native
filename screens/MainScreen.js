import * as React from 'react'

import { Image, View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';

// sample data

import { data, profile, popular } from '../data';



export default function MainScreen({ navigation }) {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerDate}> {profile.date} </Text>
                    <Text style={styles.headerTitle}>Blog</Text>
                </View>
                <View>
                    <Image source={{ uri: profile.profilePic }} style={styles.headerImage} />
                    <View style={styles.headerImageNotification}>

                    </View>
                </View>
            </View>

            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    contentContainerStyle={{paddingLeft:30}}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View>
                                    <TouchableScale
                                        activeScale={0.9}
                                        tension={50}
                                        friction={7}
                                        useNativeDriver
                                        onPress={() => navigation.navigate('DetailsScreen', { data: item })}
                                    >
                                        <SharedElement
                                            id={`item.${item.id}.photo`}
                                        >
                                            <Image
                                                resizeMode={"cover"}
                                                source={{ uri: item.image }}
                                                style={{ width: width - 90, height: height - 450, borderRadius: 14, marginRight:30 }}
                                            />
                                        </SharedElement>

                                        <SharedElement
                                            id={`item.${item.id}.text`}
                                            style={{ width: width - 90, position: "absolute", bottom: 90, left: 10, paddingHorizontal: 10 }}
                                        >
                                            <Text style={styles.blogTitle}>
                                                {item.title}
                                            </Text>
                                        </SharedElement>

                                        <View
                                            style={{ flexDirection: "row", alignItems: 'center', position: 'absolute', bottom: 20, left: 20 }}
                                        >

                                            <SharedElement
                                                id={`item.${item.id}.profilePic`}
                                            >
                                                <Image
                                                    source={{ uri: item.profilePic }}
                                                    style={styles.blogProfilePic}
                                                />
                                            </SharedElement>

                                            <View>
                                                <SharedElement
                                                    id={`item.${item.id}.username`}
                                                >
                                                    <Text
                                                        style={styles.blogUserName}

                                                    >
                                                        {item.username}
                                                    </Text>

                                                    <Text
                                                        style={styles.readTime}

                                                    >
                                                        {item.readtime}
                                                    </Text>
                                                </SharedElement>
                                            </View>

                                        </View>

                                    </TouchableScale>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30, paddingVertical: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Popular</Text>
                <Text style={{ color: "orange", fontWeight: "bold" }}>Show All</Text>
            </View>
            <FlatList
                data={popular}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{ flexDirection: "row", paddingBottom: 30, paddingLeft: 30, alignItems: "center" }}
                        >
                            <View style={{ marginRight: 30 }} >
                                <Image
                                    source={({ uri: item.image })}
                                    style={{ width: 100, height: 100, borderRadius: 10 }}
                                />
                            </View>

                            <View style={{ width: '60%' }}>
                                <Text style={{ textTransform: 'uppercase', color: 'orange', fontWeight: "bold", marginBottom: 4 }}>
                                    {item.topic}
                                </Text>
                                <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }} >
                                    {item.title}
                                </Text>


                                <View style={{flexDirection:"row", alignItems:"center", opacity:0.4}} >
                                    <View style={{ flexDirection: "row", marginRight: 16, alignItems: "center" }} >
                                        <Text style={{ fontSize: 12 }}>
                                            {item.readtime}
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginRight: 16, alignItems: "center" }} >
                                        <Text style={{ fontSize: 12 }}>
                                            {item.likes} Likes
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginTop: 40,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    headerDate: {
        fontSize: 14,
        fontWeight: '700',
        color: 'orange',
        textTransform: "uppercase"
    },
    headerTitle: {
        fontSize: 36,
        fontWeight: "bold"
    },
    headerImage: {
        width: 55,
        height: 55,
        borderRadius: 10
    },
    headerImageNotification: {
        height: 14,
        width: 14,
        borderRadius: 6,
        position: 'absolute',
        backgroundColor: 'red',
        right: -4,
        top: -4,
        borderWidth: 2,
        borderColor: 'white'
    },
    blogTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 28
    },
    blogProfilePic: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 14
    },
    blogUserName: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    readTime: {
        fontSize: 14,
        color: 'white'
    }
})
