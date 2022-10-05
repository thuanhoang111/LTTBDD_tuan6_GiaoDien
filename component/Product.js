import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Product = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Image
                    source={require('../image/book.png')}
                    resizeMode="cover"
                    style={{ width: 100, height: 100, justifyContent: 'center' }}
                />
                <View style={[{ paddingLeft: 20, paddingTop: 20 }]}>
                    <Text style={[{ color: '#333' }]}>{item.productName}</Text>
                    <Text style={[{ paddingTop: 20, width: 200 }]}>{item.storeName}</Text>
                </View>
                <View style={[{ justifyContent: 'center', alignItems: 'center', left: -30, top: 10 }]}>
                    <TouchableOpacity style={[{ backgroundColor: '#F31111', padding: 10 }]}>
                        <Text>add cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        width: '100%',
        flexDirection: 'row',
        height: 120,
        backgroundColor: 'white',
    },
});
export default Product;
