import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
function ShowList({ item, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <View style={[{ padding: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Image
                        source={{
                            uri: item.uri,
                        }}
                        resizeMode="cover"
                        style={{ width: 80, height: 80, justifyContent: 'center' }}
                    />
                    <Text style={[{ color: '#333', fontSize: 30 }]}>{item.title}</Text>
                    <TouchableOpacity
                        style={[{ backgroundColor: '#F31111', padding: 10, paddingVertical: 10 }]}
                        onPress={onPress}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        width: '100%',
        backgroundColor: 'white',
    },
});

export default ShowList;
