import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function Product({navigation}) {
    const products = [
        {
            id: 1,
            name: 'DONUT PINK',
            image: require('../assets/Data/Image_7(4).png'),
            bigImage: require('../assets/Data/Container_7(3).png'),
            prices: {XS : 2, S : 3, M : 4, L : 5,XL : 6,},
            promotion: 'Buy 1 Get 1',
            rating: '4.5',
        },
        {
            id: 2,
            name: 'DONUT BLUE',
            image: require('../assets/Data/Image_7(2).png'),
            bigImage: require('../assets/Data/Container_7(2).png'),
            prices: {XS : 2.1, S : 3.1, M : 4.1, L : 5.1,XL : 6.1,},
            promotion: '',
            rating: '4.0',
        }, 
        {
            id: 3,
            name: 'ORANGE',
            image: require('../assets/Data/Image_7(1).png'),
            bigImage: require('../assets/Data/Container_7(1).png'),
            prices: {XS : 2.2, S : 3.3, M : 4.4, L : 5.5,XL : 6.6,},
            promotion: 'Buy 1 Get 1',
            rating: '5.0',
        },
        {
            id: 4,
            name: 'JERRY',
            image: require('../assets/Data/Image_7.png'),
            bigImage: require('../assets/Data/Container_7.png'),
            prices: {XS : 2.3, S : 3.3, M : 4.3, L : 5.3,XL : 6.3,},
            promotion: '',
            rating: '4.5',
        },
    ];
    const [seletedProduct, setSeletedProduct] = useState(products[0]);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedPromotion, setSelectedPromotion] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if(quantity > 1)
            setQuantity(quantity - 1);
    }
    const handleProductSelect = (product) => {
        setSeletedProduct(product);
    }
    const handleTotal = () => {
        return quantity * seletedProduct.prices[selectedSize];
    }
    const handleSelectSize = (size) => {
        setSelectedSize(size);
    }
    const handleAddToCart = () => {
        if(!selectedSize) {
            Toast.show({
                type: 'error',
                text1: 'Thông báo',
                text2: 'Vui lòng điền đầy đủ thông tin'
            })
        }
        else {
            Toast.show({
                type: 'success',
                text1: 'Thông báo',
                text2: 'Thành công',
            })
        }
    }
    return (
       <ScrollView>
         <View style={{backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', flex: 1, marginLeft: 20, marginTop: 15,}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                    <Image source={require('../assets/Data/Image_183.png')}></Image>
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 15,}}>{seletedProduct.name}</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 5,}}> 
                <Image style={{width:355, height: 192}} source={seletedProduct.bigImage}></Image>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginLeft: 10, marginTop: 10,}}>
                {
                    products.map((product) => (
                        <View>
                            <TouchableOpacity style = {
                            {
                                borderColor: seletedProduct.id === product.id ? '#248282' : '#ccc',
                                borderWidth: 1,
                                borderRadius: 10,
                                marginLeft: 20,
                            }
                            } 
                                onPress={() => handleProductSelect(product)}>
                                <Image source={product.image}></Image>
                            </TouchableOpacity>
                        </View>
                    )) 
                }
            </View>
            <View style={{marginLeft: 10, marginTop: 35, flexDirection: 'row', flex: 1}}>
                <View style = {{marginRight: 5,}}>
                    <Text style={{fontSize: 25, color: '#248282', fontWeight: 'bold',  alignItems: 'center'}}>
                        ${seletedProduct.prices[selectedSize]}
                    </Text>
                </View>
                <View style={{marginLeft: 10, justifyContent: 'center', 
                        backgroundColor: selectedPromotion === 'Buy 1 Get 1' ? '#f7eff0' : 'white',
                        borderWidth: 1, borderColor: selectedPromotion === 'Buy 1 Get 1' ? '#f7eff0' : 'white',
                        borderRadius: 10, width: 100,}}>
                    <Text style={{fontSize: 15, color: 'red', alignSelf: 'center'}}>
                        {seletedProduct.promotion}
                    </Text>
                </View>
            </View>
            <View style={{marginLeft: 10, flexDirection: 'row', justifyContent:'space-between'}}>
                <View><Text style={{fontSize: 20, fontWeight: 'bold'}}>{seletedProduct.name}</Text></View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 20,}}>
                    <Image source={require('../assets/Data/Rating_3.png')}></Image>
                    <Text>{seletedProduct.rating}</Text>
                </View>
            </View> 
            <Text style={{fontSize: 16, marginLeft: 10,}}>Size</Text>
            <View style={styles.row}>
                <TouchableOpacity style={{height: 30,width: 40,borderWidth: 1,borderRadius: 5,alignItems: 'center',
                 backgroundColor: selectedSize === 'XS' ? '#2596be' : 'white'}} onPress={() => {handleSelectSize('XS')}}>
                    <Text style={styles.textSize}>XS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 30,width: 40,borderWidth: 1,borderRadius: 5,alignItems: 'center',
                 backgroundColor: selectedSize === 'S' ? '#2596be' : 'white'}} onPress={() => {handleSelectSize('S')}}>
                    <Text style={styles.textSize}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 30,width: 40,borderWidth: 1,borderRadius: 5,alignItems: 'center',
                 backgroundColor: selectedSize === 'M' ? '#2596be' : 'white'}} onPress={() => {handleSelectSize('M')}}>
                    <Text style={styles.textSize}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 30,width: 40,borderWidth: 1,borderRadius: 5,alignItems: 'center',
                 backgroundColor: selectedSize === 'L' ? '#2596be' : 'white'}} onPress={() => {handleSelectSize('L')}}>
                    <Text style={styles.textSize}>L</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 30,width: 40,borderWidth: 1,borderRadius: 5,alignItems: 'center',
                 backgroundColor: selectedSize === 'XL' ? '#2596be' : 'white'}} onPress={() => {handleSelectSize('XL')}}>
                    <Text style={styles.textSize}>XL</Text>
                </TouchableOpacity>
            </View>
            <Text style={{marginLeft: 10, marginTop: 5, fontSize: 16,}}>Quantity</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10, alignItems: 'center'}}>
                    <TouchableOpacity style={{marginRight: 10,}} onPress={() => decreaseQuantity()}>
                        <Image source={require('../assets/Data/Button_5(1).png')}></Image>
                    </TouchableOpacity>
                    <Text style={{fontSize: 15,}}>{quantity}</Text>
                    <TouchableOpacity style={{marginLeft: 10,}} onPress={() => increaseQuantity()}>
                        <Image source={require('../assets/Data/Button_5.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{marginRight: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, marginRight: 5,}}>Total:</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>${handleTotal()}</Text>
                </View>
            </View>
            <View style={{marginLeft: 10, marginBottom: 20,}}>
                <Image style={{height: 1, width: 100, marginBottom: 10,}} source={require('../assets/Data/Line_4(1).png')}></Image>
                <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom: 10,}}>Size guide</Text>
                <Image style={{height: 1, width: 100, marginBottom: 10,}} source={(require('../assets/Data/Line_4(1).png'))}></Image>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>Review</Text>
            </View>
            <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginBottom: 20,}}>
                <TouchableOpacity style={{backgroundColor: '#248282', borderRadius: 5, paddingHorizontal: 70,}} 
                onPress={() => {
                    handleAddToCart;
                    navigation.navigate('Home');
                }}>
                    <Text style={{fontSize: 20,}}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>    
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    row : {
        flexDirection: 'row', flex: 1, marginLeft: 10, marginTop: 10,
    },
    size: {
        height: 35,width: 45,borderWidth: 1,borderRadius: 5,alignItems: 'center',
    },
    textSize: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center'
    }
});