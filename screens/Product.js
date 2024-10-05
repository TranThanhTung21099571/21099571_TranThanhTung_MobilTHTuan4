import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";

export default function Product({navigation}) {
    return (
        <View style={{}}>
            <View style={{flexDirection: 'row', flex: 1, marginLeft: 20, marginTop: 15, }}>
                <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                        <Image source={require('../assets/Data/Image 183.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 20,}}> 
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 10,}}>Product name</Text>
                </View>
            </View>
            <View style={{alignItems:'center', marginTop: 10,}}>
                <Image source={require('../assets/Data/Container 7 (3).png')}></Image>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.text}>
                    <Text style={styles.productPrice}>$2.99</Text>
                    <Text style={styles.promotion}>Buy 1 get 1</Text> 
                </View>  
                <View style={styles.text}>
                    <Text style={styles.productName}>Product name</Text>
                    <Text style={styles.productRating}>⭐ 4.5</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    productPrice: {
        fontSize: 20,
        color: '#28a745',
        marginLeft: 10,
    },
    promotion: {
        color: '#ff6347',
        marginLeft: 15,
    },
    productRating: {
        marginTop: 5,
        marginLeft: 10,
    },
    infoContainer: {
        marginVertical: 20,
    },
    text: {flexDirection: 'row', alignContent:'space-between', alignItems:'center'},

});