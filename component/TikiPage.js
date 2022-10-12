import { Image, ImageBackground, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
function TikiPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={styles.headerViewItem1}>
                    <Image source={require('../image/book.png')} style={styles.headerViewImg}></Image>
                    <View style={styles.inforProduct}>
                        <Text style={styles.headerText}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.headerText}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.salePrice}>141.800 đ</Text>
                        <Text style={styles.originPrice}>141.800 đ</Text>
                        <View style={styles.updateProduct}>
                            <View style={styles.buttonAdd}>
                                <TouchableOpacity style={styles.btnSubtract}>
                                    <Text style={{ top: '-20%', left: '30%' }}>-</Text>
                                </TouchableOpacity>
                                <Text style={{ paddingLeft: 10, paddingRight: 10, top: -2 }}>1</Text>
                                <TouchableOpacity style={styles.btnAdd}>
                                    <Text style={{ top: '-20%', left: '20%' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.orderLate}>Mua sau</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: '600' }}>Mã giảm giá đã lưu</Text>
                    <Text style={{ color: '#134FEC', width: 150, fontWeight: '600' }}>Xem tại đây</Text>
                </View>
                <View style={styles.sale}>
                    <TextInput placeholder="Mã giảm giá" style={styles.inputSale}></TextInput>
                    <TouchableOpacity
                        style={styles.ButtonAddSale}
                        onPress={() => {
                            navigation.navigate('ToDoList');
                        }}>
                        <Text style={{ textAlign: 'center', paddingTop: '10%', color: '#fff', fontWeight: '600' }}>
                            Áp dụng
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.giftCodeView}>
                <Text style={styles.giftCodeItem}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={[styles.giftCodeItem, { color: '#0A5EB7', paddingLeft: 10 }]}>Nhập tại đây?</Text>
            </View>
            <View style={styles.prePriceView}>
                <Text style={styles.prePriceItem}>Tạm tính</Text>
                <Text style={[styles.prePriceItem, { color: '#EE0D0D', paddingLeft: 10 }]}>141.800 đ</Text>
            </View>
            <View style={styles.finalPriceView}>
                <View style={styles.finalPrice}>
                    <Text style={[styles.finalPriceItem, { opacity: 0.3 }]}>Thành tiền</Text>
                    <Text style={[styles.finalPriceItem, { color: '#EE0D0D' }]}>141.800 đ</Text>
                </View>
                <TouchableOpacity
                    style={styles.btnAddOrder}
                    onPress={() => {
                        navigation.navigate('ListPage');
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#fff',
                            paddingTop: '3%',
                            fontWeight: '800',
                            fontSize: 20,
                        }}>
                        TIẾN HÀNH ĐẶT HÀNG
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C4C4C4',
        height: '100%',
    },
    headerView: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
    },
    headerViewItem1: {
        flexDirection: 'row',
    },
    inforProduct: {
        paddingLeft: 15,
    },
    headerViewImg: {
        height: 170,
        width: 120,
        objectFit: 'contain',
    },
    btnSubtract: {
        backgroundColor: '#C4C4C4',
        width: 16,
        height: 16,
    },
    btnAdd: {
        backgroundColor: '#C4C4C4',
        width: 16,
        height: 16,
    },
    headerText: {
        fontSize: 13,
        fontWeight: '700',
        paddingBottom: 10,
    },
    updateProduct: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonAdd: {
        flexDirection: 'row',
    },
    salePrice: {
        color: 'red',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
    },
    originPrice: {
        textDecorationLine: 'line-through',
        fontSize: 13,
        fontWeight: '400',
        paddingBottom: 10,
    },
    orderLate: {
        color: '#134FEC',
        fontWeight: '400',
    },
    sale: {
        paddingTop: 20,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputSale: {
        width: 200,
        borderColor: '#808080',
        borderWidth: 3,
    },
    ButtonAddSale: {
        width: 100,
        backgroundColor: '#0A5EB7',
    },
    giftCodeView: {
        padding: 15,
        marginTop: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    giftCodeItem: {
        fontWeight: '600',
        fontSize: 12,
    },
    prePriceView: {
        padding: 15,
        marginTop: 20,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    prePriceItem: {
        fontWeight: '800',
        fontSize: 20,
    },
    finalPriceView: {
        flex: 2,
        padding: 15,
        marginTop: 150,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    finalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    finalPriceItem: {
        fontWeight: '800',
        fontSize: 20,
        paddingBottom: 20,
    },
    btnAddOrder: {
        width: '100%',
        backgroundColor: '#EE0D0D',
        height: 45,
    },
});

export default TikiPage;
