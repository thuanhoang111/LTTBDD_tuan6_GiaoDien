import { Text, TextInput, TouchableOpacity, View, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import ShowList from './ShowList';
import * as ImagePicker from 'expo-image-picker';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
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
const storage = getStorage(app, 'gs://appchatzala.appspot.com');

function ToDoList() {
    const [listItem, setListItem] = useState([]);
    const [item, setItem] = useState('');
    const [image, setImage] = useState(null);
    const [file, setFile] = useState({});

    const handleDeleteItem = (index) => {
        setListItem((prev) => {
            const newJobs = prev.filter((item) => item.index !== index && item);
            return newJobs;
        });
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
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
        setFile(result);
    };
    const handleSubmit = async (uri) => {
        // const blob = new Blob([uri], { type: `${uri.type}` });
        // const fileRef = ref(storage, 'file.png');
        // const uploadTask = uploadBytesResumable(fileRef, blob);

        // await uploadTask.on(
        //     'state_changed',
        //     (snapshot) => {
        //         // Observe state change events such as progress, pause, and resume
        //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //             case 'paused':
        //                 console.log('Upload is paused');
        //                 break;
        //             case 'running':
        //                 console.log('Upload is running');
        //                 break;
        //         }
        //     },
        //     (error) => {
        //         // Handle unsuccessful uploads
        //     },
        //     () => {
        //         // Handle successful uploads on complete
        //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...

        //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             console.log(downloadURL);
        //             setListItem([
        //                 ...listItem,
        //                 {
        //                     title: item,
        //                     index: Date.now(),
        //                     uri: downloadURL,
        //                 },
        //             ]);
        //             setItem('');
        //         });
        //     },
        // );
        // // We're done with the blob, close and release it
        // blob.close();
        setListItem([
            ...listItem,
            {
                title: item,
                index: Date.now(),
                uri: image,
            },
        ]);
        setItem('');
    };
    console.log(listItem);
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
                            handleSubmit(file);
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
