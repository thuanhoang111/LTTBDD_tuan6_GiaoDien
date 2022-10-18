import { Text, TextInput, TouchableOpacity, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import ShowList from './ShowList';
import * as ImagePicker from 'expo-image-picker';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, storage, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import axios from 'axios';
const firebaseConfig = {
    apiKey: 'AIzaSyAdHX9EhKek9C_AFjT0gSAaChjpype9Oi0',
    authDomain: 'appchatzala.firebaseapp.com',
    projectId: 'appchatzala',
    storageBucket: 'appchatzala.appspot.com',
    messagingSenderId: '1073900432056',
    appId: '1:1073900432056:web:a42ae72d589957cce1e24d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const getStorage1 = getStorage(app, 'gs://appchatzala.appspot.com');

function ToDoList() {
    const [listItem, setListItem] = useState([]);
    const [item, setItem] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios
            .get('https://634812480484786c6e9101bd.mockapi.io/todoApp')
            .then(function (response) {
                setListItem(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {});
    }, [listItem]);

    const handleDeleteItem = (index) => {
        axios
            .delete(`https://634812480484786c6e9101bd.mockapi.io/todoApp/${index}`)
            .then(function (response) {
                setListItem((prev) => {
                    prev.filter((item) => item.index !== index && item);
                });
            })
            .catch(function (error) {
                console.log(error);
                // ToastAndroid.show("Không thế thêm");
            })
            .finally(function () {});
    };

    const handleView = ({ item }) => {
        return (
            <ShowList
                item={item}
                onPress={() => {
                    handleDeleteItem(item.index);
                }}></ShowList>
        );
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            width: 100,
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const handleSubmit = async (uri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });
        const fileRef = ref(getStorage1, blob._data.name);
        const uploadTask = uploadBytesResumable(fileRef, blob);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    axios
                        .post(`https://634812480484786c6e9101bd.mockapi.io/todoApp`, {
                            title: item,
                            index: Date.now(),
                            uri: downloadURL,
                        })
                        .then(function (response) {
                            console.log(response.data);
                            setListItem([...listItem, response.data]);
                            setImage('');
                            setItem('');
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                        .finally(function () {});
                });
            },
        );
    };

    return (
        <View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 70 }}>
                    <TouchableOpacity
                        onPress={pickImage}
                        style={{
                            borderColor: '#000',
                            borderWidth: 5,
                            borderRadius: 50,
                            width: 50,
                            height: 50,
                        }}></TouchableOpacity>
                    {image && (
                        <Image
                            source={{ uri: image }}
                            style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 50 }}
                        />
                    )}
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput
                        placeholder="nhập tiêu đề "
                        style={{ width: 200, borderColor: '#808080', borderWidth: 3, height: 50 }}
                        onChangeText={(e) => setItem(e)}
                        value={item}></TextInput>
                    <TouchableOpacity
                        style={{ borderColor: '#000', borderWidth: 5, borderRadius: 50, width: 50, height: 50 }}
                        onPress={() => {
                            handleSubmit(image);
                        }}>
                        <Text style={{ fontSize: 20, top: 4, left: 12 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 150 }}>
                <FlatList data={listItem} renderItem={handleView} keyExtractor={(item) => item.index}></FlatList>
            </View>
        </View>
    );
}

export default ToDoList;
