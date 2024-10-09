import { View, Image, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
const screen4 = () => {

    const products = [
        {
            id: 1,
            name: 'DONUT PINK',
            prices: { S: 100, M: 120, L: 140, XL: 160 },
            rating: 4.5,
            bigImg: require('../assets/img/Container 7 (3).png'),
            img: require('../assets/img/Image 7 (4).png')
        },
        {
            id: 2,
            name: 'DONUT BLUE',
            prices: { S: 200, M: 220, L: 240, XL: 260 },
            rating: 4.0,
            bigImg: require('../assets/img/Container 7 (2).png'),
            img: require('../assets/img/Image 7 (2).png')
        },
        {
            id: 3,
            name: 'ORANGE',
            prices: { S: 300, M: 320, L: 340, XL: 360 },
            rating: 4.0,
            bigImg: require('../assets/img/Container 7 (1).png'),
            img: require('../assets/img/Image 7 (1).png')
        },
        {
            id: 4,
            name: 'CHERRY',
            prices: { S: 400, M: 420, L: 440, XL: 460 },
            rating: 4.0,
            bigImg: require('../assets/img/Container 7.png'),
            img: require('../assets/img/Image 7.png')
        },
    ];
    
    const [seletedProduct, setSeletedProduct] = useState(products[0]);
    const [Quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const increaseQuantity = () => {
        setQuantity(Quantity + 1);
    }
    const decreaseQuantity = () => {
        if(Quantity>1){
            setQuantity(Quantity - 1);
        }
        
    }
    const handleProductSelect = (product) => {
        setSeletedProduct(product);
        setQuantity(1);
        setSelectedSize('S')
    };
    const calculateTotal = () => {
        return seletedProduct.prices[selectedSize] * Quantity;
    };


    const handlePress = (size) => {
        setSelectedSize(size);
    };
    const handleAddToCart = () => {
        if (!selectedSize) {
            Toast.show({
                type: 'error',
                text1: 'Thông báo',
                text2: 'Vui lòng điền đầy đủ thông tin và đồng ý với điều khoản.',
            });
        } else {
            Toast.show({
                type: 'success',
                text1: 'Thông báo',
                text2: 'Vui lòng điền đầy đủ thông tin và đồng ý với điều khoản.',
            });
            resetFields();
        }
    };
    const resetFields = () => {
       setSeletedProduct(products[0]);
        setQuantity(1);
        setSelectedSize(null);
    };
    return (
        <ScrollView>
        <View >
            
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Image style={{ height: 200, width: 350 }} source={seletedProduct.bigImg} />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                {products.map((product) => (
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10  ,
                    borderColor: seletedProduct.id === product.id ? '#248282' : '#ccc'}}
                    key={product.id} onPress={() => handleProductSelect(product)}
                    >
                        <Image style={{ height: 50, width: 50 }} source={product.img} />
                    </TouchableOpacity>
                )

                )}
            </View>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#248282' }} >${seletedProduct.prices[selectedSize] || seletedProduct.prices.S}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', width: 310 }}>{seletedProduct.name}</Text>
                <Image source={require('../assets/img/Rating 3.png')} />
                <Text>{seletedProduct.rating}</Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text>Size</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <TouchableOpacity style={{ height: 30, width: 40, borderWidth: 1, backgroundColor: selectedSize === 'S' ? '#248282' : 'white' }} onPress={() => handlePress('S')}>
                        <Text style={{ marginHorizontal: 13, marginVertical: 5 }}>S</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 30, width: 40, borderWidth: 1, backgroundColor: selectedSize === 'M' ? '#248282' : 'white' }} onPress={() => handlePress('M')}>
                        <Text style={{ marginHorizontal: 13, marginVertical: 5 }}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 30, width: 40, borderWidth: 1, backgroundColor: selectedSize === 'L' ? '#248282' : 'white' }} onPress={() => handlePress('L')}>
                        <Text style={{ marginHorizontal: 13, marginVertical: 5 }}>L</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 30, width: 40, borderWidth: 1, backgroundColor: selectedSize === 'XL' ? '#248282' : 'white' }} onPress={() => handlePress('XL')}>
                        <Text style={{ marginHorizontal: 10, marginVertical: 5 }}>XL</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text>Quantity</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <TouchableOpacity style={{ height: 35, width: 35, borderWidth: 1, borderRadius: 15 }}
                        onPress={decreaseQuantity}
                    >
                        <Text style={{ marginHorizontal: 12, marginVertical: 5 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 10, marginTop: 5 }}>{Quantity}</Text>
                    <TouchableOpacity
                        onPress={increaseQuantity}
                    >
                        <Image style={{ borderRadius: 15, marginLeft: 10 }} source={require('../assets/img/Button 5.png')} />
                        
                    </TouchableOpacity>
                    <View style={{ marginLeft: 180, flexDirection: 'row' }}>
                        Total:
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}> ${calculateTotal()} </Text>
                    </View>
                </View>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Image style={{ width: 400 }} source={require('../assets/img/Line 4.png')} />
            </View>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text>Size giude</Text>
            </View>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Image source={require('../assets/img/Line 4.png')} />
            </View>
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text>Review(99)</Text>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#248282', paddingVertical: 10, marginTop: 10, marginHorizontal: 20 }}
onPress={handleAddToCart}
            >
                <Text style={{ color: 'white' }}>Add to cart</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

export default screen4