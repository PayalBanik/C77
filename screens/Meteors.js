import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class MeteorScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    
                }}>
                <View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
                  <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Meteor Screen!</Text>
                </View>
            </View>
        )
    }
}