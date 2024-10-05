import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Screen01({navigation}) {
  return (

    <View style={styles.container}>
        <Image source={require('../assets/Data/Container 17.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Boost Productivity</Text>
          <Text style={{fontSize: 15, color:'grey'}}>Simplify tasks, boost Productivity</Text>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('SignUp')}}>
              <Text style={{fontSize: 20, color: 'white'}}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{fontSize: 20, color: 'black'}}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,  
  },
  button: {
    backgroundColor: '#25c3d9',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '65%',
    resizeMode: 'contain',
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '90%', 
    marginLeft: 45,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

