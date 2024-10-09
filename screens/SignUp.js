import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";


export default function SignUp({navigation}) {
    const [checked, setChecked] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <Image source={require('../assets/Data/Image_183.png')}></Image>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/Data/Image_19.png')} style={styles.image} >
            </Image>
            <Text style={styles.Title}>Nice to see you!</Text>
            <Text style={{color:'grey', fontSize:17, marginBottom: 20,}} >Create your account</Text>
            <View style={styles.textInputContainer}>
                <Image source={require('../assets/Data/codicon_account.png')} style={styles.inputIcon}></Image> 
                <TextInput style={styles.textInput} placeholder='Enter your user name' ></TextInput>
            </View>
            <View style={styles.textInputContainer}>
                <Image source={require('../assets/Data/Vector.png')} style={styles.inputIcon}></Image> 
                <TextInput style={styles.textInput} placeholder='Enter your email address' onChangeText={text => setEmail(text)}></TextInput>
            </View>
            <View style={styles.textInputContainer}>
                <Image source={require('../assets/Data/lock.png')} style={styles.inputIcon}></Image> 
                <TextInput secureTextEntry={true} style={styles.textInput} placeholder='Enter your passsword' onChangeText={text => setPassword(text)}></TextInput>
            </View>
            <View style={{flexDirection: 'row',}}>
                <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {
                    setChecked(!checked);
                }}/>
                <Text style={{marginTop: 7, fontSize: 17}}>I agree with <Text style={{color: '#52a7e8', fontSize: 17}}>Terms & Conditions</Text></Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    if(checked) {
                        navigation.navigate('Login', {email, password});
                    }
                    else {
                        alert('Please agree to the Terms & Conditions before continue.');
                    }
                }}>
                    <Text style={{fontSize: 20, color: 'white'}}>Continue</Text>
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
        width: '100%',
        marginLeft: 10,
        fontSize: 20,
    },
    inputIcon: {
        height: '22px', width: '25px',
    },
    button: {
        backgroundColor: '#25c3d9',
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 10,
        width: '100%',
        marginTop: 20,
    },
});