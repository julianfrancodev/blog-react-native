import * as React from 'react';

import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';


export default function DetailsScreen(props) {


    const { width, height } = Dimensions.get('window');

    const { data } = props.route.params;

    return (
        <View style={styles.container}>
            <View>
                <SharedElement
                    id={`item.${data.id}.photo`}
                >
                    <Image
                        resizeMode={"cover"}
                        source={{ uri: data.image }}
                        style={{ width: '100%', height: height - 450, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
                    />
                </SharedElement>

                <View
                    style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 14, left: 10 }}
                >
                    <SharedElement
                        id={`item.${data.id}.profilePic`}
                    >
                        <Image
                            resizeMode={'cover'}
                            source={{ uri: data.profilePic }}
                            style={{ width: 60, height: 60, borderRadius: 10, marginRight: 14 }}
                        />

                    </SharedElement>

                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}
                    >
                        <View>
                            <SharedElement
                                id={`item.${data.id}.username`}
                            >
                                <Text
                                    style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}
                                >
                                    {data.username}
                                </Text>

                            </SharedElement>

                            <SharedElement
                                id={`item.${data.id}.readtime`}
                            >
                                <Text
                                    style={{ fontSize: 14, color: 'white' }}
                                >
                                    {data.readtime}
                                </Text>

                            </SharedElement>
                        </View>
                    </View>
                </View>

            </View>



            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 14 }}>

                <SharedElement
                    id={`item.${data.id}.title`}
                    style={{ width: width - 30, marginBottom: 14 }}
                >
                    <Text
                        style={{ fontSize: 22, fontWeight: 'bold', lineHeight: 32 }}
                    >
                        {data.title}
                    </Text>

                </SharedElement>

                <Text
                    style={{ fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie ante lorem,
                    sed posuere neque facilisis eu. Nunc in fringilla odio. Sed vel dignissim sem, eu fermentum sapien.
                    Suspendisse sit amet eleifend metus. Ut sit amet placerat eros.dignissim in nulla. Aliquam dictum,
                    velit non bibendum aliquam,lorem nisi dapibus ante, quis pharetra nibh lectus id risus. Mauris est lectus, 
                    pretium vitae sollicitudin efficitur, tempor tincidunt lacus. Aliquam quis dui purus.
                </Text>

                <Text
                    style={{ fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5 }}
                >
                    am rhoncus tempor finibus. Nunc ac finibus tellus. Suspendisse aliquet dui massa, quis eleifend neque tempus vel.
                    Aenean metus elit, dignissim facilisis tempor cursus, dignissim in nulla. Aliquam dictum, velit non bibendum aliquam,
                    lorem nisi dapibus ante, quis pharetra nibh lectus id risus. Mauris est lectus, pretium vitae sollicitudin efficitur,
                    tempor tincidunt lacus. Aliquam quis dui purus.
                </Text>

                <View
                style={{marginVertical:25,paddingBottom:20,flex:1,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}
                >
                    <TouchableOpacity
                    style={{flexDirection:'row',padding:12,alignItems: 'center'}}
                    >
                        <Text
                        style={{marginHorizontal:10}}
                        >
                            1.6K Likes
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={{padding:12,width:100,backgroundColor: 'orange',borderRadius:10}}
                    >
                        <Text
                        style={{color: 'white',fontWeight: 'bold',textAlign: 'center'}}
                        >
                           Follow
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

            <View style={{ position: 'absolute', top: 40, left: 10 }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text style={{ fontSize: 30, color: 'white' }}>{'<--'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
