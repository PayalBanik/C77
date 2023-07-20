import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class IssLocationScreen extends Component {
    render() {
        return (
            <View style={{
                    flex: 1}}>
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
                <Text>ISS Location Screen!</Text>
                </View>
            </View>
        )
    }
}
