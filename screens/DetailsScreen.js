import * as React from 'react';

import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

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
            </View>
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
