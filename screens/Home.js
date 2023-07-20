import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
              <SafeAreaView style={styles.safeareaview }/>
                <ImageBackground source={require('../assets/meteor_bg2.png')} style={styles.backgroundImage}>
                  <View style={styles.titleBar}>
                    <Text style={styles.titleText} >ISS TRACKER APP</Text>
                  </View>
                  <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate("Iss")}>
                    <Text style={styles.cardText}>ISS Location</Text>
                    <Text style={styles.knowmore}>{"know more--->"}</Text>
                    <Text style={styles.bgdigit}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate("Meteors")}>
                    <Text style={styles.cardText}>Meteors</Text>
                    <Text style={styles.knowmore}>{"know more--->"}</Text>
                    <Text style={styles.bgdigit}>2</Text>
                  </TouchableOpacity>
                </ImageBackground>
               
            </View>
        )
    }
}
const styles=StyleSheet.create({
container:{   flex: 1,},
safeareaview:{ marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
backgroundImage:{ flex:1, resizeMode:'cover', width: 340, height:780 },
titleBar:{flex:0.15, justifyContent:"center", alignItems:'center'},
titleText:{fontSize:40, fontWeight:'bold', color:"white"},
card:{  flex:0.25, marginLeft:50, marginRight:50, marginTop:50, backgroundColor:'white', borderRadius:30},
cardText:{ fontSize:35, color:"black", fontWeight:"bold", marginTop:75, paddingLeft:20 },
knowmore:{paddingLeft:30, color:'red', fontSize:15},
bgdigit:{position:'absolute', color:"rgba(183,183,183,0.5)", fontSize:150, right:20, bottom:-15, zIndex:-1}
})