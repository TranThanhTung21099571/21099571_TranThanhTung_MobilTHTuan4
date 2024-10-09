import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function SignUp({navigation, route}) {
    let {email, password} = route.params || {};
    const [enteredEmail, setEnteredEmail] = useState(email || 'admin');
    const [enteredPassword, setEnteredPasword] = useState(password || 'admin');
    if(email === undefined) 
        email = "admin";
    if(password === undefined) 
        password = "admin";
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Data/Image_20.png')} style={styles.image} ></Image>
            <Text style={{color:'black', fontSize:37, marginBottom: 50, fontWeight:'bold',
                 alignSelf:'flex-start', marginLeft: 10,}} >Welcome !</Text>
            <Text style={styles.textInput2}>Email</Text>
            <View style={styles.textInputContainer}>
                <Image source={require('../assets/Data/Vector.png')} style={styles.inputIcon}></Image> 
                <TextInput style={styles.textInput} placeholder='Enter your  email address' 
                value={enteredEmail} onChangeText={text => setEnteredEmail(text)}></TextInput>
            </View> 
            <Text style={styles.textInput2}>Password</Text>
            <View style={styles.textInputContainer}>
                <Image source={require('../assets/Data/lock.png')} style={styles.inputIcon}></Image> 
                <TextInput  secureTextEntry={true} style={styles.textInput} placeholder='Enter your password'
                 value={enteredPassword} onChangeText={text => setEnteredPasword(text)}></TextInput>
                <Image source={require('../assets/Data/eye.png')} style={{height: '20px', width: '20px', alignSelf:'center'}}></Image> 
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    if(enteredEmail === email && enteredPassword === password) {
                        navigation.navigate('Product');
                    } 
                    else {
                        alert('Email or Password wrong !!!');
                    }
                }}>
                    <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    textInputContainer: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 20,
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#eff1f4',
    },
    backButton: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        marginLeft: 20,
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    image: {
        marginTop: 40,
        marginBottom: 20,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 20,
    },
    inputIcon: {
        height: '20px', width: '25px',
    },
    button: {
        backgroundColor: '#25c3d9',
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 10,
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',
    },
    textInput2: {
        color:'grey',
        fontSize:20,
        alignSelf:'flex-start',
        marginLeft: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    }
});